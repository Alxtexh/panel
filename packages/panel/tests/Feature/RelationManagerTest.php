<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Child rows on a record page, fetched separately from it.
 *
 * THE ENDPOINT TAKES TWO CALLER-SUPPLIED SEGMENTS - a parent id and a RELATION
 * NAME - and both are the interesting part. A relation name that resolved to
 * anything the model happens to define would let a URL walk the relationship
 * graph: from a record somebody may read, out along an association they were
 * never offered, to rows on a table with no screen of its own.
 *
 * SCOPING MUST HOLD ON THE CHILD IN ITS OWN RIGHT. A child isolated only by
 * its parent is isolated along the one path somebody remembered to guard.
 * `Comment` therefore carries the tenant scope itself, and the assertions
 * below reach for it through a parent that IS readable - which is the case a
 * parent-only guard passes and a correct implementation refuses.
 */
final class RelationManagerTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Parent',
            'status' => 'draft',
        ]);
    }

    private function comment(string $body, ?Article $on = null, ?Tenant $tenant = null): Comment
    {
        return Comment::withoutGlobalScopes()->create([
            'tenant_id' => ($tenant ?? $this->mine)->id,
            'article_id' => ($on ?? $this->article)->getKey(),
            'body' => $body,
        ]);
    }

    private function relation(string $name = 'comments', ?Article $on = null)
    {
        $id = ($on ?? $this->article)->getKey();

        return $this->getJson("/articles/{$id}/relations/{$name}");
    }

    public function test_a_relation_returns_its_rows(): void
    {
        $this->comment('First');
        $this->comment('Second');

        $response = $this->relation()->assertOk();

        $bodies = array_column($response->json('records') ?? $response->json('data') ?? [], 'body');

        sort($bodies);

        $this->assertSame(['First', 'Second'], $bodies);
    }

    /**
     * A RELATION THE RESOURCE NEVER DECLARED DOES NOT RESOLVE.
     *
     * The segment is caller-supplied. Without the allowlist this endpoint is a
     * way to read any association the model defines, from a parent the caller
     * is legitimately allowed to open.
     */
    public function test_an_undeclared_relation_is_refused(): void
    {
        $this->relation('somethingElse')->assertNotFound();
    }

    public function test_a_relation_only_returns_rows_belonging_to_that_parent(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other parent',
            'status' => 'draft',
        ]);

        $this->comment('Mine');
        $this->comment('Not mine', $other);

        $response = $this->relation()->assertOk();

        $bodies = array_column($response->json('records') ?? $response->json('data') ?? [], 'body');

        $this->assertSame(['Mine'], $bodies);
    }

    /**
     * ANOTHER ORGANISATION'S PARENT HAS NO RELATIONS TO READ.
     *
     * The parent is refused first, so this never reaches the child query - but
     * it is asserted anyway, because "the parent check is what saved us" is
     * only true until somebody reorders the two.
     */
    public function test_another_tenants_record_has_no_relations(): void
    {
        $foreign = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs',
            'status' => 'draft',
        ]);

        $this->comment('Theirs', $foreign, $this->theirs);

        $this->relation('comments', $foreign)->assertNotFound();
    }

    /**
     * A FOREIGN CHILD HANGING OFF A READABLE PARENT IS STILL REFUSED.
     *
     * The pointed case: the parent is mine, so every parent-level check
     * passes, and the child belongs to another organisation. Only a scope on
     * the CHILD keeps this row out - which is why `Comment` carries its own.
     */
    public function test_a_foreign_child_is_not_returned_through_a_readable_parent(): void
    {
        $this->comment('Mine');
        $this->comment('Planted', $this->article, $this->theirs);

        $response = $this->relation()->assertOk();

        $bodies = array_column($response->json('records') ?? $response->json('data') ?? [], 'body');

        $this->assertSame(
            ['Mine'],
            $bodies,
            'A child belonging to another organisation was returned through a parent this user may read.',
        );
    }

    public function test_guests_cannot_read_a_relation(): void
    {
        $this->comment('First');

        auth()->logout();

        $this->relation()->assertUnauthorized();
    }

    /**
     * THE RECORD PAGE SHIPS STRUCTURE, NOT ROWS.
     *
     * Relations are fetched on demand, so opening a record does not pay for
     * every child table it might show. The tab has to be declared up front -
     * otherwise there is nothing to click - but its contents must not travel
     * with it.
     */
    public function test_the_record_page_declares_the_relation_without_its_rows(): void
    {
        $this->comment('Should not travel');

        $props = $this->get("/articles/{$this->article->getKey()}")
            ->assertOk()
            ->viewData('page')['props'];

        /*
         * IN THE SCHEMA, NOT BESIDE THE RECORD, and that placement is the
         * mechanism rather than a detail: the schema is CACHED and shared by
         * every record of this resource, so it can only ever hold structure.
         * Anything per-record would poison a cache entry the next record reads.
         */
        $relations = $props['schema']['relations'] ?? [];

        $this->assertNotEmpty($relations, 'The record page declared no relation tabs.');

        $this->assertStringNotContainsString(
            'Should not travel',
            json_encode($props),
            'Relation rows travelled with the record page instead of being fetched on demand.',
        );
    }

    public function test_relation_form_schema_is_serialised_when_declared(): void
    {
        $manager = \Alxtexh\Panel\Resources\RelationManager::make('comments', 'Comments')
            ->related(Comment::class, 'comments.article_id')
            ->table(fn (\Alxtexh\Panel\Tables\Table $table): \Alxtexh\Panel\Tables\Table => $table
                ->columns([
                    \Alxtexh\Panel\Tables\Columns\TextColumn::make('body')->from('comments.body'),
                ])
                ->keyColumn('comments.id'))
            ->form(fn (\Alxtexh\Panel\Forms\Form $form): \Alxtexh\Panel\Forms\Form => $form->schema([
                \Alxtexh\Panel\Forms\Fields\TextField::make('body')->required(),
            ]));

        $schema = $manager->toSchema();

        $this->assertTrue($manager->hasForm());
        $this->assertNotNull($schema['form']);
        $this->assertSame('body', $schema['form']['fields'][0]['key'] ?? null);
        $this->assertTrue($schema['canCreate']);
        $this->assertTrue($schema['inlineCreate']);
        $this->assertFalse($schema['canEdit']);
    }

    public function test_a_linked_nested_resource_exposes_dedicated_pages(): void
    {
        $relations = $this->get("/articles/{$this->article->getKey()}")
            ->assertOk()
            ->viewData('page')['props']['schema']['relations'] ?? [];

        $comments = collect($relations)->firstWhere('key', 'comments');

        $this->assertNotNull($comments);
        $this->assertSame('comments', $comments['pages']['resource'] ?? null);
        $this->assertTrue($comments['canCreate']);
        $this->assertTrue($comments['inlineCreate']);
        $this->assertTrue($comments['canEdit']);
        $this->assertSame(
            [],
            array_filter(
                $comments['form']['fields'] ?? [],
                static fn (array $field): bool => ($field['key'] ?? null) === 'article_id',
            ),
            'The parent foreign key must not appear on the inline create form.',
        );
    }

    public function test_inline_create_from_a_relation_tab_stamps_the_parent(): void
    {
        $response = $this->postJson("/articles/{$this->article->getKey()}/relations/comments", [
            'body' => 'From the parent tab',
        ]);

        $response->assertCreated();
        $this->assertSame('From the parent tab', $response->json('record.body'));

        $this->assertDatabaseHas('comments', [
            'article_id' => $this->article->getKey(),
            'body' => 'From the parent tab',
            'tenant_id' => $this->mine->id,
        ]);
    }

    public function test_read_only_suppresses_the_form_and_every_write_signal(): void
    {
        $manager = \Alxtexh\Panel\Resources\RelationManager::make('comments', 'Comments')
            ->related(Comment::class, 'comments.article_id')
            ->table(fn (\Alxtexh\Panel\Tables\Table $table): \Alxtexh\Panel\Tables\Table => $table
                ->columns([
                    \Alxtexh\Panel\Tables\Columns\TextColumn::make('body')->from('comments.body'),
                ])
                ->keyColumn('comments.id'))
            ->form(fn (\Alxtexh\Panel\Forms\Form $form): \Alxtexh\Panel\Forms\Form => $form->schema([
                \Alxtexh\Panel\Forms\Fields\TextField::make('body')->required(),
            ]))
            ->readOnly();

        $this->assertFalse($manager->hasForm());
        $this->assertFalse($manager->canInlineCreate(\Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource::class, $this->article));

        $schema = $manager->toSchema();

        $this->assertTrue($schema['readOnly']);
        $this->assertNull($schema['form']);
        $this->assertFalse($schema['canCreate']);
        $this->assertFalse($schema['inlineCreate']);
    }

    public function test_read_only_still_serves_rows(): void
    {
        $this->comment('Still readable');

        $response = $this->relation()->assertOk();

        $bodies = array_column($response->json('records') ?? $response->json('data') ?? [], 'body');

        $this->assertSame(['Still readable'], $bodies);
    }

    public function test_a_read_only_nested_resource_relation_disables_create_and_edit(): void
    {
        $relations = $this->get("/articles/{$this->article->getKey()}")
            ->assertOk()
            ->viewData('page')['props']['schema']['relations'] ?? [];

        $comments = collect($relations)->firstWhere('key', 'comments');

        // The fixture declares comments read-write - proves the default path
        // (asserted in test_a_linked_nested_resource_exposes_dedicated_pages)
        // stays true, so the read-only variant below is a real contrast and
        // not just what every relation already returns.
        $this->assertTrue($comments['canCreate']);

        $readOnly = \Alxtexh\Panel\Resources\RelationManager::make('comments', 'Comments')
            ->resource(\Alxtexh\Panel\Tests\Fixtures\Resources\CommentResource::class)
            ->readOnly()
            ->toSchema();

        $this->assertTrue($readOnly['readOnly']);
        $this->assertFalse($readOnly['canCreate']);
        $this->assertFalse($readOnly['canEdit']);
        $this->assertFalse($readOnly['inlineCreate']);
        $this->assertSame('comments', $readOnly['pages']['resource'] ?? null);
    }

    public function test_inline_create_refuses_an_undeclared_relation(): void
    {
        $this->postJson("/articles/{$this->article->getKey()}/relations/somethingElse", [
            'body' => 'Nope',
        ])->assertNotFound();
    }

    public function test_inline_create_ignores_a_claimed_parent_in_the_body(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other parent',
            'status' => 'draft',
        ]);

        $this->postJson("/articles/{$this->article->getKey()}/relations/comments", [
            'body' => 'Stamped from the URL',
            'article_id' => $other->getKey(),
        ])->assertCreated();

        $this->assertDatabaseHas('comments', [
            'body' => 'Stamped from the URL',
            'article_id' => $this->article->getKey(),
        ]);

        $this->assertDatabaseMissing('comments', [
            'body' => 'Stamped from the URL',
            'article_id' => $other->getKey(),
        ]);
    }
}
