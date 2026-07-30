<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\Notifications\BellText;
use PanelKit\Panel\Notifications\TelegramText;
use Tests\TestCase;

/**
 * Roadmap 5.4: compose once, deliver to the banner, the bell and Telegram.
 *
 * The properties worth proving: delivery happens ONCE (on create, never on
 * edit), it reaches only the announcement's own organisation, and choosing
 * no transport pushes nothing at all - the banner needs no delivery,
 * because it is pull.
 */
final class AnnouncementDeliveryTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    protected function setUp(): void
    {
        parent::setUp();

        Notification::fake();

        // The keys the Telegram channel actually reads - see Alerts\Telegram.
        config([
            'services.telegram.token' => 'test-token',
            'services.telegram.chat_id' => '12345',
        ]);

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
    }

    private function compose(array $attributes = []): Announcement
    {
        return Announcement::query()->forceCreate([
            'tenant_id' => $this->acme->id,
            'title' => 'Maintenance on Sunday',
            'body' => 'The panel pauses for ten minutes at 02:00.',
            'severity' => Announcement::WARNING,
            'display' => Announcement::BANNER,
            ...$attributes,
        ]);
    }

    /* ------------------------------------------------------------- the bell */

    public function test_the_bell_reaches_every_member_of_the_organisation_and_nobody_else(): void
    {
        $ours = User::factory()->count(2)->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);
        $theirs = User::factory()->create(['tenant_id' => $this->rival->id, 'email_verified_at' => now()]);

        $this->compose(['notify_bell' => true]);

        foreach ($ours as $user) {
            Notification::assertSentTo($user, BellText::class);
        }

        // The no-leak half: a notice written for Acme never rings Rival's bell.
        Notification::assertNotSentTo($theirs, BellText::class);
    }

    public function test_the_bell_payload_is_shaped_for_the_dropdown(): void
    {
        $user = User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $this->compose(['notify_bell' => true, 'action_url' => '/apps/mail']);

        Notification::assertSentTo($user, BellText::class, function (BellText $notification) use ($user): bool {
            $data = $notification->toArray($user);

            return $data['title'] === 'Maintenance on Sunday'
                && $data['href'] === '/apps/mail'
                && $data['severity'] === Announcement::WARNING;
        });
    }

    /* ------------------------------------------------------------- telegram */

    public function test_telegram_gets_one_message(): void
    {
        $this->compose(['notify_telegram' => true]);

        Notification::assertSentTimes(TelegramText::class, 1);
    }

    /* ------------------------------------------------------- once, and only */

    public function test_no_transport_chosen_means_no_push_at_all(): void
    {
        User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $this->compose();

        Notification::assertNothingSent();
    }

    /**
     * The untouched form must save - which is the bug this pins.
     *
     * A create page seeds every field from a record that does not exist, so
     * toggles arrived as null, the form faithfully submitted the null, and
     * `boolean` rejected it: "the notify telegram field must be true or
     * false", about a control the user never touched and which was visibly
     * OFF the whole time. `ToggleField::presentValue()` now seeds false, so
     * this walks the real path: read the create page's values, submit them
     * back exactly as given.
     */
    public function test_the_untouched_composer_form_submits_cleanly(): void
    {
        $user = User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $values = $this->actingAs($user)->get('/announcements/create')->assertOk()
            ->viewData('page')['props']['values'];

        $this->assertFalse($values['notify_bell']);
        $this->assertFalse($values['notify_telegram']);

        $this->actingAs($user)
            ->post('/announcements', [
                ...$values,
                'title' => 'Maintenance on Sunday',
                'severity' => Announcement::WARNING,
                'display' => Announcement::BANNER,
            ])
            ->assertSessionHasNoErrors()
            ->assertRedirect();

        // And two untouched toggles mean nothing was pushed.
        Notification::assertNothingSent();
    }

    /** Delivery is once: a typo fix must not ring every phone twice. */
    public function test_editing_never_re_delivers(): void
    {
        User::factory()->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        $announcement = $this->compose(['notify_bell' => true, 'notify_telegram' => true]);

        Notification::assertSentTimes(BellText::class, 1);
        Notification::assertSentTimes(TelegramText::class, 1);

        $announcement->update(['title' => 'Maintenance on Sunday (corrected)']);

        // Still exactly one of each - the edit pushed nothing new.
        Notification::assertSentTimes(BellText::class, 1);
        Notification::assertSentTimes(TelegramText::class, 1);
    }
}
