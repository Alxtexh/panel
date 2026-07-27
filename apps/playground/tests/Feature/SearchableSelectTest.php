<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Rules\ExistsInScope;
use RuntimeException;
use Tests\TestCase;

/**
 * A select that renders every option inline is a correctness problem, not a
 * performance one: pointed at a 100k-row relation it emits 100,000 option
 * elements into the browser.
 */
final class SearchableSelectTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $userA;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $this->userA = User::factory()->create(['tenant_id' => $this->tenantA->id, 'email_verified_at' => now()]);

        foreach ([[$this->tenantA, 'Alpha'], [$this->tenantB, 'Bravo']] as [$tenant, $prefix]) {
            Plan::withoutGlobalScopes()->create([
                'tenant_id' => $tenant->id,
                'name' => "{$prefix} Plan",
                'speed_mbps' => 10,
                'price_cents' => 1000,
            ]);
        }
    }

    /**
     * The guard that makes the failure loud instead of slow. Without it the
     * field renders and the page simply becomes unusable at scale, which nobody
     * traces back to a select.
     */
    public function test_an_oversized_inline_option_list_throws(): void
    {
        $field = SelectField::make('huge')->options(
            fn (): array => array_combine(range(1, 500), array_map(static fn (int $i): string => "Option {$i}", range(1, 500)))
        );

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Call ->searchable()');

        $field->resolveOptions();
    }

    public function test_a_searchable_field_ships_no_options(): void
    {
        $field = SelectField::make('plan_id')->searchable(fn (string $t): array => ['1' => 'One']);

        // Nothing inline: the client fetches on demand.
        $this->assertSame([], $field->resolveOptions());
        $this->assertTrue($field->isSearchable());
        $this->assertTrue($field->toSchema()['searchable']);
    }

    public function test_the_options_endpoint_returns_matches(): void
    {
        $options = $this->actingAs($this->userA)
            ->getJson('/clients/field-options?field=plan_id&q=Alpha')
            ->assertOk()
            ->json('options');

        $this->assertNotEmpty($options);
        $this->assertSame('Alpha Plan', $options[0]['label']);
    }

    /** The search query runs through the model, so the tenant scope applies. */
    public function test_the_options_endpoint_never_returns_another_tenants_rows(): void
    {
        $options = $this->actingAs($this->userA)
            ->getJson('/clients/field-options?field=plan_id&q=Bravo')
            ->assertOk()
            ->json('options');

        $this->assertSame([], $options);
    }

    /**
     * Only a field that opted in may be queried this way, or the endpoint
     * becomes a way to enumerate any option list on demand.
     */
    public function test_a_non_searchable_field_cannot_be_enumerated(): void
    {
        $options = $this->actingAs($this->userA)
            ->getJson('/clients/field-options?field=status&q=')
            ->assertOk()
            ->json('options');

        $this->assertSame([], $options);
    }

    public function test_guests_cannot_enumerate_options(): void
    {
        $this->getJson('/clients/field-options?field=plan_id&q=')->assertUnauthorized();
    }

    /* ------------------------------------------------------------- the rule */

    /**
     * REGRESSION GUARD. Introducing the searchable select with a plain
     * `exists:plans,id` immediately reopened a cross-tenant write, because
     * Laravel's exists rule queries the raw table and knows nothing about global
     * scopes. The suite caught it on the first run.
     */
    public function test_exists_in_scope_rejects_another_tenants_record(): void
    {
        $this->actingAs($this->userA);

        $foreign = Plan::withoutGlobalScopes()->where('tenant_id', $this->tenantB->id)->firstOrFail();
        $own = Plan::withoutGlobalScopes()->where('tenant_id', $this->tenantA->id)->firstOrFail();

        $rule = ExistsInScope::of(Plan::class);

        $failed = null;
        $rule->validate('plan_id', $foreign->id, function (string $message) use (&$failed): void {
            $failed = $message;
        });
        $this->assertNotNull($failed, "Another tenant's record must be rejected.");

        $passed = null;
        $rule->validate('plan_id', $own->id, function (string $message) use (&$passed): void {
            $passed = $message;
        });
        $this->assertNull($passed, "The tenant's own record must be accepted.");
    }

    /** `nullable`/`required` decides emptiness, not this rule. */
    public function test_exists_in_scope_ignores_empty_values(): void
    {
        $called = false;

        ExistsInScope::of(Plan::class)->validate('plan_id', null, function () use (&$called): void {
            $called = true;
        });

        $this->assertFalse($called);
    }
}
