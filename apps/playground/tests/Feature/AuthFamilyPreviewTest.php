<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Panel\Pages;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Auth family gallery: sidebar entries and guest-safe preview routes.
 */
final class AuthFamilyPreviewTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->admin = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    public function test_each_family_preview_renders_for_guests(): void
    {
        foreach (['centered', 'muted', 'showcase', 'split', 'card'] as $family) {
            foreach (['login', 'register', 'otp'] as $screen) {
                $this->get("/screens/auth/{$family}/{$screen}")
                    ->assertOk()
                    ->assertInertia(fn ($page) => $page
                        ->component('errors/AuthFamilyPreview')
                        ->where('forceAuthLayout', $family)
                        ->where('screen', $screen));
            }
        }
    }

    public function test_unknown_family_or_screen_is_not_found(): void
    {
        $this->get('/screens/auth/not-a-family/login')->assertNotFound();
        $this->get('/screens/auth/card/password')->assertNotFound();
    }

    public function test_auth_samples_appear_in_the_sidebar(): void
    {
        $pages = $this->actingAs($this->admin)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelPages'];

        $byHref = collect($pages)->keyBy('href');

        $this->assertSame('Auth samples/Card', $byHref['/screens/auth/card/login']['group'] ?? null);
        $this->assertSame('Login', $byHref['/screens/auth/card/login']['title'] ?? null);
        $this->assertSame('Auth samples/Showcase', $byHref['/screens/auth/showcase/register']['group'] ?? null);
        $this->assertSame('OTP', $byHref['/screens/auth/centered/otp']['title'] ?? null);
    }

    public function test_pages_registry_lists_every_family_screen(): void
    {
        $hrefs = collect(Pages::all())->pluck('href')->all();

        foreach (['centered', 'muted', 'showcase', 'split', 'card'] as $family) {
            foreach (['login', 'register', 'otp'] as $screen) {
                $this->assertContains(
                    "/screens/auth/{$family}/{$screen}",
                    $hrefs,
                    "Missing Auth samples entry for {$family}/{$screen}.",
                );
            }
        }
    }
}
