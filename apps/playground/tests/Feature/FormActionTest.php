<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use Tests\TestCase;

/**
 * A row action that collects input before it runs - roadmap D.
 *
 * THE LARGEST FUNCTIONAL GAP THIS PACKAGE HAD, by a port's own count: 67 of 229
 * tenant-admin actions needed to ask for something first - a reason for a
 * suspension, an amount to credit, a department to route to - and `RecordAction`
 * offered mutate, handle, link and confirm. Every one of those 67 became a
 * dedicated screen.
 *
 * WHAT THESE TESTS ARE REALLY ABOUT IS THE ALLOW-LIST. Adding "the client may
 * now send values" to an endpoint whose entire design was "the client sends a
 * key and never an attribute set" is the moment that rule could quietly stop
 * holding. It does not: the FIELDS are declared server-side, the rules are the
 * declaration's, and `sanitize()` drops everything else. The first two tests
 * below are the ones that would catch a regression into mass assignment.
 */
final class FormActionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()
            ->withAbilities(['view_any_clients', 'view_clients', 'update_clients'])
            ->create(['tenant_id' => $this->tenant->getKey(), 'email_verified_at' => now()]);

        config(['panel.tenancy.resolver' => fn () => $this->tenant->getKey()]);

        $this->actingAs($this->operator);
    }

    /** Unique per call: `access_code` is unique per tenant, so two collide. */
    private int $made = 0;

    private function client(): Client
    {
        $n = ++$this->made;

        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->getKey(),
            'name' => 'Basic',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->getKey(),
            'plan_id' => $plan->getKey(),
            'name' => 'Subscriber',
            'phone' => '+25470000000'.$n,
            'access_code' => 'FORMACTION'.$n,
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }

    /* ------------------------------------------------------- the allow-list */

    /**
     * A KEY THE FORM NEVER DECLARED IS DROPPED BEFORE `handle()` SEES IT.
     *
     * THIS TEST WAS WRITTEN THE OBVIOUS WAY FIRST AND PROVED NOTHING. It posted
     * `status` alongside `plan_id` to the real `change-plan` action and asserted
     * the record's status was unchanged - which passed with the allow-list
     * deliberately removed, because that action's handler only ever reads
     * `plan_id`. It was testing the handler's good manners, not the guard.
     *
     * So it exercises the PIPELINE the endpoint runs - the declared form's own
     * rules, then `sanitize()` - which is where the guarantee actually lives.
     * A handler that did `forceFill($data)` would be protected by this and by
     * nothing else.
     */
    public function test_the_pipeline_drops_a_key_the_form_never_declared(): void
    {
        $form = Form::make()->schema([
            TextField::make('reason')->required(),
        ]);

        $submitted = ['reason' => 'because', 'status' => 'suspended'];

        $validated = validator($submitted, $form->rules())->validate();

        $this->assertSame(
            ['reason' => 'because'],
            $form->sanitize($validated),
            'An undeclared key survived, so a form action is a mass-assignment endpoint.',
        );
    }

    /** And the real action still does what it says. */
    public function test_a_form_action_applies_what_it_collected(): void
    {
        $client = $this->client();

        $other = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->getKey(),
            'name' => 'Faster',
            'speed_mbps' => 100,
            'price_cents' => 5000,
        ]);

        $this->postJson("/clients/{$client->getKey()}/action", [
            'action' => 'change-plan',
            'data' => ['plan_id' => $other->getKey(), 'note' => 'upgrade'],
        ])->assertOk();

        $this->assertSame($other->getKey(), $client->refresh()->plan_id);
    }

    /**
     * AND THE DECLARATION'S OWN RULES ARE ENFORCED. `plan_id` is required and
     * must exist WITHIN THIS ORGANISATION - `ExistsInScope`, not
     * `exists:plans,id`, which would confirm another tenant's row.
     */
    public function test_the_declared_rules_are_enforced(): void
    {
        $client = $this->client();

        $this->postJson("/clients/{$client->getKey()}/action", [
            'action' => 'change-plan',
            'data' => ['note' => 'no plan given'],
        ])->assertStatus(422)->assertJsonValidationErrors('plan_id');
    }

    public function test_a_foreign_plan_is_refused(): void
    {
        $client = $this->client();

        $rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $foreign = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $rival->getKey(),
            'name' => 'Theirs',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $this->postJson("/clients/{$client->getKey()}/action", [
            'action' => 'change-plan',
            'data' => ['plan_id' => $foreign->getKey()],
        ])->assertStatus(422);

        $this->assertNotSame($foreign->getKey(), $client->refresh()->plan_id);
    }

    /**
     * A SEARCHABLE SELECT INSIDE AN ACTION FORM CAN BE SEARCHED.
     *
     * `field-options` walked the RECORD FORM's fields only, and the first form
     * action shipped working anyway - because its select happened to share a
     * key with a field on the record form. An action asking for something the
     * form does not have would have rendered a searchable select that finds
     * nothing, with no error anywhere: the exact shape of failure this codebase
     * keeps naming.
     */
    public function test_an_action_forms_select_can_be_searched(): void
    {
        $this->client();

        $this->getJson('/clients/field-options?field=plan_id&q=Bas')
            ->assertOk()
            ->assertJsonPath('options.0.label', 'Basic');
    }

    /* ------------------------------------------------------------ in bulk */

    /**
     * ONE DECISION, APPLIED TO THE SELECTION.
     *
     * `BulkRunner` walks the selection in keyset chunks and calls the handler
     * once per chunk, so the collected values are reused rather than re-asked -
     * which is the whole reason "move these forty to a plan" is a bulk action
     * rather than forty clicks.
     */
    public function test_a_bulk_form_action_applies_to_every_selected_row(): void
    {
        $first = $this->client();
        $second = $this->client();

        $target = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->getKey(),
            'name' => 'Bulk target',
            'speed_mbps' => 50,
            'price_cents' => 2500,
        ]);

        $this->postJson('/clients/bulk', [
            'action' => 'move-plan',
            'ids' => [$first->getKey(), $second->getKey()],
            'data' => ['plan_id' => $target->getKey()],
        ])->assertOk()->assertJsonPath('affected', 2);

        $this->assertSame($target->getKey(), $first->refresh()->plan_id);
        $this->assertSame($target->getKey(), $second->refresh()->plan_id);
    }

    /** And the declaration's rules are enforced before anything is touched. */
    public function test_a_bulk_form_action_validates_before_running(): void
    {
        $client = $this->client();
        $before = $client->plan_id;

        $this->postJson('/clients/bulk', [
            'action' => 'move-plan',
            'ids' => [$client->getKey()],
            'data' => [],
        ])->assertStatus(422)->assertJsonValidationErrors('plan_id');

        $this->assertSame($before, $client->refresh()->plan_id);
    }

    /* ------------------------------------------------------- the definition */

    /**
     * THE SCHEMA TRAVELS WITH THE ACTION, which is what lets the modal open
     * with no network request - the same promise the record form makes.
     */
    public function test_the_fields_are_sent_with_the_action(): void
    {
        $action = RecordAction::make('probe', 'Probe')
            ->form(fn (Form $form): Form => $form->schema([TextField::make('reason')]))
            ->handle(fn () => null);

        $schema = $action->toArray();

        $this->assertArrayHasKey('form', $schema);
        $this->assertSame('reason', $schema['form']['nodes'][0]['key'] ?? null);
    }

    /** An action that asks nothing carries nothing. */
    public function test_an_action_without_a_form_sends_no_schema(): void
    {
        $this->assertArrayNotHasKey(
            'form',
            RecordAction::make('plain', 'Plain')->mutate(['status' => 'x'])->toArray(),
        );
    }

    /**
     * A FORM WITH NOWHERE TO SEND WHAT IT COLLECTED IS REFUSED.
     *
     * `mutate()` is fixed at definition time, so an action that collected a
     * reason and then wrote a hardcoded status would be a dialog that lies
     * about what it does. It fails for whoever wrote it, at the first run,
     * rather than for whoever used it.
     */
    public function test_a_form_without_a_handler_is_refused(): void
    {
        $action = RecordAction::make('broken', 'Broken')
            ->form(fn (Form $form): Form => $form->schema([TextField::make('reason')]))
            ->mutate(['status' => 'suspended']);

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('go nowhere');

        $action->run($this->client(), ['reason' => 'x']);
    }

    /**
     * AND AN ACTION WITH NO FORM IGNORES SUBMITTED VALUES ENTIRELY. Reading
     * them would let a caller send input to an action that declared none, and
     * what came of it would depend on what its handler did with an argument it
     * never expected.
     */
    public function test_values_sent_to_a_formless_action_are_ignored(): void
    {
        $client = $this->client();

        $this->postJson("/clients/{$client->getKey()}/action", [
            'action' => 'suspend',
            'data' => ['status' => 'cancelled', 'name' => 'Renamed'],
        ])->assertOk();

        $client->refresh();

        $this->assertSame('suspended', $client->status);
        $this->assertSame('Subscriber', $client->name);
    }
}
