<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Support\PanelLayoutShell;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * A panel page still carries the shell contract after install.
 *
 * HTTP plus Inertia props, not a Cypress suite: if `panel.account` is missing
 * the account menu vanishes, and if PanelLayout dropped PanelShell the
 * sidebar never mounts, while both still return 200.
 */
final class PanelShellSmokeTest extends TestCase
{
    use RefreshDatabase;

    public function test_panel_layout_still_mounts_panel_shell(): void
    {
        $source = (string) file_get_contents(resource_path('js/layouts/PanelLayout.vue'));

        $this->assertTrue(PanelLayoutShell::usesPanelShell($source));
    }

    public function test_app_ts_keeps_the_layout_callback(): void
    {
        $source = (string) file_get_contents(resource_path('js/app.ts'));

        $this->assertMatchesRegularExpression('/\blayout\s*:\s*(?:\(|function\b)/', $source);
        $this->assertTrue(
            str_contains($source, 'PanelLayout') || str_contains($source, 'AppLayout'),
            'app.ts must return PanelLayout (fresh install) or AppLayout (this demo).',
        );
        $this->assertStringNotContainsString('page.default.layout ??=', $source);
    }

    public function test_a_signed_in_panel_page_shares_shell_props(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme-shell-smoke']);
        $user = User::factory()->withAbilities(['view_any_clients'])->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $props = $this->actingAs($user)
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertNotEmpty(
            $props['panel']['account'] ?? null,
            'Dashboard did not share panel.account, so the account menu would vanish.',
        );
        $this->assertNotEmpty($props['panel']['logout'] ?? null);
        $this->assertArrayHasKey('panelNav', $props);
    }
}
