<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Carbon;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * The bin: where a deleted record goes, and how long it stays.
 *
 * WHAT THIS REPLACES. Soft deletes, restore and force-delete were all built and
 * all reachable only through a `Deleted` option on one table's filter panel - so
 * a removed subscriber sat inside the live list under a control nobody opens,
 * and the endpoint that could bring it back had no button anywhere in the panel.
 * Every one of those pieces had tests. None of them added up to a feature
 * somebody could use.
 *
 * THE THREE THINGS THAT HAVE TO BE TRUE, and each is a test below:
 *
 *   IT IS FINDABLE WITHOUT KNOWING WHERE IT WAS. "I deleted something yesterday"
 *   is the actual question, and it does not come with a resource name attached.
 *
 *   IT IS SCOPED LIKE EVERYTHING ELSE. A bin is where somebody looks for a
 *   record they cannot otherwise see, which makes it the worst possible place
 *   for a missing tenant predicate or a skipped policy check.
 *
 *   IT EMPTIES ON A PUBLISHED SCHEDULE. A bin with no deadline is a table that
 *   grows forever; one whose deadline is a sentence in a heading rather than the
 *   number the pruner uses is a promise nobody can rely on.
 */
final class TrashTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $owner;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->owner = $this->userFor($this->acme, [
            Abilities::name('viewAny', 'clients'),
            Abilities::name('restore', 'clients'),
            Abilities::name('forceDelete', 'clients'),
        ]);
    }

    /** @param list<string> $abilities */
    private function userFor(Tenant $tenant, array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    private function client(Tenant $tenant, string $name): Client
    {
        $plan = Plan::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $tenant->id, 'name' => 'Plan '.$tenant->id],
            ['speed_mbps' => 10, 'price_cents' => 1000],
        );

        $router = Router::withoutGlobalScopes()->firstOrCreate(
            ['tenant_id' => $tenant->id, 'name' => 'Router '.$tenant->id],
            ['ip_address' => '10.0.0.1', 'model' => 'RB750', 'status' => 'online'],
        );

        $client = new Client([
            'name' => $name,
            'phone' => '+2547'.random_int(10_000_000, 99_999_999),
            'access_code' => strtoupper(bin2hex(random_bytes(4))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
        ])->save();

        return $client;
    }

    /** @return array<int, array<string, mixed>> */
    private function binFor(User $user): array
    {
        return $this->actingAs($user)->get('/trash')->assertOk()
            ->viewData('page')['props']['groups'];
    }

    /* ------------------------------------------------------------ the screen */

    public function test_a_deleted_record_appears_in_the_trash(): void
    {
        $client = $this->client($this->acme, 'Amina Otieno');
        $client->delete();

        $groups = $this->binFor($this->owner);

        $this->assertCount(1, $groups);
        $this->assertSame('clients', $groups[0]['key']);
        $this->assertSame('Amina Otieno', $groups[0]['records'][0]['title']);
    }

    /** A live record is not in the bin, which is the other half of the claim. */
    public function test_a_live_record_is_not_in_the_trash(): void
    {
        $this->client($this->acme, 'Still Here');

        $this->assertSame([], $this->binFor($this->owner));
    }

    /**
     * THE DEADLINE IS ON THE RECORD, computed from the retention the pruner
     * uses. A screen that promised seven days while the sweep ran at three would
     * be worse than one that promised nothing.
     */
    public function test_each_record_says_when_it_will_be_purged(): void
    {
        config(['panel.trash.retention_days' => 5]);

        Carbon::setTestNow('2026-08-01 10:00:00');

        $client = $this->client($this->acme, 'Doomed');
        $client->delete();

        $record = $this->binFor($this->owner)[0]['records'][0];

        $this->assertSame(
            '2026-08-06',
            Carbon::parse($record['purgesAt'])->toDateString(),
        );

        Carbon::setTestNow();
    }

    public function test_the_screen_reports_the_retention_window(): void
    {
        config(['panel.trash.retention_days' => 9]);

        $props = $this->actingAs($this->owner)->get('/trash')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(9, $props['retentionDays']);
    }

    /* --------------------------------------------------------------- scoping */

    /**
     * ANOTHER ORGANISATION'S DELETED RECORDS ARE NOT IN MY BIN.
     *
     * The worst place in the panel for a missing tenant predicate: this screen
     * exists to show records that are hidden everywhere else, so a leak here
     * would look like the feature working.
     */
    public function test_another_organisations_deleted_records_are_not_listed(): void
    {
        $theirs = $this->client($this->rival, 'Rival Customer');
        $theirs->delete();

        $mine = $this->client($this->acme, 'My Customer');
        $mine->delete();

        $groups = $this->binFor($this->owner);

        $titles = array_column($groups[0]['records'], 'title');

        $this->assertContains('My Customer', $titles);
        $this->assertNotContains('Rival Customer', $titles);
        $this->assertSame(1, $groups[0]['total']);
    }

    /**
     * A RESOURCE SOMEBODY CANNOT LIST IS NOT IN THEIR BIN EITHER.
     *
     * Names, ids and deletion times are still data. A maintenance screen that
     * showed them for a resource the person is not permitted to open would be a
     * read through the back door.
     */
    public function test_a_resource_the_user_cannot_view_is_not_listed(): void
    {
        $client = $this->client($this->acme, 'Hidden');
        $client->delete();

        // Signed in, in the right organisation, with no ability for clients.
        $stranger = $this->userFor($this->acme, []);

        $this->assertSame([], $this->binFor($stranger));
    }

    /**
     * THE BUTTONS FOLLOW THE POLICY, per record.
     *
     * A restore button that is rendered and then refused teaches somebody the
     * panel is broken; one that is absent teaches them they lack the permission.
     */
    public function test_a_user_without_restore_is_not_offered_it(): void
    {
        $client = $this->client($this->acme, 'Look But Do Not Touch');
        $client->delete();

        $reader = $this->userFor($this->acme, [Abilities::name('viewAny', 'clients')]);

        $record = $this->binFor($reader)[0]['records'][0];

        $this->assertFalse($record['canRestore']);
        $this->assertFalse($record['canForceDelete']);
    }

    public function test_the_owner_is_offered_both(): void
    {
        $client = $this->client($this->acme, 'Recoverable');
        $client->delete();

        $record = $this->binFor($this->owner)[0]['records'][0];

        $this->assertTrue($record['canRestore']);
        $this->assertTrue($record['canForceDelete']);
    }

    /* ------------------------------------------------------------ restoring */

    /** The whole point: it comes back, and it comes back into the list. */
    public function test_a_record_can_be_restored_from_the_trash(): void
    {
        $client = $this->client($this->acme, 'Back Again');
        $client->delete();

        $this->actingAs($this->owner)
            ->post("/clients/{$client->id}/restore")
            ->assertRedirect();

        $this->assertNotSoftDeleted('clients', ['id' => $client->id]);

        $ids = array_column(
            $this->actingAs($this->owner)->get('/clients')->assertOk()
                ->viewData('page')['props']['records'],
            'id',
        );

        $this->assertContains($client->id, $ids);
        $this->assertSame([], $this->binFor($this->owner), 'It should have left the bin.');
    }

    /* -------------------------------------------------------------- pruning */

    /**
     * PAST ITS WINDOW IT IS GONE, for good.
     *
     * Without this a soft delete is not a delete: the row stays in the table, in
     * the backups and in every export written afterwards, and "deleted" quietly
     * means "hidden" - a data-retention position no installation chose.
     */
    public function test_pruning_permanently_removes_records_past_the_window(): void
    {
        config(['panel.trash.retention_days' => 7]);

        $old = $this->client($this->acme, 'Long Gone');
        $recent = $this->client($this->acme, 'Just Deleted');

        $old->delete();
        $recent->delete();

        Client::withoutGlobalScopes()->where('id', $old->id)
            ->update(['deleted_at' => now()->subDays(8)]);

        $this->artisan('panel:prune-trash')->assertSuccessful();

        $this->assertDatabaseMissing('clients', ['id' => $old->id]);
        $this->assertSoftDeleted('clients', ['id' => $recent->id]);
    }

    /** `--pretend` counts and deletes nothing, because the first run is scary. */
    public function test_pretend_removes_nothing(): void
    {
        $old = $this->client($this->acme, 'Still Here Afterwards');
        $old->delete();

        Client::withoutGlobalScopes()->where('id', $old->id)
            ->update(['deleted_at' => now()->subDays(30)]);

        $this->artisan('panel:prune-trash', ['--pretend' => true])->assertSuccessful();

        $this->assertSoftDeleted('clients', ['id' => $old->id]);
    }

    /**
     * A RETENTION OF ZERO IS NOT HONOURED.
     *
     * It would purge records in the same sweep that put them there, which is not
     * a bin - it is a hard delete with a screen in front of it. The floor is one
     * day, in the one place both the screen and the pruner read.
     */
    public function test_a_zero_retention_still_keeps_records_for_a_day(): void
    {
        config(['panel.trash.retention_days' => 0]);

        $client = $this->client($this->acme, 'Deleted Just Now');
        $client->delete();

        $this->artisan('panel:prune-trash')->assertSuccessful();

        $this->assertSoftDeleted('clients', ['id' => $client->id]);
    }

    /** Another organisation's expired records go too - the sweep is global. */
    public function test_pruning_is_not_limited_to_one_organisation(): void
    {
        $theirs = $this->client($this->rival, 'Their Old Record');
        $theirs->delete();

        Client::withoutGlobalScopes()->where('id', $theirs->id)
            ->update(['deleted_at' => now()->subDays(30)]);

        $this->artisan('panel:prune-trash')->assertSuccessful();

        $this->assertDatabaseMissing('clients', ['id' => $theirs->id]);
    }

    /* ----------------------------------------------------------- navigation */

    /**
     * THE BIN IS IN THE MENU, and the entry comes from the package.
     *
     * A generated portal routes `/trash` the moment it exists, so the link has
     * to arrive with the panel rather than with an application's page list -
     * otherwise every new portal ships a working screen nothing points at, which
     * is exactly how backups and the assistant ended up unreachable.
     */
    public function test_the_trash_is_linked_from_the_navigation(): void
    {
        $pages = $this->actingAs($this->owner)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelPages'];

        $this->assertContains('/trash', array_column($pages, 'href'));
    }
}
