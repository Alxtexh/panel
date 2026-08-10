<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\Locale;
use Tests\TestCase;

/**
 * Language, and which way the layout runs.
 *
 * DIRECTION IS DERIVED FROM THE LOCALE, never stored beside it. Offering "RTL"
 * as its own setting invites the two to disagree - Arabic rendered left to
 * right, or English mirrored - and both are states nobody wants and somebody
 * eventually reaches.
 *
 * THE PANEL IS TESTED WITH A REAL RTL LANGUAGE rather than a direction toggle.
 * Mirroring the layout while leaving the words in English hides every bug that
 * only appears when the text itself runs the other way.
 */
final class LocalisationTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->user = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /* ------------------------------------------------------------ direction */

    public function test_direction_is_derived_from_the_language(): void
    {
        $this->assertSame('ltr', Locale::direction('en'));
        $this->assertSame('rtl', Locale::direction('ar'));
        $this->assertSame('rtl', Locale::direction('he'));
    }

    /**
     * A REGION DOES NOT CHANGE THE SCRIPT. `ar-EG` and `ar_SA` are still Arabic,
     * and listing every region would be a list that is permanently missing one.
     */
    public function test_a_region_suffix_does_not_change_direction(): void
    {
        $this->assertSame('rtl', Locale::direction('ar-EG'));
        $this->assertSame('rtl', Locale::direction('ar_SA'));
        $this->assertSame('ltr', Locale::direction('en-GB'));
    }

    /** An unknown language is left to right rather than an error. */
    public function test_an_unknown_language_falls_back_to_ltr(): void
    {
        $this->assertSame('ltr', Locale::direction('zz'));
    }

    /* ----------------------------------------------------------- discovery */

    public function test_available_locales_are_read_from_disk(): void
    {
        $available = Locale::available();

        $this->assertContains('en', $available);
        $this->assertContains('ar', $available, 'The Arabic files exist, so Arabic is offered.');
    }

    /* ------------------------------------------------------------ messages */

    public function test_messages_are_returned_for_the_chosen_language(): void
    {
        $this->assertSame('Save', Locale::messages('en')['actions']['save']);
        $this->assertSame('حفظ', Locale::messages('ar')['actions']['save']);
    }

    /**
     * A LANGUAGE WITH NO FILES FALLS BACK rather than failing. The honest result
     * of selecting a locale whose strings were removed is English - not an
     * exception on every page, and not a screen of raw translation keys.
     */
    public function test_a_language_with_no_files_falls_back(): void
    {
        $messages = Locale::messages('zz');

        $this->assertSame('Save', $messages['actions']['save'] ?? null);
    }

    /* -------------------------------------------------------- the request */

    public function test_the_page_carries_the_locale_and_direction(): void
    {
        $props = $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('ltr', $props['locale']['direction']);
        $this->assertSame('Save', $props['messages']['actions']['save']);
    }

    /**
     * THE PERSON'S CHOICE WINS, which is the whole point of storing it on the
     * user rather than the installation: somebody working in Arabic at an
     * English-speaking ISP should see Arabic.
     */
    public function test_a_users_language_is_applied(): void
    {
        $this->user->forceFill(['locale' => 'ar'])->save();

        $props = $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('ar', $props['locale']['current']);
        $this->assertSame('rtl', $props['locale']['direction']);
        $this->assertSame('حفظ', $props['messages']['actions']['save']);
    }

    /**
     * A STORED LANGUAGE WE NO LONGER HAVE IS IGNORED. The value is data, and
     * data can name a locale whose files were deleted - which would otherwise
     * render the entire panel as raw translation keys.
     */
    public function test_a_language_that_is_not_installed_is_ignored(): void
    {
        $this->user->forceFill(['locale' => 'zz'])->save();

        $props = $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('en', $props['locale']['current']);
    }
}
