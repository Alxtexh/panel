<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Alerts\Alert;
use Alxtexh\Panel\Alerts\AlertRule;
use Alxtexh\Panel\Notifications\JobFinished;
use RuntimeException;
use Tests\TestCase;

/**
 * The bell: alerts and notifications, which are NOT the same thing.
 *
 * Most of what is asserted here is the boundary between them - an alert that
 * could be marked read, or a notification that recomputed itself, would each be
 * a bug in the model rather than in the code.
 */
final class NotificationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* -------------------------------------------------------------- alerts */

    /**
     * AN ALERT IS DERIVED. It exists while the condition holds and disappears
     * when it clears - no row, no dismissal, no per-user copy.
     */
    public function test_an_alert_appears_and_clears_with_its_condition(): void
    {
        $this->actingAs($this->user);

        $this->assertCount(0, $this->alerts(), 'No offline routers, so no alert.');

        $router = $this->makeRouter('offline');

        $this->assertContains('routers_offline', array_column($this->alerts(), 'key'));

        // Fixing the condition is the only way to clear it.
        $router->update(['status' => 'online']);

        $this->assertNotContains('routers_offline', array_column($this->alerts(), 'key'));
    }

    /** An alert never counts towards the unread badge - only notifications do. */
    public function test_alerts_do_not_affect_the_unread_badge(): void
    {
        $this->makeRouter('offline');

        $body = $this->actingAs($this->user)->getJson('/notifications')->assertOk()->json();

        $this->assertNotEmpty($body['alerts']);
        $this->assertSame(0, $body['unread'], 'A live condition must not light the badge forever.');
    }

    /** Worst first: an operator opening this wants the danger at the top. */
    public function test_alerts_are_ordered_by_severity(): void
    {
        $this->makeRouter('offline');
        $this->makeRouter('degraded');

        $severities = array_column($this->alerts(), 'severity');

        $this->assertSame(Alert::DANGER, $severities[0]);
    }

    /**
     * The alert panel is what you open WHEN something is wrong, so one bad rule
     * must not take the whole panel with it.
     */
    public function test_a_failing_rule_is_skipped_rather_than_fatal(): void
    {
        $resolved = AlertRule::resolveAll([
            AlertRule::make('boom', fn (): ?Alert => throw new RuntimeException('nope')),
            AlertRule::make('fine', fn (): ?Alert => Alert::make('fine', Alert::INFO, 'Still here', '')),
        ]);

        $this->assertCount(1, $resolved);
        $this->assertSame('fine', $resolved[0]['key']);
    }

    /* ------------------------------------------------------- notifications */

    public function test_a_notification_persists_and_carries_read_state(): void
    {
        $this->user->notify(new JobFinished('Your export is ready', '10 rows exported.', '/clients'));

        $body = $this->actingAs($this->user)->getJson('/notifications')->assertOk()->json();

        $this->assertCount(1, $body['notifications']);
        $this->assertSame(1, $body['unread']);
        $this->assertFalse($body['notifications'][0]['read']);
        $this->assertSame('Your export is ready', $body['notifications'][0]['title']);
    }

    public function test_marking_read_clears_the_badge(): void
    {
        $this->user->notify(new JobFinished('Done', 'body'));

        $id = $this->user->notifications()->first()->id;

        $this->actingAs($this->user)->postJson("/notifications/{$id}/read")->assertOk();

        $this->assertSame(0, $this->user->unreadNotifications()->count());
        // Read, not deleted: the record of the event survives.
        $this->assertSame(1, $this->user->notifications()->count());
    }

    public function test_mark_all_read(): void
    {
        $this->user->notify(new JobFinished('One', 'a'));
        $this->user->notify(new JobFinished('Two', 'b'));

        $this->actingAs($this->user)->postJson('/notifications/read-all')->assertOk();

        $this->assertSame(0, $this->user->unreadNotifications()->count());
    }

    public function test_a_notification_can_be_deleted(): void
    {
        $this->user->notify(new JobFinished('Done', 'body'));

        $id = $this->user->notifications()->first()->id;

        $this->actingAs($this->user)->deleteJson("/notifications/{$id}")->assertOk();

        $this->assertSame(0, $this->user->notifications()->count());
    }

    /* ------------------------------------------------------------ the walls */

    /**
     * THE ONE THAT MATTERS. Notifications are addressed to a person, so another
     * user's id must not be readable or writable - the stream is scoped to the
     * actor, not merely filtered in the response.
     */
    public function test_another_users_notification_cannot_be_touched(): void
    {
        $other = User::factory()->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
        $other->notify(new JobFinished('Theirs', 'private'));

        $id = $other->notifications()->first()->id;

        $this->actingAs($this->user)->postJson("/notifications/{$id}/read")->assertNotFound();
        $this->actingAs($this->user)->deleteJson("/notifications/{$id}")->assertNotFound();

        $this->assertSame(1, $other->unreadNotifications()->count());

        // And it never appears in this user's stream.
        $body = $this->actingAs($this->user)->getJson('/notifications')->assertOk()->json();
        $this->assertSame([], $body['notifications']);
    }

    public function test_guests_cannot_read_the_stream(): void
    {
        $this->getJson('/notifications')->assertUnauthorized();
    }

    /* ---------------------------------------------------------------- setup */

    /** @return list<array<string, mixed>> */
    private function alerts(): array
    {
        return $this->actingAs($this->user)->getJson('/notifications')->assertOk()->json('alerts');
    }

    private function makeRouter(string $status): Router
    {
        return Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'RTR-'.uniqid(),
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => $status,
        ]);
    }
}
