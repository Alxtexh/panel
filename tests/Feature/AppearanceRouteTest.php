<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;

final class AppearanceRouteTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
            'appearance' => ['theme' => 'light'],
        ]);
    }

    public function test_packaged_appearance_route_persists_preferences(): void
    {
        $this->assertTrue(Route::has('panel.settings.appearance'));

        $this->actingAs($this->user)
            ->putJson('/settings/appearance', ['theme' => 'dark', 'density' => 'compact'])
            ->assertOk()
            ->assertJsonPath('appearance.theme', 'dark');

        $saved = $this->user->fresh()->appearance;

        $this->assertSame('dark', $saved['theme']);
        $this->assertSame('compact', $saved['density']);
    }

    public function test_appearance_is_shared_on_panel_responses(): void
    {
        $this->user->appearance = ['theme' => 'dark'];
        $this->user->save();

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('appearance.theme', 'dark'));
    }

    public function test_panel_pages_are_shared_when_not_overridden(): void
    {
        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('panelPages'));
    }
}
