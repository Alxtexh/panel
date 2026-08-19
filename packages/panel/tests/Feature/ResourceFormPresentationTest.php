<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\StatWidget;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class ResourceFormPresentationTest extends TestCase
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
        ]);

        $this->actingAs($this->user);
    }

    public function test_resources_default_to_page_presentation(): void
    {
        $forms = ArticleResource::schema()['forms'] ?? [];

        $this->assertSame(
            [
                'create' => 'page',
                'edit' => 'page',
                'view' => 'page',
            ],
            $forms,
        );
    }

    public function test_configure_can_opt_into_modal_create(): void
    {
        ArticleResource::configure()->createUsing('modal');

        $this->assertSame('modal', ArticleResource::formPresentation()['create']);
        $this->assertSame('page', ArticleResource::formPresentation()['edit']);
    }

    public function test_modal_create_endpoint_returns_form_payload(): void
    {
        ArticleResource::configure()->createUsing('modal');

        $payload = $this->getJson('/articles/forms/create')
            ->assertOk()
            ->json();

        $this->assertSame('create', $payload['mode'] ?? null);
        $this->assertArrayHasKey('values', $payload);
        $this->assertArrayHasKey('formOptions', $payload);
    }

    public function test_index_metrics_falls_back_to_header_widgets(): void
    {
        $keys = array_map(
            static fn (StatWidget $widget): string => $widget->key,
            ArticleResource::resolvedIndexWidgets(),
        );

        $this->assertContains('total', $keys);
    }
}
