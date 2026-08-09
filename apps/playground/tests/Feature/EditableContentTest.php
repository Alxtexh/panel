<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Models\ContentEntry;
use Tests\TestCase;

/**
 * Content edited in the database reaches the screens - without the screens
 * having learned the table exists.
 *
 * THE BRIDGE IS THE THING UNDER TEST: `EditableContent` feeds rows through
 * the same registration seams a plugin uses, so these assertions go through
 * the real HTTP pages rather than calling the support classes - a row that
 * registers but never renders is exactly the failure worth catching.
 */
final class EditableContentTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    public function test_a_faq_row_appears_on_the_faq_page(): void
    {
        ContentEntry::create([
            'kind' => ContentEntry::KIND_FAQ,
            'category' => 'Billing',
            'title' => 'How do I download an invoice?',
            'body' => 'From the invoice screen, via the row menu.',
        ]);

        $groups = $this->actingAs($this->operator)->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $billing = collect($groups)->firstWhere('title', 'Billing');

        $this->assertNotNull($billing, 'The FAQ group written in the database must render.');
        $this->assertSame(
            'How do I download an invoice?',
            $billing['items'][0]['q'],
        );
    }

    public function test_a_release_row_leads_whats_new(): void
    {
        ContentEntry::create([
            'kind' => ContentEntry::KIND_RELEASE,
            'category' => '9 August 2026',
            'title' => '1.1.0',
            'body' => 'Editable content shipped.',
            'meta' => ['added' => ['Help, FAQ and What\'s-new are edited, not deployed.']],
        ]);

        $releases = $this->actingAs($this->operator)->get('/whats-new')->assertOk()
            ->viewData('page')['props']['releases'];

        // FIRST, not merely present: the database rows are what an operator
        // wrote most recently, and What's-new reads top-down.
        $this->assertSame('1.1.0', $releases[0]['version']);
        $this->assertSame('Editable content shipped.', $releases[0]['highlight']);
    }

    /**
     * THE CACHE DIES WITH THE EDIT. A cached bridge that survived a save
     * would serve the typo the edit existed to fix, silently, for a day.
     */
    public function test_an_edit_is_visible_on_the_next_request(): void
    {
        $entry = ContentEntry::create([
            'kind' => ContentEntry::KIND_FAQ,
            'category' => 'Billing',
            'title' => 'A qeustion with a typo?',
            'body' => 'Yes.',
        ]);

        $this->actingAs($this->operator)->get('/faq')->assertOk();

        $entry->update(['title' => 'A question without a typo?']);

        $groups = $this->actingAs($this->operator)->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $questions = collect($groups)->flatMap(fn (array $g) => array_column($g['items'], 'q'));

        $this->assertTrue($questions->contains('A question without a typo?'));
        $this->assertFalse($questions->contains('A qeustion with a typo?'));
    }

    /** Unpublished rows reach no screen - that is what the flag is for. */
    public function test_an_unpublished_row_is_absent(): void
    {
        ContentEntry::create([
            'kind' => ContentEntry::KIND_FAQ,
            'category' => 'Drafts',
            'title' => 'Not ready yet?',
            'body' => 'No.',
            'published' => false,
        ]);

        $groups = $this->actingAs($this->operator)->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $this->assertNull(collect($groups)->firstWhere('title', 'Drafts'));
    }
}
