<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Per-record actions from the row menu.
 *
 * THE ROW MENU IS WHERE A PANEL HANDS OUT ITS MOST CASUAL-LOOKING POWER: one
 * click, no form, no confirmation screen. So most of what follows is about the
 * boundary rather than the feature -
 *
 *   only DECLARED actions run, so the endpoint cannot be talked into calling
 *   something the resource never offered;
 *
 *   the request cannot supply its own mutation, which is the difference
 *   between "run the action named publish" and "set any column to anything";
 *
 *   and `visible()` is enforced on EXECUTION, not merely used to draw the
 *   menu - a hidden action forced by key must still refuse.
 */
final class RecordActionTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        /*
         * `tenant_id` SET EXPLICITLY. The scope filters READS; it does not fill
         * writes - the panel's own write path sets the column from request
         * context, and a fixture creating rows outside that path has to say
         * which organisation they belong to.
         */
        $this->article = Article::create([
            'tenant_id' => $tenant->id,
            'title' => 'Draft one',
            'status' => 'draft',
        ]);
    }

    public function test_a_declared_action_mutates_the_record(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertSuccessful();

        $this->assertSame('published', $this->article->fresh()->status);
    }

    /**
     * ONLY WHAT THE RESOURCE DECLARED.
     *
     * The key arrives in the request body, so an endpoint that looked up
     * anything else would be a way to invoke behaviour the resource never
     * offered - including behaviour from a different resource.
     */
    public function test_an_undeclared_action_is_refused(): void
    {
        // 404, not 422: an action the resource never declared is not a
        // malformed request, it is a route that resolves to nothing.
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'delete-everything'])
            ->assertNotFound();

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    /**
     * THE REQUEST CANNOT SUPPLY ITS OWN MUTATION.
     *
     * `mutate()` is declared on the action, server-side. If the payload could
     * carry columns, the row menu would stop being a set of offered actions
     * and become an arbitrary write endpoint wearing an action's name.
     */
    public function test_the_request_cannot_supply_its_own_mutation(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", [
            'action' => 'publish',
            'attributes' => ['title' => 'Overwritten'],
            'title' => 'Overwritten',
        ])->assertSuccessful();

        $fresh = $this->article->fresh();

        $this->assertSame('Draft one', $fresh->title);
        $this->assertSame('published', $fresh->status);
    }

    /**
     * `visible()` IS A GATE, NOT A DRAWING HINT.
     *
     * The menu is rendered from the same declaration, so an action hidden for
     * this row is absent from the UI - and somebody posting its key directly
     * must meet the same answer. A `visible()` enforced only in the client is
     * not enforced.
     */
    public function test_an_action_hidden_for_this_record_cannot_be_forced(): void
    {
        $this->article->update(['status' => 'archived']);

        /*
         * 422 HERE, 404 FOR AN UNDECLARED ONE, and the two answers are worth
         * keeping apart. An action the resource never offered does not exist -
         * 404. `archive` DOES exist and is simply not applicable to a row
         * already archived - 422. Collapsing them would lose the distinction
         * between "no such action" and "not on this record", which is the one
         * a caller needs to tell a typo from a stale menu.
         */
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'archive'])
            ->assertStatus(422);
    }

    public function test_a_guest_cannot_run_an_action(): void
    {
        auth()->logout();

        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertUnauthorized();

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    /**
     * THE ROW CARRIES WHICH ACTIONS APPLY TO IT, resolved server-side.
     *
     * Sending every action with the row and letting the client decide would
     * mean the payload lists what this person cannot do, which is a map of the
     * screen's capabilities handed to anybody reading the network tab.
     */
    public function test_the_row_carries_only_the_actions_that_apply(): void
    {
        $this->article->update(['status' => 'archived']);

        $response = $this->get('/articles')->assertOk();

        $row = $response->viewData('page')['props']['records'][0];

        /*
         * `_actions` IS A FLAT LIST OF KEYS, not the action definitions. The
         * labels, icons and colours travel ONCE in the schema; the row carries
         * only which of them apply to it, so a thousand-row page does not
         * repeat every label a thousand times.
         */
        $this->assertContains('publish', $row['_actions']);
        $this->assertNotContains('archive', $row['_actions'], 'A hidden action reached the client.');
    }

    public function test_a_step_wizard_action_collects_inputs_and_runs_after_confirmation(): void
    {
        $table = ArticleResource::definition();
        $keys = array_map(static fn ($a): string => $a->key, $table->recordActionList());
        $this->assertContains('publish-wizard', $keys, 'Available record action keys: '.implode(',', $keys));

        $this->postJson("/articles/{$this->article->getKey()}/action", [
            'action' => 'publish-wizard',
            'data' => [
                'reason' => '  Hello  ',
                'confirm' => true,
            ],
        ])->assertSuccessful()
            ->assertJsonPath('values.reason', 'Hello')
            ->assertJsonPath('values.confirmed', true);

        $fresh = $this->article->fresh();

        $this->assertSame('published', $fresh->status);

        $this->assertIsArray($fresh->custom ?? []);
        $this->assertSame('Hello', $fresh->custom['reason'] ?? null);
        $this->assertSame(true, $fresh->custom['confirmed'] ?? null);
    }

    public function test_a_step_wizard_action_refuses_when_confirmation_is_missing(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", [
            'action' => 'publish-wizard',
            'data' => [
                'reason' => 'Hello',
                'confirm' => false,
            ],
        ])->assertStatus(422)->assertJsonValidationErrors('confirm');

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_a_step_wizard_action_emits_wizard_schema_for_the_modal(): void
    {
        $response = $this->get('/articles')->assertOk();

        $schema = $response->viewData('page')['props']['schema'];

        $entries = $schema['table']['recordActions'] ?? [];

        $actions = collect($entries)->flatMap(static function (mixed $entry): array {
            return is_array($entry) && array_key_exists('actions', $entry) ? $entry['actions'] ?? [] : [$entry];
        })->values()->all();

        $wizardAction = collect($actions)->first(static fn (array $a): bool => ($a['key'] ?? null) === 'publish-wizard');

        $this->assertNotNull($wizardAction);
        $this->assertSame('wizard', $wizardAction['form']['nodes'][0]['component'] ?? null);
        $this->assertSame('Details', $wizardAction['form']['nodes'][0]['children'][0]['label'] ?? null);
        $this->assertSame('Confirm', $wizardAction['form']['nodes'][0]['children'][1]['label'] ?? null);
    }
}
