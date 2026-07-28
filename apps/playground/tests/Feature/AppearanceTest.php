<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Display preferences stored on the ACCOUNT.
 *
 * The bug this guards: the preference lived only in localStorage, so signing
 * into the same account from a second browser showed a different theme. Nothing
 * was broken - the setting simply had no way to travel with the user.
 */
final class AppearanceTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * Set the preference the way the CONTROLLER does - direct assignment.
     *
     * `appearance` is deliberately absent from the model's Fillable attribute:
     * mass assignment stays closed by construction, and the endpoint assigns
     * the validated value itself. A test using update() would be exercising a
     * path the application does not take.
     *
     * @param  array<string, mixed>  $appearance
     */
    private function storeAppearance(array $appearance): void
    {
        $this->user->appearance = $appearance;
        $this->user->save();
    }

    public function test_a_preference_is_saved_against_the_account(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['theme' => 'dark', 'primary' => 'rose'])
            ->assertOk();

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('dark', $saved['theme']);
        $this->assertSame('rose', $saved['primary']);
    }

    /**
     * THE CROSS-BROWSER CASE. A second browser has an empty localStorage, so
     * the account value is the only thing that can tell it what to render - it
     * has to arrive with the page rather than being asked for afterwards.
     */
    public function test_the_saved_appearance_ships_with_every_page(): void
    {
        $this->storeAppearance(['theme' => 'dark', 'primary' => 'rose']);

        $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->where('appearance.theme', 'dark')
                ->where('appearance.primary', 'rose'));
    }

    /** And it is rendered into the document, for the pre-paint script. */
    public function test_the_saved_appearance_is_available_before_the_bundle_runs(): void
    {
        $this->storeAppearance(['theme' => 'dark']);

        $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->assertSee('window.__panelAppearance', false)
            ->assertSee('"theme":"dark"', false);
    }

    /**
     * The drawer changes one setting at a time, so a replace-everything write
     * would blank the other six on every click.
     */
    public function test_a_partial_update_merges_rather_than_replaces(): void
    {
        $this->storeAppearance(['theme' => 'dark', 'primary' => 'rose', 'fontSize' => 18]);

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['density' => 'compact'])
            ->assertOk();

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('compact', $saved['density']);
        $this->assertSame('dark', $saved['theme'], 'An unrelated setting must survive.');
        $this->assertSame('rose', $saved['primary']);
        $this->assertSame(18, $saved['fontSize']);
    }

    /* ------------------------------------------------------------- the walls */

    /**
     * These become CSS custom properties on <html>, so an unvalidated value is
     * a string the browser accepts straight into a style declaration.
     */
    public function test_a_value_outside_the_allowed_list_is_rejected(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['primary' => 'red; background: url(evil)'])
            ->assertStatus(422)
            ->assertJsonValidationErrors('primary');

        $this->assertNull($this->user->fresh()->appearance);
    }

    public function test_an_unknown_theme_is_rejected(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['theme' => 'neon'])
            ->assertStatus(422);
    }

    /** An integer is still an integer at 4,000, and the panel becomes unusable. */
    public function test_font_size_is_clamped_to_a_usable_range(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['fontSize' => 4000])
            ->assertStatus(422)
            ->assertJsonValidationErrors('fontSize');

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['fontSize' => 18])
            ->assertOk();
    }

    /** Unknown keys are simply not stored - validation returns only what it knows. */
    public function test_an_unknown_key_is_not_stored(): void
    {
        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['theme' => 'dark', 'isAdmin' => true])
            ->assertOk();

        $this->assertArrayNotHasKey('isAdmin', $this->user->fresh()->appearance);
    }

    public function test_guests_cannot_save_a_preference(): void
    {
        $this->putJson('/settings/appearance', ['theme' => 'dark'])->assertUnauthorized();
    }

    /** A guest page still renders, with no account value to apply. */
    public function test_the_login_page_renders_with_a_null_appearance(): void
    {
        $this->get('/login')
            ->assertOk()
            ->assertSee('window.__panelAppearance = null', false);
    }
}
