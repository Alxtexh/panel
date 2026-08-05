<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\PlanResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\CheckboxField;
use PanelKit\Panel\Forms\Fields\HiddenField;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * The plan form, which is where `CheckboxField` and `HiddenField` finally have
 * a consumer.
 *
 * WHY THIS FILE IS NOT "ANOTHER UNIT TEST FOR TWO FIELDS". Both types already
 * had unit tests asserting the schema array they return, and both were still
 * broken - `HiddenField` overrode `label()` as a getter against a parent that
 * declares it as a setter, which PHP refuses to load. The class would fatal on
 * construction. Its unit test never constructed it in a form that a resource
 * declared, so nothing loaded it in anger.
 *
 * So the assertions here go through the ENDPOINT: build the form the resource
 * really declares, POST it, and read the row back. That is the path an operator
 * takes, and it is the path that fatals if a field type is wrong.
 */
final class PlanFormFieldsTest extends TestCase
{
    use RefreshDatabase;

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Catalogue', 'slug' => 'catalogue']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        return $user;
    }

    /**
     * THE RESOURCE DECLARES BOTH TYPES, and this is the assertion that fails if
     * somebody quietly swaps them for a toggle and a number.
     *
     * Not a style preference. Both choices are reasoned in the resource - a
     * checkbox states a value the form will submit where a switch promises an
     * action already taken, and the order is dragged rather than typed - and a
     * test naming the types is what makes those decisions survive a refactor.
     */
    public function test_the_plan_form_declares_a_checkbox_and_a_hidden_field(): void
    {
        $types = array_map(
            static fn (object $field): string => $field::class,
            PlanResource::formDefinition()->fields(),
        );

        $this->assertContains(CheckboxField::class, $types);
        $this->assertContains(HiddenField::class, $types);
    }

    /**
     * MERELY BUILDING THE FORM WOULD HAVE CAUGHT THE FATAL.
     *
     * `HiddenField`'s incompatible `label()` meant PHP could not load the class
     * at all, so this line - not an assertion about behaviour, just
     * construction - is the cheapest possible guard against that whole class of
     * mistake returning.
     */
    public function test_the_form_can_be_built_at_all(): void
    {
        $this->assertNotEmpty(PlanResource::formDefinition()->toSchema());
    }

    /** A plan is created through the endpoint, with the checkbox ticked. */
    public function test_a_plan_is_created_with_the_checkbox_and_the_carried_position(): void
    {
        $operator = $this->operator();

        $response = $this->actingAs($operator)->post('/plans', [
            'name' => 'Business 100',
            'speed_mbps' => 100,
            'price_cents' => 1_250_000,
            'is_active' => true,
            'position' => 7,
        ]);

        $response->assertSessionHasNoErrors();

        $plan = Plan::withoutGlobalScopes()->where('name', 'Business 100')->firstOrFail();

        $this->assertSame(100, (int) $plan->speed_mbps);
        $this->assertSame(1_250_000, (int) $plan->price_cents);
        $this->assertTrue((bool) $plan->is_active);

        /*
         * THE HIDDEN VALUE ACTUALLY REACHED THE ROW. A hidden field that
         * rendered nothing and submitted nothing would leave this at the
         * column's default and look identical on screen - which is exactly the
         * kind of silent nothing this project keeps finding.
         */
        $this->assertSame(7, (int) $plan->position);
    }

    /**
     * AN UNTICKED CHECKBOX MEANS FALSE, NOT "UNCHANGED".
     *
     * This is the one behaviour a checkbox gets wrong more often than any
     * other. An unticked box submits NOTHING - the browser omits the key
     * entirely - so a form that reads the request naively sees a missing value
     * and leaves the column alone. The operator unticks "Available to sell",
     * saves, gets a success message, and the plan is still on sale.
     */
    public function test_unticking_the_checkbox_turns_the_value_off(): void
    {
        $operator = $this->operator();

        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $operator->tenant_id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            'is_active' => true,
        ]);

        $this->actingAs($operator)->put('/plans/'.$plan->getKey(), [
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            // `is_active` is ABSENT, exactly as a browser sends an unticked box.
        ])->assertSessionHasNoErrors();

        $this->assertFalse(
            (bool) $plan->fresh()->is_active,
            'Unticking the box left the plan on sale - the form treated a missing key as "no change" '
            .'rather than as false, so the operator was told it saved and nothing changed.',
        );
    }

    /**
     * THE ORDER SURVIVES AN EDIT THAT DOES NOT TOUCH IT.
     *
     * The reason the field is on the form at all. `position` is set by dragging
     * a row; if the edit form omitted it, saving any other change would either
     * reset the catalogue's order or fail on the NOT NULL column.
     */
    public function test_editing_a_plan_preserves_the_dragged_order(): void
    {
        $operator = $this->operator();

        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $operator->tenant_id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 4,
            'is_active' => true,
        ]);

        $this->actingAs($operator)->put('/plans/'.$plan->getKey(), [
            'name' => 'Home 20 Plus',
            'speed_mbps' => 25,
            'price_cents' => 300_000,
            'is_active' => true,
            'position' => 4,
        ])->assertSessionHasNoErrors();

        $fresh = $plan->fresh();

        $this->assertSame('Home 20 Plus', $fresh->name);
        $this->assertSame(4, (int) $fresh->position);
    }
}
