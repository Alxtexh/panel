<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\RouterResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Schema\Step;
use PanelKit\Panel\Schema\Wizard;
use Tests\TestCase;

/**
 * A form in ordered steps, and fields that appear only when they apply.
 *
 * THE INTERESTING PART IS NOT THE LAYOUT. A wizard that merely hides steps is
 * tabs with arrows. What matters is that hiding something never changes what is
 * ENFORCED - because "the field was not on screen" has never been a constraint
 * on what a request may contain, and a client that skips a step must not thereby
 * skip a requirement the resource declared.
 */
final class WizardAndConditionalFieldTest extends TestCase
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

        $this->actingAs($this->user);
    }

    /* -------------------------------------------------------- the structure */

    /**
     * THE CENTRAL GUARANTEE. A field on step 3 is validated whether or not step
     * 3 was ever rendered - otherwise a required field could be skipped by
     * submitting from step 1, which is a correctness hole wearing a layout
     * costume.
     */
    public function test_every_step_is_validated_even_though_only_one_is_visible(): void
    {
        $rules = RouterResource::formDefinition()->rules();

        // Step 1
        $this->assertArrayHasKey('name', $rules);
        $this->assertArrayHasKey('model', $rules);
        // Step 2
        $this->assertArrayHasKey('ip_address', $rules);
    }

    /** The client is told which steps exist, and what each is for. */
    public function test_the_schema_describes_the_steps(): void
    {
        $schema = RouterResource::schema()['form'];
        $wizard = $schema['nodes'][0];

        $this->assertSame('wizard', $wizard['component']);
        $this->assertSame('Identity', $wizard['children'][0]['label']);
        $this->assertSame('What this device is called', $wizard['children'][0]['description']);
    }

    /**
     * Per-step rules are DERIVED from each step's own fields, not declared
     * again. A second list would drift from the first, and the drift shows up
     * as a step that validates nothing while looking like it does.
     */
    public function test_step_rules_are_derived_from_the_steps_own_fields(): void
    {
        $wizard = Wizard::make()->steps([
            Step::make('One')->schema([TextField::make('a')->required()]),
            Step::make('Two')->schema([TextField::make('b')->required()]),
        ]);

        $rules = $wizard->stepRules();

        $this->assertSame(['a'], array_keys($rules[0]));
        $this->assertSame(['b'], array_keys($rules[1]));
    }

    /** A field nested inside a Section inside a Step is still found. */
    public function test_step_rules_reach_nested_fields(): void
    {
        $wizard = Wizard::make()->steps([
            Step::make('One')->schema([
                \PanelKit\Panel\Schema\Section::make('Group')->schema([
                    TextField::make('deep')->required(),
                ]),
            ]),
        ]);

        $this->assertArrayHasKey('deep', $wizard->stepRules()[0]);
    }

    /* --------------------------------------------------- conditional fields */

    /**
     * THE HEADLINE CASE. A conditional required field becomes `required_if`,
     * not `required` and not `nullable`.
     *
     * `required` on a hidden field means the form can never be submitted - the
     * operator is told to fill in something not on screen. Dropping the rule
     * means a client that omits the field skips a declared requirement. Neither
     * is acceptable, and `required_if` is neither.
     */
    public function test_a_conditional_required_field_uses_required_if(): void
    {
        $field = TextField::make('tax_number')->required()->visibleWhen('kind', 'business');

        $this->assertContains('required_if:kind,business', $field->rules());
        $this->assertNotContains('required', $field->rules());
    }

    /**
     * A BOOLEAN CONDITION HAS TO BE WRITTEN THE WAY LARAVEL READS IT. A rule of
     * `required_if:is_business,1` never matches PHP `true` if the value is
     * interpolated raw - the field then silently stops being required, which is
     * the failure direction that matters.
     */
    public function test_a_boolean_condition_is_written_as_laravel_reads_it(): void
    {
        $on = TextField::make('x')->required()->visibleWhen('flag', true);
        $off = TextField::make('y')->required()->visibleWhen('flag', false);

        $this->assertContains('required_if:flag,1', $on->rules());
        $this->assertContains('required_if:flag,0', $off->rules());
    }

    /** An optional conditional field stays nullable - the condition only gates presence. */
    public function test_an_optional_conditional_field_is_still_nullable(): void
    {
        $field = TextField::make('note')->visibleWhen('kind', 'business');

        $this->assertContains('nullable', $field->rules());
    }

    /** The condition travels to the client so the control can be hidden. */
    public function test_the_condition_travels_in_the_schema(): void
    {
        $schema = TextField::make('tax')->visibleWhen('kind', 'business')->toSchema();

        $this->assertSame(['field' => 'kind', 'value' => 'business'], $schema['visibleWhen']);
    }

    /* ------------------------------------------------------------- the write */

    /**
     * THE PATH THAT MATTERS. A request that CLAIMS the condition is met must
     * satisfy the conditional field, whatever the browser displayed.
     */
    public function test_a_request_meeting_the_condition_must_supply_the_conditional_field(): void
    {
        $this->postJson('/routers', [
            'name' => 'Edge',
            'model' => 'other',
            'ip_address' => '10.0.0.9',
            // `status` is the conditional field and is deliberately absent.
        ])
            ->assertStatus(422)
            ->assertJsonValidationErrors('status');

        $this->assertSame(0, Router::query()->count());
    }

    /** And when the condition is NOT met, the same field is not demanded. */
    public function test_a_request_not_meeting_the_condition_may_omit_it(): void
    {
        $this->post('/routers', [
            'name' => 'Edge',
            'model' => 'RB750',
            'ip_address' => '10.0.0.9',
        ])->assertSessionHasNoErrors();

        $this->assertSame(1, Router::query()->count());
    }

    /**
     * A FIELD ON A LATER STEP IS STILL REQUIRED. Submitting from step 1 must not
     * be a way to skip step 2 - the whole reason validation walks the tree
     * rather than the visible step.
     */
    public function test_submitting_without_a_later_steps_field_is_refused(): void
    {
        $this->postJson('/routers', ['name' => 'Edge', 'model' => 'RB750'])
            ->assertStatus(422)
            ->assertJsonValidationErrors('ip_address');
    }

    /* -------------------------------------------------------------- objects */

    public function test_a_wizard_with_no_steps_produces_no_rules(): void
    {
        $this->assertSame([], Wizard::make()->steps([])->stepRules());
    }

    public function test_a_form_can_still_use_plain_fields(): void
    {
        $form = Form::make()->schema([TextField::make('plain')->required()]);

        $this->assertContains('required', $form->rules()['plain']);
    }
}
