<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\SavedView;
use App\Models\Tenant;
use App\Models\User;
use App\Demo\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Tables\ViewState;
use Tests\TestCase;

/**
 * Named table settings, saved by one person for one resource.
 *
 * A SAVED VIEW IS A STORED QUERY STRING, and almost every test here follows from
 * that. Everything a URL can carry, a view can carry - a sort column that was
 * never sortable, a filter that no longer exists, a page size chosen to pull an
 * entire tenant table. The difference is that a URL arrives with the request and
 * is obviously untrusted, while a view is read back from the database and feels
 * like something already checked.
 *
 * It is not. It was written months ago against a table definition that has since
 * changed, and the row outlives the column it names.
 */
final class SavedViewTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $me;

    private User $colleague;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->me = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->colleague = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->me);
    }

    /* ------------------------------------------------------------ the state */

    /**
     * THE HEADLINE CASE. `sort` is interpolated into an ORDER BY, where no
     * binding can protect it - so a stored view naming an unsortable column must
     * not survive being saved.
     */
    public function test_an_unsortable_column_never_survives_into_a_saved_view(): void
    {
        $state = ViewState::sanitize(
            ['sort' => 'password', 'direction' => 'asc'],
            ClientResource::definition(),
        );

        $this->assertArrayNotHasKey('sort', $state);
    }

    /** A declared sortable column is kept, so the feature still works. */
    public function test_a_declared_sortable_column_is_kept(): void
    {
        $state = ViewState::sanitize(
            ['sort' => 'name', 'direction' => 'asc'],
            ClientResource::definition(),
        );

        $this->assertSame('name', $state['sort']);
        $this->assertSame('asc', $state['direction']);
    }

    /** A direction outside the two legal values is dropped. */
    public function test_an_invalid_direction_is_dropped(): void
    {
        $state = ViewState::sanitize(['direction' => 'sideways'], ClientResource::definition());

        $this->assertArrayNotHasKey('direction', $state);
    }

    /**
     * A DURABLE `perPage=100000` would be worse than a one-off: it pulls the
     * tenant's whole table on every visit, forever, without anybody choosing it
     * again. The allowlist is the same one a URL goes through.
     */
    public function test_a_page_size_outside_the_allowlist_is_refused(): void
    {
        $state = ViewState::sanitize(['perPage' => 100000], ClientResource::definition());

        $this->assertArrayNotHasKey('perPage', $state);

        $ok = ViewState::sanitize(['perPage' => 25], ClientResource::definition());

        $this->assertSame(25, $ok['perPage']);
    }

    /** An undeclared filter key does not reach storage. */
    public function test_an_undeclared_filter_is_dropped(): void
    {
        $state = ViewState::sanitize(
            ['filters' => ['status' => 'active', 'tenant_id' => 99]],
            ClientResource::definition(),
        );

        $this->assertSame(['status' => 'active'], $state['filters']);
    }

    /**
     * A filter value is a scalar or a flat list of them. A nested structure is
     * not something a filter can express, and storing one means a shape that
     * throws somewhere downstream rather than being refused here.
     */
    public function test_a_nested_filter_value_is_dropped(): void
    {
        $state = ViewState::sanitize(
            ['filters' => ['status' => ['nested' => ['deep' => 1]]]],
            ClientResource::definition(),
        );

        $this->assertArrayNotHasKey('filters', $state);
    }

    /** But a flat list survives, because a multiselect is exactly that. */
    public function test_a_flat_list_filter_value_survives(): void
    {
        $state = ViewState::sanitize(
            ['filters' => ['planType' => ['pppoe', 'hotspot']]],
            ClientResource::definition(),
        );

        $this->assertSame(['pppoe', 'hotspot'], $state['filters']['planType']);
    }

    /** Anything that is not table state is not table state. */
    public function test_unknown_keys_are_discarded(): void
    {
        $state = ViewState::sanitize(
            ['sort' => 'name', 'is_admin' => true, 'sql' => 'DROP TABLE clients'],
            ClientResource::definition(),
        );

        $this->assertSame(['sort'], array_keys($state));
    }

    /**
     * A VIEW SAVED BEFORE A COLUMN EXISTED IS NOT AN ATTACK. It should still
     * open, minus the part that no longer means anything - refusing it outright
     * would turn every table change into a support ticket about vanished views.
     */
    public function test_a_stale_hidden_column_is_dropped_rather_than_refusing_the_view(): void
    {
        $state = ViewState::sanitize(
            ['hidden' => ['phone', 'a_column_that_was_removed'], 'sort' => 'name'],
            ClientResource::definition(),
        );

        $this->assertSame(['phone'], $state['hidden']);
        $this->assertSame('name', $state['sort'], 'The rest of the view still applies.');
    }

    public function test_a_non_array_state_yields_nothing(): void
    {
        $this->assertSame([], ViewState::sanitize('not a state', ClientResource::definition()));
        $this->assertSame([], ViewState::sanitize(null, ClientResource::definition()));
    }

    /* --------------------------------------------------------- the endpoint */

    public function test_a_view_can_be_saved_and_comes_back_with_the_page(): void
    {
        $this->post('/clients/views', [
            'name' => 'Expiring soon',
            'state' => ['sort' => 'expiry_date', 'direction' => 'asc'],
        ])->assertRedirect();

        $views = $this->get('/clients')->viewData('page')['props']['savedViews'];

        $this->assertCount(1, $views);
        $this->assertSame('Expiring soon', $views[0]['name']);
        $this->assertSame('expiry_date', $views[0]['state']['sort']);
    }

    /**
     * THE SANITISER RUNS ON THE WAY IN, through the real endpoint rather than
     * the unit - this is the path somebody would actually use.
     */
    public function test_a_hostile_state_is_sanitised_before_storage(): void
    {
        $this->post('/clients/views', [
            'name' => 'Nasty',
            'state' => ['sort' => 'password', 'perPage' => 999999, 'filters' => ['tenant_id' => 99]],
        ])->assertRedirect();

        $stored = SavedView::query()->where('name', 'Nasty')->firstOrFail();

        $this->assertSame([], $stored->state, 'Nothing in that state was declared.');
    }

    /** Saving the same name again updates rather than failing on the constraint. */
    public function test_saving_the_same_name_twice_updates_it(): void
    {
        $this->post('/clients/views', ['name' => 'Mine', 'state' => ['sort' => 'name']]);
        $this->post('/clients/views', ['name' => 'Mine', 'state' => ['sort' => 'expiry_date']]);

        $this->assertSame(1, SavedView::query()->where('name', 'Mine')->count());
        $this->assertSame(
            'expiry_date',
            SavedView::query()->where('name', 'Mine')->firstOrFail()->state['sort'],
        );
    }

    /** At most one default, or "the default" means whichever row comes back first. */
    public function test_setting_a_default_clears_the_previous_one(): void
    {
        $this->post('/clients/views', ['name' => 'First', 'state' => ['sort' => 'name'], 'is_default' => true]);
        $this->post('/clients/views', ['name' => 'Second', 'state' => ['sort' => 'name'], 'is_default' => true]);

        $this->assertSame(1, SavedView::query()->where('is_default', true)->count());
        $this->assertSame(
            'Second',
            SavedView::query()->where('is_default', true)->firstOrFail()->name,
        );
    }

    public function test_a_view_can_be_deleted(): void
    {
        $this->post('/clients/views', ['name' => 'Temp', 'state' => ['sort' => 'name']]);

        $view = SavedView::query()->firstOrFail();

        $this->delete("/clients/views/{$view->id}")->assertRedirect();

        $this->assertNull(SavedView::query()->find($view->id));
    }

    /* ------------------------------------------------------------ ownership */

    /**
     * A COLLEAGUE'S VIEW IS NOT FOUND, not forbidden - the lookup is constrained
     * by user, so it never resolves. Views are per person on purpose: a shared
     * one sounds better until two people disagree about what "Overdue" means.
     */
    public function test_another_users_view_cannot_be_deleted(): void
    {
        $theirs = SavedView::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'user_id' => $this->colleague->id,
            'resource' => 'clients',
            'name' => 'Theirs',
            'state' => ['sort' => 'name'],
        ]);

        $this->delete("/clients/views/{$theirs->id}")->assertNotFound();

        $this->assertNotNull(SavedView::query()->find($theirs->id));
    }

    public function test_another_users_view_cannot_be_made_default(): void
    {
        $theirs = SavedView::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'user_id' => $this->colleague->id,
            'resource' => 'clients',
            'name' => 'Theirs',
            'state' => [],
        ]);

        $this->post("/clients/views/{$theirs->id}/default")->assertNotFound();

        $this->assertFalse((bool) $theirs->fresh()->is_default);
    }

    /** A colleague's views never appear in this person's picker. */
    public function test_the_page_only_lists_my_own_views(): void
    {
        SavedView::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'user_id' => $this->colleague->id,
            'resource' => 'clients',
            'name' => 'Theirs',
            'state' => [],
        ]);

        $this->post('/clients/views', ['name' => 'Mine', 'state' => ['sort' => 'name']]);

        $views = $this->get('/clients')->viewData('page')['props']['savedViews'];

        $this->assertCount(1, $views);
        $this->assertSame('Mine', $views[0]['name']);
    }

    /**
     * A view belongs to a resource. Naming another resource's view on this
     * resource's route must not resolve, or the delete route becomes a way to
     * remove any of your own views from anywhere.
     */
    public function test_a_view_from_another_resource_is_not_reachable(): void
    {
        $this->post('/routers/views', ['name' => 'Routers view', 'state' => []]);

        $view = SavedView::query()->where('resource', 'routers')->firstOrFail();

        $this->delete("/clients/views/{$view->id}")->assertNotFound();

        $this->assertNotNull(SavedView::query()->find($view->id));
    }

    /* -------------------------------------------------------------- tenancy */

    /** Another organisation's view is invisible, whoever asks. */
    public function test_another_tenants_view_is_not_visible(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $stranger = User::factory()->create(['tenant_id' => $other->id]);

        $foreign = SavedView::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $other->id,
            'user_id' => $stranger->id,
            'resource' => 'clients',
            'name' => 'Foreign',
            'state' => [],
        ]);

        $this->delete("/clients/views/{$foreign->id}")->assertNotFound();

        $this->assertNotNull(SavedView::withoutGlobalScopes()->find($foreign->id));
    }

    public function test_a_guest_cannot_save_a_view(): void
    {
        auth()->logout();

        $this->post('/clients/views', ['name' => 'x', 'state' => []])->assertRedirect('/login');
    }
}
