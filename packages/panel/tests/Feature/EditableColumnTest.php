<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Writing one cell from the list, without opening the record.
 *
 * THE CENTRAL GUARD IS THE COLUMN ALLOWLIST. The endpoint takes a column NAME
 * from the request body, so without a check that the column was DECLARED
 * editable, the route is "set any attribute on any row you can see" - and it
 * would look like a feature the whole time, because the happy path works.
 *
 * The fixture declares exactly one editable column and leaves the others
 * alone, so both halves are assertable: what it may write, and what it must
 * refuse.
 */
final class EditableColumnTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $user;

    private Article $article;

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

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Original',
            'status' => 'draft',
        ]);
    }

    private function cell(array $payload)
    {
        return $this->patchJson("/articles/{$this->article->getKey()}/cell", $payload);
    }

    public function test_an_editable_cell_can_be_written(): void
    {
        $this->cell(['column' => 'status', 'value' => 'published'])->assertOk();

        $this->assertSame('published', $this->article->fresh()->status);
    }

    /**
     * A COLUMN THAT EXISTS AND IS NOT DECLARED EDITABLE MUST NOT BE WRITABLE.
     *
     * `title` is selected, sortable and searchable on this table - it is a
     * perfectly real column - and that is the point: existing on the model is
     * not permission to write it from here.
     */
    public function test_a_column_that_is_not_declared_editable_cannot_be_written(): void
    {
        // 404, not 422 - the same convention the row menu uses: a column the
        // table never declared editable does not exist as far as this
        // endpoint is concerned. 422 is reserved for a DECLARED target given
        // a bad value, asserted further down.
        $this->cell(['column' => 'title', 'value' => 'Rewritten'])
            ->assertNotFound();

        $this->assertSame('Original', $this->article->fresh()->title);
    }

    public function test_an_unknown_column_is_refused(): void
    {
        $this->cell(['column' => 'not_a_column', 'value' => 'x'])
            ->assertNotFound();
    }

    /**
     * THE TENANT COLUMN IS NOT WRITABLE THROUGH THIS DOOR EITHER.
     *
     * Asserted specifically rather than trusting the allowlist to cover it,
     * because this is the one column whose rewrite moves a record into another
     * organisation - the worst outcome available from this endpoint.
     */
    public function test_the_tenant_column_cannot_be_written(): void
    {
        $theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->cell(['column' => 'tenant_id', 'value' => $theirs->id])
            ->assertNotFound();

        $this->assertSame(
            $this->mine->id,
            Article::withoutGlobalScopes()->find($this->article->getKey())->tenant_id,
            'A cell edit moved a record into another organisation.',
        );
    }

    public function test_a_value_outside_the_declared_options_is_rejected(): void
    {
        $this->cell(['column' => 'status', 'value' => 'not-an-option'])
            ->assertStatus(422);

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_guests_cannot_edit_a_cell(): void
    {
        auth()->logout();

        $this->cell(['column' => 'status', 'value' => 'published'])
            ->assertUnauthorized();

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_a_text_input_column_can_be_written(): void
    {
        $this->cell(['column' => 'slug', 'value' => 'my-new-slug'])->assertOk();

        $this->assertSame('my-new-slug', $this->article->fresh()->slug);
    }

    /**
     * `TextInputColumn` HAS NO FIXED OPTION LIST TO CHECK A VALUE AGAINST -
     * `->rules()` is the only fence it has, so this is the one assertion that
     * actually exercises it rather than trusting the class compiles.
     */
    public function test_a_text_input_column_rejects_a_value_that_fails_its_declared_rules(): void
    {
        $this->cell(['column' => 'slug', 'value' => 'way-too-long-for-the-declared-rule'])
            ->assertStatus(422);

        $this->assertNull($this->article->fresh()->slug);
    }
}
