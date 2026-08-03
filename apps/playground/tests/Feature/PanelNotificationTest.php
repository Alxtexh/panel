<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use PanelKit\Panel\Alerts\Alert;
use PanelKit\Panel\Alerts\AlertRule;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * The packaged bell.
 *
 * THE ISOLATION TESTS COME FIRST, and they are the reason this endpoint moved
 * into the package at all. Every application that wanted a bell wrote these four
 * routes itself, and the check that matters - that an id from someone else's
 * stream is simply not found - is one line that reads exactly the same whether
 * it is there or not. Written once, tested once.
 *
 * THE TWO STREAMS ARE ASSERTED SEPARATELY because they mean different things: an
 * alert is what is TRUE NOW and has no read state, a notification is what
 * HAPPENED to one person and does. The badge counts only the second, which is
 * the assertion that keeps it from being permanently lit.
 */
final class PanelNotificationTest extends TestCase
{
    use RefreshDatabase;

    private function person(string $email): User
    {
        $tenant = Tenant::firstOrCreate(['slug' => 'acme'], ['name' => 'Acme']);

        config(['panel.tenancy.resolver' => fn () => $tenant->getKey()]);

        return User::factory()->withAbilities(['view_any_clients'])->create([
            'tenant_id' => $tenant->getKey(),
            'email' => $email,
            'email_verified_at' => now(),
        ]);
    }

    /** Laravel's own notification writer, so nothing here mocks the thing under test. */
    private function notify(User $user, string $title): string
    {
        $id = (string) Str::uuid();

        DB::table('notifications')->insert([
            'id' => $id,
            'type' => 'panel.test',
            'notifiable_type' => $user::class,
            'notifiable_id' => $user->getKey(),
            'data' => json_encode(['title' => $title, 'body' => 'x', 'severity' => 'info']),
            'read_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    public function test_it_returns_the_signed_in_persons_notifications(): void
    {
        $user = $this->person('mine@example.test');
        $this->notify($user, 'Export finished');

        $this->actingAs($user)
            ->getJson('/notifications')
            ->assertOk()
            ->assertJsonPath('notifications.0.title', 'Export finished')
            ->assertJsonPath('unread', 1);
    }

    /**
     * ONE PERSON NEVER SEES ANOTHER'S. The whole endpoint is judged on this.
     */
    public function test_it_never_returns_another_persons_notification(): void
    {
        $other = $this->person('other@example.test');
        $this->notify($other, 'Their private export');

        $mine = $this->person('mine@example.test');

        $response = $this->actingAs($mine)->getJson('/notifications')->assertOk();

        $this->assertSame([], $response->json('notifications'));
        $this->assertSame(0, $response->json('unread'));
    }

    /**
     * AND CANNOT CLEAR ONE EITHER.
     *
     * `markAsRead` on somebody else's row is not a leak of content, which is
     * exactly why it is the check that gets skipped - but it lets anybody empty
     * anybody's bell, and the notification they never saw is gone.
     */
    public function test_it_cannot_mark_another_persons_notification_read(): void
    {
        $other = $this->person('other@example.test');
        $id = $this->notify($other, 'Theirs');

        $mine = $this->person('mine@example.test');

        $this->actingAs($mine)->postJson("/notifications/{$id}/read")->assertNotFound();

        $this->assertNull(DB::table('notifications')->where('id', $id)->value('read_at'));
    }

    public function test_it_cannot_delete_another_persons_notification(): void
    {
        $other = $this->person('other@example.test');
        $id = $this->notify($other, 'Theirs');

        $mine = $this->person('mine@example.test');

        $this->actingAs($mine)->deleteJson("/notifications/{$id}")->assertNotFound();

        $this->assertDatabaseHas('notifications', ['id' => $id]);
    }

    /** Marking all read clears the badge and touches nobody else's rows. */
    public function test_mark_all_read_is_scoped_to_the_acting_person(): void
    {
        $other = $this->person('other@example.test');
        $theirs = $this->notify($other, 'Theirs');

        $mine = $this->person('mine@example.test');
        $this->notify($mine, 'Mine');

        $this->actingAs($mine)->postJson('/notifications/read-all')->assertOk();

        $this->assertSame(0, $this->actingAs($mine)->getJson('/notifications')->json('unread'));
        $this->assertNull(DB::table('notifications')->where('id', $theirs)->value('read_at'));
    }

    /**
     * THE BADGE COUNTS NOTIFICATIONS, NOT ALERTS.
     *
     * A registered rule that fires puts a row in `alerts` and leaves `unread` at
     * zero. Counting both would light the badge for as long as the condition
     * holds, which teaches people to ignore it - and then they miss the
     * notification that mattered.
     */
    public function test_a_declared_alert_appears_without_touching_the_unread_count(): void
    {
        app(PanelManager::class)->alertRule(AlertRule::make(
            'test_condition',
            fn (): ?Alert => Alert::make(
                'test_condition',
                Alert::WARNING,
                'Three things need attention',
                'Body.',
                '/clients',
                3,
            ),
        ));

        $response = $this->actingAs($this->person('mine@example.test'))
            ->getJson('/notifications')
            ->assertOk();

        $this->assertSame('Three things need attention', $response->json('alerts.0.title'));
        $this->assertSame(0, $response->json('unread'));
    }

    /**
     * A RULE THAT THROWS IS SKIPPED, not fatal. The alert panel is what an
     * operator opens WHEN something is wrong, so it is the worst possible
     * surface to fail closed on one bad query.
     */
    public function test_a_failing_rule_does_not_take_the_bell_with_it(): void
    {
        $panels = app(PanelManager::class);

        $panels->alertRule(AlertRule::make('broken', function (): ?Alert {
            throw new \RuntimeException('bad query');
        }));

        $panels->alertRule(AlertRule::make(
            'healthy',
            fn (): ?Alert => Alert::make('healthy', Alert::INFO, 'Still here', '', null, 1),
        ));

        $this->actingAs($this->person('mine@example.test'))
            ->getJson('/notifications')
            ->assertOk()
            ->assertJsonPath('alerts.0.title', 'Still here');
    }

    /**
     * A FRESH LARAVEL APPLICATION HAS NO `notifications` TABLE.
     *
     * `Notifiable` is on the default User model; the MIGRATION is opt-in. So
     * `method_exists` said yes, the query ran, and every panel page on a brand
     * new installation died with "no such table: notifications" - including the
     * sign-in landing page, which made the panel look broken on first run.
     *
     * "NOTHING UNREAD" IS THE HONEST ANSWER, and it is also the true one.
     */
    public function test_the_bell_answers_when_the_notifications_table_is_absent(): void
    {
        $user = $this->person('mine@example.test');

        Schema::drop('notifications');

        $this->actingAs($user)
            ->getJson('/notifications')
            ->assertOk()
            ->assertJsonPath('notifications', [])
            ->assertJsonPath('unread', 0);
    }

    /** And so does every ordinary panel screen, which is where it actually hurt. */
    public function test_a_panel_screen_renders_without_a_notifications_table(): void
    {
        $user = $this->person('mine@example.test');

        Schema::drop('notifications');

        $this->actingAs($user)->get('/clients')->assertOk();
    }

    /**
     * `countUpTo` STOPS AT THE CAP, which is the whole reason it exists: an
     * exact count of 84,846 rows costs 84,846 steps whatever the index says.
     */
    public function test_a_capped_count_stops_counting(): void
    {
        $this->person('mine@example.test');

        for ($i = 0; $i < 7; $i++) {
            $this->notify(User::query()->first(), "n{$i}");
        }

        $this->assertSame(5, AlertRule::countUpTo(DB::table('notifications'), 5));
        $this->assertSame(7, AlertRule::countUpTo(DB::table('notifications'), 50));
        $this->assertSame('5+', AlertRule::describeCount(5, 5));
        $this->assertSame('3', AlertRule::describeCount(3, 5));
    }
}
