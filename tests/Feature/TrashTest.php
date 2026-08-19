<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * The bin: what is in it, whose it is, and getting things back out.
 *
 * A TRASH SCREEN IS A SECOND READING SURFACE OVER THE SAME ROWS, and that is
 * exactly why it is worth its own tests. Every isolation property asserted for
 * the list has to hold here independently - the bin reads with the soft-delete
 * scope lifted, which is the one place a tenant scope is most easily lost
 * along with it. A leak here shows another organisation's deleted records,
 * which is arguably worse than showing their live ones: nobody is watching
 * the bin.
 *
 * RESTORE IS A WRITE. It returns a row to every screen its owner can see, so
 * it answers to the policy per record rather than to "can this person open the
 * trash".
 */
final class TrashTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $user;

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
    }

    private function deletedArticle(string $title, ?Tenant $tenant = null): Article
    {
        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => ($tenant ?? $this->mine)->id,
            'title' => $title,
            'status' => 'draft',
        ]);

        $article->delete();

        return $article;
    }

    /** @return list<string> */
    private function trashTitles(): array
    {
        $response = $this->get('/trash')->assertOk();

        $props = $response->viewData('page')['props'];

        $records = $props['records'] ?? $props['items'] ?? [];

        return array_values(array_filter(array_map(
            static fn (array $row): ?string => $row['title'] ?? $row['label'] ?? null,
            $records,
        )));
    }

    public function test_a_deleted_record_appears_in_the_trash(): void
    {
        $this->deletedArticle('Deleted one');

        $this->assertContains('Deleted one', $this->trashTitles());
    }

    public function test_a_live_record_is_not_in_the_trash(): void
    {
        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Still here',
            'status' => 'draft',
        ]);

        $this->assertNotContains('Still here', $this->trashTitles());
    }

    /**
     * THE BIN READS WITH THE SOFT-DELETE SCOPE LIFTED, which is the one place
     * a tenant scope is most easily dropped alongside it. Nobody watches the
     * bin, so a leak here survives longer than one on the list.
     */
    public function test_another_organisations_deleted_records_are_not_listed(): void
    {
        $this->deletedArticle('Mine gone');
        $this->deletedArticle('Theirs gone', $this->theirs);

        $titles = $this->trashTitles();

        $this->assertContains('Mine gone', $titles);
        $this->assertNotContains(
            'Theirs gone',
            $titles,
            'The trash listed another organisation’s deleted record.',
        );
    }

    public function test_a_record_can_be_restored_from_the_trash(): void
    {
        $article = $this->deletedArticle('Coming back');

        // A redirect, not JSON: the trash screen is an Inertia page and
        // restore sends you back to it.
        $this->postJson('/trash/restore', [
            'resource' => 'articles',
            'ids' => [$article->getKey()],
        ])->assertRedirect();

        $this->assertNotNull(
            Article::query()->find($article->getKey()),
            'A restored record did not return to the ordinary list.',
        );
    }

    /**
     * RESTORE IS A WRITE, so it is scoped like one.
     *
     * Returning another organisation's row would not merely reveal it - it
     * would put it back on their screens, which is a change to somebody else's
     * data made from outside their organisation entirely.
     */
    public function test_another_organisations_record_cannot_be_restored(): void
    {
        $foreign = $this->deletedArticle('Theirs gone', $this->theirs);

        $this->postJson('/trash/restore', [
            'resource' => 'articles',
            'ids' => [$foreign->getKey()],
        ]);

        $this->assertNotNull(
            Article::withoutGlobalScopes()->find($foreign->getKey())->deleted_at,
            'Another organisation’s record was restored.',
        );
    }

    public function test_another_organisations_record_cannot_be_purged(): void
    {
        $foreign = $this->deletedArticle('Theirs gone', $this->theirs);

        $this->deleteJson('/trash', [
            'resource' => 'articles',
            'ids' => [$foreign->getKey()],
        ]);

        $this->assertNotNull(
            Article::withoutGlobalScopes()->find($foreign->getKey()),
            'Another organisation’s record was permanently deleted.',
        );
    }

    public function test_a_guest_cannot_open_the_trash(): void
    {
        auth()->logout();

        $this->get('/trash')->assertRedirect();
    }
}
