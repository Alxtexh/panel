<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Alerts\Announcement;
use Tests\TestCase;

/**
 * Notices somebody wrote, at the top of the dashboard.
 *
 * WHAT THIS REPLACES. There was a page called Announcements, and a page called
 * Announcements is a page people open once out of curiosity and never again - so
 * the notice everybody needed to read was reliably the one nobody read. Reading
 * moved to a banner on the screen people already open; writing stayed a resource,
 * because composing one is a table with a form.
 *
 * THE INTERESTING ASSERTIONS ARE ABOUT DISMISSAL, which is where this design
 * could go wrong in two opposite directions:
 *
 *   DESTROYING IT. Somebody closes a banner because it is in the way of the work
 *   they came to do, not because they are finished with it - and "maintenance on
 *   Sunday" dismissed on Tuesday is exactly what they want on Saturday. So a
 *   dismissal writes the notice into their notifications.
 *
 *   HIDING IT FROM EVERYBODY. One announcement is shown to a whole organisation,
 *   so a `dismissed_at` column would let the first person to tidy their
 *   dashboard remove it from all their colleagues.
 */
final class AnnouncementTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);
    }

    private function announce(Tenant $tenant, array $attributes = []): Announcement
    {
        return Announcement::query()->forceCreate([
            'tenant_id' => $tenant->id,
            'title' => 'Maintenance on Sunday',
            'body' => 'The panel will be unavailable between 02:00 and 04:00.',
            'severity' => Announcement::WARNING,
            'display' => Announcement::BANNER,
            ...$attributes,
        ]);
    }

    /** @return array<int, array<string, mixed>> */
    private function banners(User $user): array
    {
        return $this->actingAs($user)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['announcements'];
    }

    /* ------------------------------------------------------- on the dashboard */

    public function test_an_announcement_appears_on_the_dashboard(): void
    {
        $this->announce($this->acme);

        $banners = $this->banners($this->user);

        $this->assertCount(1, $banners);
        $this->assertSame('Maintenance on Sunday', $banners[0]['title']);
        $this->assertSame('warning', $banners[0]['severity']);
    }

    /**
     * ANOTHER ORGANISATION'S NOTICE IS NOT SHOWN. A banner is the most visible
     * surface in the panel, which makes it the worst place for a missing scope.
     */
    public function test_another_organisations_announcement_is_not_shown(): void
    {
        $this->announce($this->rival, ['title' => 'Rival internal notice']);

        $this->assertSame([], $this->banners($this->user));
    }

    /**
     * THE WINDOW IS PART OF THE QUERY.
     *
     * `starts_at` is what lets somebody write Monday's notice on Friday;
     * `ends_at` is what stops last month's maintenance window sitting on the
     * dashboard forever, because nobody ever goes back to delete one.
     */
    public function test_a_notice_outside_its_window_is_not_shown(): void
    {
        $this->announce($this->acme, ['title' => 'Next week', 'starts_at' => now()->addWeek()]);
        $this->announce($this->acme, ['title' => 'Last month', 'ends_at' => now()->subMonth()]);
        $this->announce($this->acme, ['title' => 'Now', 'starts_at' => now()->subHour()]);

        $titles = array_column($this->banners($this->user), 'title');

        $this->assertSame(['Now'], $titles);
    }

    /** Urgent first: the one that matters should not be third. */
    public function test_the_most_serious_notice_is_first(): void
    {
        $this->announce($this->acme, ['title' => 'A new export format', 'severity' => Announcement::INFO]);
        $this->announce($this->acme, ['title' => 'Billing is down', 'severity' => Announcement::DANGER]);

        $this->assertSame('Billing is down', $this->banners($this->user)[0]['title']);
    }

    /* -------------------------------------------------------------- dismissal */

    public function test_dismissing_removes_it_for_that_person(): void
    {
        $announcement = $this->announce($this->acme);

        $this->actingAs($this->user)
            ->post("/announcements/{$announcement->id}/dismiss")
            ->assertRedirect();

        $this->assertSame([], $this->banners($this->user));
    }

    /**
     * AND FOR NOBODY ELSE.
     *
     * The reason dismissals are a table rather than a column: one announcement
     * is shown to a whole organisation, and the first person to tidy their
     * dashboard must not remove it from all their colleagues.
     */
    public function test_dismissing_leaves_it_for_colleagues(): void
    {
        $announcement = $this->announce($this->acme);

        $colleague = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user)
            ->post("/announcements/{$announcement->id}/dismiss")
            ->assertRedirect();

        $this->assertCount(1, $this->banners($colleague));
    }

    /**
     * DISMISSING MOVES IT INTO NOTIFICATIONS RATHER THAN DESTROYING IT.
     *
     * Somebody closes a banner because it is in the way, not because they are
     * finished with it. Without this the × is a trapdoor: the only copy of
     * something they were told once, gone, with no undo.
     */
    public function test_a_dismissed_notice_is_still_in_the_notifications(): void
    {
        $announcement = $this->announce($this->acme, [
            'action_label' => 'Pay now',
            'action_url' => '/apps/mail',
        ]);

        $this->actingAs($this->user)
            ->post("/announcements/{$announcement->id}/dismiss")
            ->assertRedirect();

        $notification = $this->user->fresh()->notifications()->first();

        $this->assertNotNull($notification, 'Dismissing destroyed the notice.');
        $this->assertSame('Maintenance on Sunday', $notification->data['title']);
        // The action travels too: a record of a message minus what it asked you
        // to do is half a message.
        $this->assertSame('/apps/mail', $notification->data['href']);
    }

    /** Dismissing twice is one dismissal and one notification. */
    public function test_dismissing_twice_notifies_once(): void
    {
        $announcement = $this->announce($this->acme);

        $this->actingAs($this->user)->post("/announcements/{$announcement->id}/dismiss")->assertRedirect();
        $this->actingAs($this->user)->post("/announcements/{$announcement->id}/dismiss")->assertRedirect();

        $this->assertSame(1, $this->user->fresh()->notifications()->count());
    }

    /** Another organisation's notice cannot be dismissed, or discovered. */
    public function test_another_organisations_notice_cannot_be_dismissed(): void
    {
        $theirs = $this->announce($this->rival);

        $this->actingAs($this->user)
            ->post("/announcements/{$theirs->id}/dismiss")
            ->assertNotFound();
    }

    /* --------------------------------------------------------------- writing */

    /**
     * THE MANAGEMENT SCREEN IS A RESOURCE, installed by a plugin.
     *
     * Composing a notice is a table with a form, so it is an ordinary resource -
     * and it being installed by `AnnouncementsPlugin` is what proves a package
     * can add a whole CRUD screen without the application registering anything.
     */
    public function test_announcements_are_written_from_a_resource(): void
    {
        $this->actingAs($this->user)->get('/announcements')->assertOk();
    }

    /** There is no longer a page whose job was to LIST them to everybody. */
    public function test_reading_them_is_the_dashboard_rather_than_a_page(): void
    {
        $component = $this->actingAs($this->user)->get('/announcements')->assertOk()
            ->viewData('page')['component'];

        // A resource index, not a bespoke Announcements screen.
        $this->assertSame('ResourceIndex', $component);
    }
}
