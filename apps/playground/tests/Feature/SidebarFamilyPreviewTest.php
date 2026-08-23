<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Panel\Pages;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Sidebar layout gallery: sidebar entries and live shell preview routes.
 */
final class SidebarFamilyPreviewTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    /** @var list<string> */
    private const LAYOUTS = [
        'inset',
        'sidebar',
        'floating',
        'icon',
        'header',
        'accordion',
        'file-tree',
        'calendar',
        'dialog',
    ];

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->admin = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    public function test_each_layout_preview_renders_for_signed_in_users(): void
    {
        foreach (self::LAYOUTS as $layout) {
            $this->actingAs($this->admin)
                ->get("/screens/sidebar/{$layout}")
                ->assertOk()
                ->assertInertia(fn ($page) => $page
                    ->component('errors/SidebarFamilyPreview')
                    ->where('forceSidebarLayout', $layout)
                    ->where('sidebarOpen', ! in_array($layout, ['icon', 'dialog'], true))
                    ->has('panel.help')
                    ->has('panel.faq')
                    ->has('panel.about'));
        }
    }

    public function test_unknown_layout_is_not_found(): void
    {
        $this->actingAs($this->admin)
            ->get('/screens/sidebar/not-a-layout')
            ->assertNotFound();
    }

    public function test_guests_are_sent_to_login(): void
    {
        $this->get('/screens/sidebar/inset')->assertRedirect();
    }

    public function test_sidebar_samples_appear_in_the_nav(): void
    {
        $pages = $this->actingAs($this->admin)->get('/dashboard')->assertOk()
            ->viewData('page')['props']['panelPages'];

        $byHref = collect($pages)->keyBy('href');

        $this->assertSame('Sidebar samples', $byHref['/screens/sidebar/inset']['group'] ?? null);
        $this->assertSame('Inset', $byHref['/screens/sidebar/inset']['title'] ?? null);
        $this->assertSame('Icon rail', $byHref['/screens/sidebar/icon']['title'] ?? null);
        $this->assertSame('Site header', $byHref['/screens/sidebar/header']['title'] ?? null);
        $this->assertSame('Accordion', $byHref['/screens/sidebar/accordion']['title'] ?? null);
        $this->assertSame('File tree', $byHref['/screens/sidebar/file-tree']['title'] ?? null);
        $this->assertSame('Calendar', $byHref['/screens/sidebar/calendar']['title'] ?? null);
        $this->assertSame('Dialog', $byHref['/screens/sidebar/dialog']['title'] ?? null);
    }

    public function test_pages_registry_lists_every_layout(): void
    {
        $hrefs = collect(Pages::all())->pluck('href')->all();

        foreach (self::LAYOUTS as $layout) {
            $this->assertContains(
                "/screens/sidebar/{$layout}",
                $hrefs,
                "Missing Sidebar samples entry for {$layout}.",
            );
        }
    }
}
