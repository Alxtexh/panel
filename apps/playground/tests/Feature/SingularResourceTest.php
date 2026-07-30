<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Roadmap 4.3: a one-record, settings-shaped screen declared like a
 * resource - a form and two functions - rather than hand-writing a
 * controller, a page and a route for every screen of this shape.
 *
 * The demonstration is billing preferences: currency, VAT, due window,
 * stored as JSON on the organisation's own tenant row.
 */
final class SingularResourceTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->admin = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    public function test_the_screen_renders_with_the_defaults_before_anything_is_saved(): void
    {
        $props = $this->actingAs($this->admin)->get('/billing-settings')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('singular', $props['schema']['kind']);
        $this->assertSame('KES', $props['values']['currency']);
        $this->assertSame(16, $props['values']['vat_rate']);
    }

    public function test_saving_persists_to_the_organisations_own_row(): void
    {
        $this->actingAs($this->admin)
            ->put('/billing-settings/current', [
                'currency' => 'USD',
                'vat_rate' => 8,
                'due_days' => 30,
                'remind' => false,
            ])
            ->assertSessionHasNoErrors()
            ->assertRedirect();

        $this->assertSame('USD', $this->tenant->fresh()->billing['currency']);

        // And the screen reads back what was written.
        $values = $this->actingAs($this->admin)->get('/billing-settings')->assertOk()
            ->viewData('page')['props']['values'];

        $this->assertSame('USD', $values['currency']);
        $this->assertSame(30, $values['due_days']);
    }

    /** The form's rules gate the save - same validation path as any record. */
    public function test_the_declared_rules_are_enforced(): void
    {
        $this->actingAs($this->admin)
            ->put('/billing-settings/current', [
                'currency' => 'USD',
                'vat_rate' => 250,
                'due_days' => 30,
                'remind' => false,
            ])
            ->assertSessionHasErrors('vat_rate');

        $this->assertNull($this->tenant->fresh()->billing);
    }

    /** Gated on its declared panel ability, omitted-not-disabled style: 403. */
    public function test_the_screen_answers_to_its_ability(): void
    {
        $narrow = User::factory()
            ->withAbilities(['view_any_clients'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($narrow)->get('/billing-settings')->assertForbidden();

        $this->actingAs($narrow)
            ->put('/billing-settings/current', ['currency' => 'USD', 'vat_rate' => 8, 'due_days' => 30, 'remind' => false])
            ->assertForbidden();
    }

    /** One record means no create screen and no list - the URLs do not exist. */
    public function test_a_singular_has_no_create_screen(): void
    {
        $this->actingAs($this->admin)->get('/billing-settings/create')->assertNotFound();
    }
}
