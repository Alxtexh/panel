<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use PanelKit\Panel\Actions\ActionGroup;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Actions\ReplicateAction;
use PanelKit\Panel\Tables\Table;
use Tests\TestCase;

/**
 * Allows everything except creating. See the replicate authorization test.
 */
final class UpdateButNotCreatePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Client $client): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Client $client): bool
    {
        return true;
    }

    public function delete(User $user, Client $client): bool
    {
        return true;
    }
}

/**
 * Per-record actions from the row menu.
 *
 * The row menu is where a panel hands out its most casual-looking power: one
 * click, no form, no confirmation screen. So most of what follows is about the
 * boundary rather than the feature -
 *
 *   only DECLARED actions run, so the endpoint cannot be talked into calling
 *   something the resource never offered;
 *
 *   each action's OWN ability is checked against THIS record, because
 *   "duplicate" creates and "suspend" updates and those are different
 *   permissions;
 *
 *   and `visible()` is enforced on execution, not just used to draw the menu.
 */
final class RecordActionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $alice;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->alice = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);
    }

    /* --------------------------------------------------------- it works */

    public function test_a_declared_action_mutates_the_record(): void
    {
        $client = $this->client(['status' => 'active']);

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'suspend'])
            ->assertOk();

        $this->assertSame('suspended', $client->fresh()->status);
    }

    /** The row's available actions travel WITH the row, as keys. */
    public function test_the_row_carries_which_actions_apply_to_it(): void
    {
        $this->client(['status' => 'active', 'name' => 'Active One']);

        $rows = $this->actingAs($this->alice)
            ->get('/clients')
            ->viewData('page')['props']['records'];

        $row = collect($rows)->firstWhere('name', 'Active One');

        $this->assertContains('suspend', $row['_actions']);
        $this->assertNotContains(
            'activate',
            $row['_actions'],
            'An already-active row must not offer Activate.',
        );
    }

    /** And a link action carries where it points, resolved per row. */
    public function test_a_link_action_carries_its_url(): void
    {
        $client = $this->client();

        $rows = $this->actingAs($this->alice)->get('/clients')->viewData('page')['props']['records'];
        $row = collect($rows)->firstWhere('id', $client->id);

        $this->assertSame("/clients/{$client->id}", $row['_actionUrls']['view']);
        $this->assertSame("/clients/{$client->id}/edit", $row['_actionUrls']['edit']);
    }

    /**
     * The schema carries the STRUCTURE once, not per row.
     *
     * Labels and confirmation copy are identical for every row, so repeating
     * them 25 times in a page payload is 25 copies of one menu definition.
     */
    public function test_the_schema_carries_labels_once_and_no_record_data(): void
    {
        $schema = $this->actingAs($this->alice)
            ->get('/clients')
            ->viewData('page')['props']['schema']['table']['recordActions'];

        $encoded = json_encode($schema);

        $this->assertStringContainsString('Duplicate', $encoded);
        $this->assertStringContainsString('Status', $encoded);
        // Structure only: no ids, no urls, nothing tenant-specific.
        $this->assertStringNotContainsString('/clients/', $encoded);
    }

    /* ------------------------------------------------- what must not work */

    /**
     * AN UNDECLARED ACTION IS NOT RUNNABLE.
     *
     * The entire safety of "the client names an action" rests on the name
     * resolving through the resource's own table and nowhere else.
     */
    public function test_an_undeclared_action_is_refused(): void
    {
        $client = $this->client();

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'drop-database'])
            ->assertNotFound();
    }

    /**
     * `visible()` IS A CHECK, NOT JUST A DRAWING RULE.
     *
     * The menu hides Suspend on an already-suspended row. A client that skips
     * the menu and posts the key must hit the same rule - otherwise "hidden"
     * and "forbidden" are different things and only one of them is enforced.
     */
    public function test_an_action_hidden_for_this_record_cannot_be_forced(): void
    {
        $client = $this->client(['status' => 'suspended']);

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'suspend'])
            ->assertStatus(422);
    }

    /** Another tenant's record is not reachable, so neither is acting on it. */
    public function test_another_tenants_record_cannot_be_acted_on(): void
    {
        $client = $this->client(['status' => 'active'], $this->tenantB);

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'suspend'])
            ->assertNotFound();

        $this->assertSame('active', $client->fresh()->status);
    }

    public function test_a_guest_cannot_run_an_action(): void
    {
        $client = $this->client(['status' => 'active']);

        $this->postJson("/clients/{$client->id}/action", ['action' => 'suspend'])
            ->assertUnauthorized();

        $this->assertSame('active', $client->fresh()->status);
    }

    /* ------------------------------------------------------- replication */

    public function test_replicate_creates_a_copy(): void
    {
        $client = $this->client(['name' => 'Original', 'status' => 'active']);

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'replicate'])
            ->assertOk();

        $copy = Client::withoutGlobalScopes()->where('name', 'Copy of Original')->first();

        $this->assertNotNull($copy);
        $this->assertNotSame($client->access_code, $copy->access_code, 'A unique column was copied.');
        $this->assertSame('suspended', $copy->status, 'A copy must not inherit an active subscription.');
        $this->assertNull($copy->expiry_date);
        $this->assertSame($this->tenantA->id, $copy->tenant_id);
    }

    /**
     * THE HEADLINE AUTHORIZATION CASE.
     *
     * Duplicate reads like an operation on the row it hangs off, so the obvious
     * ability to check is `update` - and it is wrong. The act produces a NEW
     * record, so somebody who may edit clients but not add them must not be
     * able to add one through a menu item nobody thought of as creating
     * anything.
     */
    public function test_replicate_requires_create_not_update(): void
    {
        $client = $this->client(['name' => 'Original']);

        /*
         * A policy that allows everything EXCEPT create.
         *
         * Swapped in for the real one so the test isolates the ability, not the
         * app's particular permission model - the question is whether replicate
         * asks for `create`, and any policy that answers differently for the
         * two abilities can answer it.
         */
        Gate::policy(Client::class, UpdateButNotCreatePolicy::class);

        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'replicate'])
            ->assertForbidden();

        $this->assertSame(1, Client::withoutGlobalScopes()->count(), 'A copy was created without create permission.');

        // And the same operator can still suspend, so this is genuinely about
        // the ability rather than the endpoint being closed.
        $this->actingAs($this->alice)
            ->postJson("/clients/{$client->id}/action", ['action' => 'suspend'])
            ->assertOk();
    }

    /* -------------------------------------------------------- the objects */

    public function test_an_invalid_action_key_is_rejected_at_definition_time(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        RecordAction::make('Not A Key!', 'Nope');
    }

    /** A group that filters down to nothing does not render a heading. */
    public function test_an_empty_group_renders_as_nothing(): void
    {
        $group = ActionGroup::make('Danger')->actions([
            RecordAction::make('nuke', 'Nuke')->mutate(['status' => 'gone']),
        ]);

        $this->assertNull($group->toArrayFor(['status' => 'active'], static fn (): bool => false));
        $this->assertNotNull($group->toArrayFor(['status' => 'active'], static fn (): bool => true));
    }

    /** A link cannot be executed: there is nothing to run. */
    public function test_a_link_action_cannot_be_executed(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        RecordAction::make('view', 'View')
            ->link(fn (array $row): string => '/x')
            ->run($this->client());
    }

    /** Neither can one that declares nothing to do. */
    public function test_an_action_with_no_behaviour_is_rejected(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        RecordAction::make('empty', 'Empty')->run($this->client());
    }

    /* ------------------------------------------------- one menu, one entry */

    /**
     * EVERY ACTION APPEARS EXACTLY ONCE.
     *
     * There used to be a second surface: `->inline()` promoted an action to an
     * icon button in the row, and the menu listed it AGAIN so that phones - where
     * the inline buttons were hidden by a breakpoint - lost nothing. On a desktop
     * that put View and Edit on screen twice in the same row.
     *
     * Filament does not do this either: an action inside an `ActionGroup` renders
     * only in the dropdown, never also beside it. The duplication was ours.
     *
     * This asserts the payload rather than the markup, because the payload is
     * what every surface reads - the table, relation panels, workspaces and the
     * right-click menu all render from it, so a duplicate here is a duplicate in
     * four places.
     */
    public function test_no_action_is_offered_twice(): void
    {
        $keys = collect(ClientResource::schema()['table']['recordActions'])
            ->flatMap(fn (array $group): array => array_column($group['actions'], 'key'))
            ->all();

        $duplicated = array_keys(array_filter(array_count_values($keys), fn (int $n): bool => $n > 1));

        $this->assertSame([], $duplicated, 'These actions are offered in more than one place.');
    }

    /**
     * AND THE OLD FLAG IS GONE FROM THE PAYLOAD, not merely ignored.
     *
     * Leaving `inline` in the schema for a client that no longer reads it is the
     * shape of bug this project keeps paying for: a declaration that looks
     * honoured, is silently discarded, and reports nothing. `->inline()` was
     * removed from the API for the same reason, so a resource still calling it
     * fails loudly at declaration instead of rendering something unexpected.
     */
    public function test_the_inline_flag_no_longer_travels_to_the_client(): void
    {
        $actions = collect(ClientResource::schema()['table']['recordActions'])
            ->flatMap(fn (array $group): array => $group['actions']);

        foreach ($actions as $action) {
            $this->assertArrayNotHasKey('inline', $action, "[{$action['key']}] still carries it.");
        }

        $this->assertFalse(
            method_exists(RecordAction::class, 'inline'),
            'The builder method was removed, not left as a no-op.',
        );
    }

    /* ------------------------------------------------------ colour and rows */

    /**
     * COLOUR REPLACED THE GROUP HEADINGS, so an unknown name must fail loudly.
     *
     * A typo'd colour that silently fell back to grey would leave an action the
     * resource marked as dangerous rendering as ordinary - the failure looks
     * like a design choice rather than a mistake.
     */
    public function test_an_unknown_colour_is_refused(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/unknown colour \[chartreuse\]/');

        RecordAction::make('edit', 'Edit')->color('chartreuse');
    }

    public function test_a_declared_colour_reaches_the_client(): void
    {
        $actions = collect(ClientResource::schema()['table']['recordActions'])
            ->flatMap(fn (array $group): array => $group['actions'])
            ->keyBy('key');

        $this->assertSame('warning', $actions['suspend']['color'] ?? null);
        $this->assertSame('success', $actions['activate']['color'] ?? null);
    }

    /** An action that declares none says nothing, rather than guessing one. */
    public function test_an_action_without_a_colour_sends_none(): void
    {
        $this->assertArrayNotHasKey('color', RecordAction::make('plain', 'Plain')->toArray());
    }

    /**
     * ROW CLICK IS OFF UNLESS ASKED FOR. A whole clickable row turns selecting
     * text and mis-aimed clicks into navigations, so a table gets it because
     * somebody decided it suits that list - never by inheriting a default.
     */
    public function test_row_click_is_off_by_default(): void
    {
        $this->assertNull(Table::make()->toSchema()['rowClick']);
    }

    public function test_row_click_can_be_turned_on_and_off(): void
    {
        $this->assertSame('view', Table::make()->rowClick()->toSchema()['rowClick']);
        $this->assertNull(Table::make()->rowClick('none')->toSchema()['rowClick']);
    }

    public function test_an_unknown_row_click_mode_is_refused(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not a row-click mode/');

        Table::make()->rowClick('edit');
    }

    /**
     * THE ROW OPENS WHAT THE `view` ACTION OPENS. The client navigates to that
     * action's per-row url, which is already filtered by the policy - so a
     * resource that turns row-click on without a `view` action would give every
     * row a pointer cursor and no destination.
     */
    public function test_a_row_clickable_resource_declares_a_view_action(): void
    {
        $table = ClientResource::schema()['table'];

        $this->assertSame('view', $table['rowClick']);

        $keys = collect($table['recordActions'])
            ->flatMap(fn (array $group): array => array_column($group['actions'], 'key'));

        $this->assertContains('view', $keys->all(), 'Row click has nothing to open without it.');
    }

    /** The key, timestamps and soft-delete marker never travel to a copy. */
    public function test_replicate_never_copies_the_key_or_timestamps(): void
    {
        // Backdated, because both rows are otherwise created in the same
        // second and the assertion below would pass on a clock rather than on
        // behaviour.
        $original = $this->client(['name' => 'Source', 'created_at' => now()->subYear()]);

        ReplicateAction::make('dup')
            ->then(function ($copy, $source): void {
                $copy->name = 'Dup';
                $copy->access_code = 'AC-DUP';
            })
            ->toAction()
            ->run($original);

        $copy = Client::withoutGlobalScopes()->where('name', 'Dup')->first();

        $this->assertNotSame($original->id, $copy->id);
        $this->assertNotSame(
            $original->created_at->toString(),
            $copy->created_at->toString(),
            'A replica inheriting created_at sorts as though it always existed.',
        );
    }

    /* ---------------------------------------------------------------- setup */

    /** @param array<string, mixed> $attributes */
    private function client(array $attributes = [], ?Tenant $tenant = null): Client
    {
        $client = new Client;

        $client->forceFill([
            'tenant_id' => ($tenant ?? $this->tenantA)->id,
            'name' => 'Subscriber',
            'phone' => '0700000000',
            'access_code' => 'AC-'.uniqid(),
            'status' => 'active',
            'plan_type' => 'pppoe',
            ...$attributes,
        ])->save();

        return $client;
    }
}
