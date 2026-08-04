<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Panel\Singulars\LandingPageResource;
use App\Support\LandingPresets;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\InstallationState;
use Tests\TestCase;

/**
 * Editing the front door from the panel.
 *
 * THE FAILURE THIS FILE IS ABOUT IS A BLANK HOMEPAGE. A CMS over a public page
 * has one catastrophic state - saved nothing, serves nothing - and it is
 * reachable by an editor deleting blocks to start again. So an empty save hands
 * the page back to the shipped design rather than emptying the site, and that
 * is asserted before anything else.
 *
 * THE OTHER QUIET FAILURE is a block type the renderer does not know: it saves,
 * looks right in the editor, and never appears on the page, because
 * `PkLandingSections` skips what it cannot draw. The two lists have to agree,
 * and nothing but a test makes them.
 */
final class LandingCmsTest extends TestCase
{
    use RefreshDatabase;

    /** Every block the editor offers must be one the renderer can draw. */
    public function test_every_editable_block_is_a_section_the_page_can_render(): void
    {
        $known = ['hero', 'logos', 'features', 'bento', 'showcase', 'steps', 'stats', 'testimonials', 'pricing', 'faq', 'cta'];

        $field = collect(LandingPageResource::formDefinition()->fields())
            ->first(static fn ($f): bool => $f->key === 'sections');

        $this->assertNotNull($field, 'The landing editor has no sections field.');

        foreach (array_column($field->toSchema()['blocks'] ?? [], 'type') as $type) {
            $this->assertContains(
                $type,
                $known,
                "The editor offers a [{$type}] block, which PkLandingSections would skip on the live page.",
            );
        }
    }

    /* --------------------------------------------------------- what renders */

    /** With nothing saved, the shipped design is what the public sees. */
    public function test_an_unedited_installation_serves_the_configured_design(): void
    {
        $sections = $this->get('/')->assertOk()->viewData('page')['props']['sections'];

        $this->assertSame(
            array_column(LandingPresets::get('aurora'), 'type'),
            array_column($sections, 'type'),
        );
    }

    /** What was edited is what is served. */
    public function test_a_saved_page_replaces_the_shipped_one(): void
    {
        LandingPageResource::save(['sections' => [
            ['type' => 'hero', 'data' => ['title' => 'Something we wrote ourselves']],
            ['type' => 'cta', 'data' => ['title' => 'Talk to us']],
        ]]);

        $sections = $this->get('/')->assertOk()->viewData('page')['props']['sections'];

        $this->assertSame(['hero', 'cta'], array_column($sections, 'type'));
        $this->assertSame('Something we wrote ourselves', $sections[0]['data']['title']);
    }

    /**
     * THE ONE THAT MATTERS. Deleting every block must not blank the front door.
     */
    public function test_deleting_every_block_falls_back_rather_than_serving_nothing(): void
    {
        LandingPageResource::save(['sections' => []]);

        $sections = $this->get('/')->assertOk()->viewData('page')['props']['sections'];

        $this->assertNotEmpty($sections, 'An empty save blanked the public homepage.');
        $this->assertSame('hero', $sections[0]['type']);
    }

    /** A preview still shows the shipped design, whatever has been edited. */
    public function test_a_preview_ignores_the_edited_page(): void
    {
        LandingPageResource::save(['sections' => [
            ['type' => 'cta', 'data' => ['title' => 'Edited']],
        ]]);

        $sections = $this->get('/preview/console')->assertOk()->viewData('page')['props']['sections'];

        $this->assertSame(
            array_column(LandingPresets::get('console'), 'type'),
            array_column($sections, 'type'),
            'The preview showed the edited page, which makes it useless for comparing designs.',
        );
    }

    /* ---------------------------------------------------------- the presets */

    /** Choosing a preset replaces the page and beats whatever was in the builder. */
    public function test_choosing_a_preset_replaces_the_sections(): void
    {
        LandingPageResource::save([
            'sections' => [['type' => 'cta', 'data' => ['title' => 'Old']]],
            'preset' => 'editorial',
        ]);

        $this->assertSame(
            array_column(LandingPresets::get('editorial'), 'type'),
            array_column((array) app(InstallationState::class)->get(LandingPageResource::KEY), 'type'),
        );
    }

    /** And the choice does not stick, or it would re-apply on the next save. */
    public function test_the_preset_choice_is_not_remembered(): void
    {
        LandingPageResource::save(['preset' => 'console']);

        $this->assertNull(LandingPageResource::values()['preset']);
    }

    /** A junk block is dropped rather than stored for the renderer to skip. */
    public function test_a_block_with_no_type_is_not_stored(): void
    {
        LandingPageResource::save(['sections' => [
            ['type' => 'hero', 'data' => ['title' => 'Kept']],
            ['data' => ['title' => 'No type at all']],
        ]]);

        $stored = (array) app(InstallationState::class)->get(LandingPageResource::KEY);

        $this->assertCount(1, $stored);
    }

    /**
     * THE EDITOR OPENS ON THE PAGE THAT IS LIVE.
     *
     * It did not. `values()` returned whatever had been SAVED, and an
     * unedited installation has saved nothing - while `/` renders eleven
     * sections from the configured preset. So the screen showed a row of "add"
     * buttons and nothing else, for a front page that visibly has a hero, a
     * pricing table and an FAQ on it. Every test above passed: each one asserts
     * what is SERVED, and the page was served correctly the whole time. What
     * was wrong was the editor's account of it.
     *
     * ASSERTED AGAINST THE RENDERER'S OWN FALLBACK rather than a fixed count,
     * so the two cannot drift apart again.
     */
    public function test_the_editor_opens_on_the_sections_a_visitor_sees(): void
    {
        $live = $this->get('/')->assertOk()->viewData('page')['props']['sections'];

        $this->assertNotEmpty($live, 'Fixture assumption: an unedited install serves a design.');

        $this->assertSame(
            $live,
            LandingPageResource::values()['sections'],
            'The editor must open on the page that is live, not on an empty builder.',
        );
    }

    /** And once something IS saved, that is what it opens on. */
    public function test_a_saved_page_is_what_the_editor_opens_on(): void
    {
        $mine = [['type' => 'hero', 'title' => 'Mine']];

        LandingPageResource::save(['sections' => $mine]);

        $this->assertSame($mine, LandingPageResource::values()['sections']);
    }
}
