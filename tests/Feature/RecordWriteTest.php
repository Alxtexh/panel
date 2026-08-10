<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Creating, updating and deleting one record through the packaged endpoints.
 *
 * THE TENANT COLUMN IS THE INTERESTING ONE. It is set from request CONTEXT and
 * never from the payload, so a submitted `tenant_id` must be ignored rather
 * than honoured - otherwise the create form is a way to file a record into
 * somebody else's organisation, and it would look like a successful save to
 * everybody involved.
 *
 * DELETES ARE SOFT, so "deleted" means "gone from the default list and still
 * restorable". Both halves are asserted: a delete that removed the row from
 * the list but left it findable by id, or one that destroyed it outright,
 * would each pass half of this.
 */
final class RecordWriteTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    private function makeArticle(array $attributes = []): Article
    {
        return Article::withoutGlobalScopes()->create($attributes + [
            'tenant_id' => $this->mine->id,
            'title' => 'Existing',
            'status' => 'draft',
        ]);
    }

    public function test_it_creates_a_record(): void
    {
        $this->post('/articles', ['title' => 'Fresh', 'status' => 'draft'])
            ->assertRedirect();

        $this->assertSame(1, Article::query()->where('title', 'Fresh')->count());
    }

    /**
     * A SUBMITTED TENANT IS IGNORED, NOT HONOURED.
     *
     * The column comes from context. If the payload could set it, the create
     * form would file records into another organisation - and nothing would
     * look wrong: the request succeeds, the row exists, and it is simply
     * invisible to the person who made it and visible to somebody who should
     * never have received it.
     */
    public function test_a_submitted_tenant_id_is_ignored(): void
    {
        $theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->post('/articles', [
            'title' => 'Planted',
            'status' => 'draft',
            'tenant_id' => $theirs->id,
        ])->assertRedirect();

        $row = Article::withoutGlobalScopes()->where('title', 'Planted')->firstOrFail();

        $this->assertSame(
            $this->mine->id,
            $row->tenant_id,
            'A submitted tenant_id was written, filing the record into another organisation.',
        );
    }

    public function test_validation_errors_come_back_for_the_declared_rules(): void
    {
        $this->post('/articles', ['title' => ''])
            ->assertSessionHasErrors('title');

        $this->assertSame(0, Article::query()->count());
    }

    public function test_it_updates_a_record(): void
    {
        $article = $this->makeArticle();

        $this->put("/articles/{$article->getKey()}", ['title' => 'Renamed', 'status' => 'draft'])
            ->assertRedirect();

        $this->assertSame('Renamed', $article->fresh()->title);
    }

    public function test_it_soft_deletes_a_record(): void
    {
        $article = $this->makeArticle();

        $this->delete("/articles/{$article->getKey()}")->assertRedirect();

        // Gone from the default query...
        $this->assertNull(Article::query()->find($article->getKey()));

        // ...and still there to be restored.
        $this->assertNotNull(Article::withTrashed()->find($article->getKey()));
    }

    public function test_a_deleted_record_disappears_from_the_list(): void
    {
        $kept = $this->makeArticle(['title' => 'Kept']);
        $gone = $this->makeArticle(['title' => 'Gone']);

        $this->delete("/articles/{$gone->getKey()}")->assertRedirect();

        $response = $this->get('/articles')->assertOk();

        $titles = array_column($response->viewData('page')['props']['records'], 'title');

        $this->assertSame(['Kept'], $titles);
        $this->assertNotNull($kept->fresh());
    }

    /**
     * NO QUERY STRING BRINGS DELETED ROWS BACK.
     *
     * The list builds its query from declared filters, so a parameter that
     * reached the soft-delete scope would be a way to read the bin from the
     * ordinary screen - past whatever separate permission the trash requires.
     */
    public function test_no_query_string_brings_deleted_records_back_into_the_list(): void
    {
        $gone = $this->makeArticle(['title' => 'Gone']);

        $this->delete("/articles/{$gone->getKey()}")->assertRedirect();

        foreach (['?trashed=1', '?withTrashed=1', '?deleted=1', '?with_trashed=true'] as $query) {
            $response = $this->get("/articles{$query}")->assertOk();

            $titles = array_column($response->viewData('page')['props']['records'], 'title');

            $this->assertNotContains(
                'Gone',
                $titles,
                "The query string {$query} brought a deleted record back into the list.",
            );
        }
    }
}
