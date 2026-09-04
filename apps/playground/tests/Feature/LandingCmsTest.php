<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Landing\LandingPageResource;
use Alxtexh\Panel\Landing\LandingPresets;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/** Landing remains an opt-in editor, but ships no generic page templates. */
final class LandingCmsTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_editor_still_exposes_reusable_sections(): void
    {
        $field = collect(LandingPageResource::formDefinition()->fields())
            ->first(static fn ($f): bool => $f->key === 'sections');

        $this->assertNotNull($field);
        $this->assertNotEmpty($field->toSchema()['blocks'] ?? []);
        $this->assertSame([], LandingPresets::names());
    }

    public function test_saved_sections_remain_available_for_a_host_authored_page(): void
    {
        LandingPageResource::save(['sections' => [
            ['type' => 'hero', 'data' => ['title' => 'Host-authored page']],
            ['type' => 'cta', 'data' => ['title' => 'Contact us']],
        ]]);

        $this->assertSame(['hero', 'cta'], array_column(
            (array) app(\Alxtexh\Panel\Support\InstallationState::class)->get(LandingPageResource::KEY),
            'type',
        ));
    }
}
