<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * What "search" means, which is more decided than it looks.
 *
 * THREE CHOICES ARE BAKED INTO THE BEHAVIOUR, and each has a wrong version
 * that ships silently:
 *
 *   WORDS ARE ANDED. Typing more must NARROW. A shape that ORs the terms gets
 *   less useful the harder somebody tries, and looks like it is working.
 *
 *   THE WORDS MAY LAND IN DIFFERENT COLUMNS. Treating the phrase as one
 *   pattern means a search only succeeds when the words appear together, in
 *   that order, inside a single column - so anybody typing the two things
 *   printed in front of them gets nothing.
 *
 *   MATCHES ARE AT WORD STARTS, not mid-word. Mid-word matching turns every
 *   short term into a scan that returns most of the table.
 */
final class TableSearchTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);
    }

    private function article(string $title, string $status = 'draft'): void
    {
        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => $title,
            'status' => $status,
        ]);
    }

    /** @return list<string> */
    private function search(string $term): array
    {
        $response = $this->get('/articles?search='.urlencode($term))->assertOk();

        return array_column($response->viewData('page')['props']['records'], 'title');
    }

    public function test_it_matches_the_start_of_any_word_not_just_the_first(): void
    {
        $this->article('Amina Achieng');

        $this->assertSame(['Amina Achieng'], $this->search('Amina'));
        $this->assertSame(
            ['Amina Achieng'],
            $this->search('Achieng'),
            'Searching the second word must find the record.',
        );
    }

    public function test_it_does_not_match_mid_word(): void
    {
        $this->article('Amina Achieng');

        $this->assertSame(
            [],
            $this->search('mina'),
            'A mid-word match turns every short term into a scan of the table.',
        );
    }

    public function test_every_word_must_match_and_they_may_be_in_different_columns(): void
    {
        $this->article('Quarterly report', 'published');
        $this->article('Quarterly draft', 'draft');

        // One word per column - the title and the status.
        $this->assertSame(['Quarterly report'], $this->search('Quarterly published'));
    }

    public function test_typing_more_words_only_narrows(): void
    {
        $this->article('Annual review');
        $this->article('Annual budget');

        $this->assertCount(2, $this->search('Annual'));
        $this->assertSame(['Annual budget'], $this->search('Annual budget'));
    }

    public function test_a_term_matching_nothing_returns_nothing(): void
    {
        $this->article('Annual review');

        $this->assertSame([], $this->search('Nonexistent'));
    }
}
