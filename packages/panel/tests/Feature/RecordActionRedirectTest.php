<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Actions\ReplicateAction;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * `RecordAction::redirect()` - navigating somewhere other than "reload the
 * list" after a successful run.
 */
final class RecordActionRedirectTest extends TestCase
{
    use RefreshDatabase;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $this->article = Article::create([
            'tenant_id' => $tenant->id,
            'title' => 'Draft one',
            'status' => 'draft',
        ]);
    }

    public function test_a_plain_string_redirect_resolves_as_is(): void
    {
        $action = RecordAction::make('archive', 'Archive')->redirect('/articles');

        $this->assertSame('/articles', $action->resolveRedirect($this->article));
    }

    public function test_no_redirect_declared_resolves_to_null(): void
    {
        $action = RecordAction::make('archive', 'Archive');

        $this->assertNull($action->resolveRedirect($this->article));
    }

    public function test_a_closure_redirect_reads_what_handle_returned_not_the_original_record(): void
    {
        /*
         * `run()` never rebinds the CALLER's `$record` variable, even when
         * `handle()` builds an entirely different row - so this proves the
         * redirect closure reads `$result` (what `handle()` returned), not
         * some mutated `$record`.
         */
        $action = RecordAction::make('convert', 'Convert')
            ->handle(fn (): array => ['id' => 999])
            ->redirect(fn (Article $record, array $result): string => "/articles/{$result['id']}/edit");

        $result = $action->run($this->article);

        $this->assertSame('/articles/999/edit', $action->resolveRedirect($this->article, $result ?? []));
    }

    public function test_replicate_action_returns_the_copys_id_for_a_chained_redirect(): void
    {
        $action = ReplicateAction::make()->toAction()
            ->redirect(fn (Article $record, array $result): string => "/articles/{$result['id']}/edit");

        $result = $action->run($this->article);

        $this->assertArrayHasKey('id', $result ?? []);
        $this->assertNotSame($this->article->id, $result['id']);
        $this->assertSame(
            "/articles/{$result['id']}/edit",
            $action->resolveRedirect($this->article, $result),
        );
    }
}
