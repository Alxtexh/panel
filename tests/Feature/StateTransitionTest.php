<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

final class StateTransitionTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    private Article $article;

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

        $this->article = Article::create([
            'tenant_id' => $tenant->id,
            'title' => 'Draft one',
            'status' => 'draft',
        ]);
    }

    public function test_an_allowed_transition_succeeds_and_is_audited(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertSuccessful();

        $this->assertSame('published', $this->article->fresh()->status);

        $entry = DB::table('audit_entries')
            ->where('auditable_type', Article::class)
            ->where('auditable_id', (string) $this->article->getKey())
            ->where('event', 'state_transition')
            ->first();

        $this->assertNotNull($entry);
    }

    public function test_a_disallowed_transition_is_refused(): void
    {
        $this->article->update(['status' => 'archived']);

        $this->postJson("/articles/{$this->article->getKey()}/action", ['action' => 'publish'])
            ->assertUnprocessable();

        $this->assertSame('archived', $this->article->fresh()->status);
    }
}
