<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * A widget nobody may see is neither sent nor RESOLVED.
 *
 * TWO PROPERTIES, AND THE SECOND IS THE ONE THAT GETS MISSED. Filtering the
 * payload keeps the number off the screen; not RESOLVING it keeps the query
 * from running at all. A dashboard that resolves everything and then hides
 * some of it has already asked the database for figures this person is
 * forbidden to know - and on a slow aggregate, has spent their page load
 * doing it.
 *
 * THE HIDDEN WIDGET THROWS IF RESOLVED, which is how the second property is
 * asserted at all. A widget that merely returned a number would leave "was it
 * computed" invisible; one that raises makes the failure loud and specific.
 *
 * NO ABILITY MEANS VISIBLE, and that default is deliberate rather than lax:
 * widgets defaulting to hidden would make a dashboard silently empty itself as
 * widgets are added, and a blank screen with no error reads as a broken page
 * rather than a permissions decision.
 */
final class WidgetVisibilityTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'One',
            'status' => 'draft',
        ]);

        $this->actingAs($this->user);
    }

    private function props(): array
    {
        return $this->get('/articles')->assertOk()->viewData('page')['props'];
    }

    public function test_an_open_widget_is_declared_to_the_client(): void
    {
        $keys = array_column($this->props()['headerWidgets'] ?? [], 'key');

        $this->assertContains('total', $keys);
    }

    /**
     * THE HIDDEN ONE IS ABSENT, not disabled.
     *
     * Sending it with a flag would tell anybody reading the payload that a
     * figure called "Secret" exists and that they are not allowed it, which is
     * more than they had before.
     */
    public function test_a_widget_the_viewer_may_not_see_is_not_declared(): void
    {
        $keys = array_column($this->props()['headerWidgets'] ?? [], 'key');

        $this->assertNotContains('secret', $keys);
    }

    /**
     * AND ITS QUERY NEVER RUNS. The fixture's hidden widget throws when
     * resolved, so reaching this line at all is the assertion: had the row
     * been resolved before filtering, the request would have 500'd.
     */
    public function test_a_hidden_widget_is_never_resolved(): void
    {
        $props = $this->props();

        $this->assertArrayNotHasKey('header_stat_secret', $props);
    }

    public function test_the_widget_appears_once_the_ability_is_held(): void
    {
        $role = Role::findOrCreate('seer', 'web');
        $role->givePermissionTo(Permission::findOrCreate('see_secret_stat', 'web'));

        $this->user->assignRole($role);

        $keys = array_column($this->actingAs($this->user->fresh())->props()['headerWidgets'] ?? [], 'key');

        $this->assertContains(
            'secret',
            $keys,
            'An ability-gated widget stayed hidden from somebody who holds the ability.',
        );
    }

    /**
     * THE LABEL SHIPS IMMEDIATELY, THE NUMBER DOES NOT.
     *
     * `header_stat_total` is ABSENT from the first response, and that absence
     * IS the feature: `WidgetSet` wraps every value in `Inertia::defer`, so the
     * row draws its labels at once and fills in on a follow-up request. A
     * counter over a large table would otherwise sit in front of the list -
     * the screen people actually came for.
     *
     * Asserted as absence rather than presence because that is the direction
     * that breaks: a value resolved inline still renders correctly and simply
     * costs the page load, which no screenshot ever reveals.
     */
    public function test_a_widgets_value_is_deferred_rather_than_sent_inline(): void
    {
        $props = $this->props();

        $this->assertContains('total', array_column($props['headerWidgets'], 'key'));

        $this->assertArrayNotHasKey(
            'header_stat_total',
            $props,
            'A widget value was resolved inline, putting its query in front of the list.',
        );
    }
}
