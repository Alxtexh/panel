<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\TableWidget;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;

final class TableWidgetTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        foreach (['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'] as $title) {
            Post::query()->create(['title' => $title, 'status' => 'draft']);
        }
    }

    public function test_it_caps_the_resource_list_query(): void
    {
        $widget = TableWidget::make('recent')->resource(PostResource::class)->limit(5);

        $resolved = $widget->resolve();

        $this->assertFalse($resolved['error']);
        $this->assertCount(5, $resolved['records']);
        $this->assertSame(['title', 'status', 'created_at'], array_column($resolved['columns'], 'key'));
    }

    public function test_the_declaration_does_not_run_a_query(): void
    {
        $widget = TableWidget::make('recent')->resource(PostResource::class)->limit(5);

        $this->assertSame('recent', $widget->toArray()['key']);
        $this->assertSame(5, $widget->toArray()['limit']);
        $this->assertNotEmpty($widget->toArray()['href']);
        $this->assertNull($widget->toArray()['poll']);
    }

    public function test_poll_serialises_milliseconds(): void
    {
        $widget = TableWidget::make('recent')->resource(PostResource::class)->poll('10s');

        $this->assertSame(10_000, $widget->toArray()['poll']);
    }

    public function test_it_is_hidden_when_the_resource_cannot_be_listed(): void
    {
        Gate::before(static fn (): bool => false);

        $widget = TableWidget::make('recent')->resource(PostResource::class)->limit(5);

        $this->assertFalse($widget->visibleTo($this->user));
    }

    public function test_panel_widgets_include_a_registered_table(): void
    {
        $panel = app(PanelManager::class)->panel('admin');
        $panel->widgets([
            TableWidget::make('recent')->resource(PostResource::class)->limit(2),
        ]);

        $keys = array_map(
            static fn ($w): string => $w->key,
            array_filter(
                $panel->getWidgets(),
                static fn ($w): bool => $w instanceof TableWidget,
            ),
        );

        $this->assertContains('recent', $keys);
    }
}
