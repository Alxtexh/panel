<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\InertiaLayoutWiring;
use Alxtexh\Panel\Support\PanelLayoutShell;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

/**
 * Doctor flags a bootstrap that drops the shell while still returning 200.
 */
final class DoctorInertiaLayoutTest extends TestCase
{
    public function test_broken_app_ts_without_panel_layout_is_a_problem(): void
    {
        $source = (string) file_get_contents(dirname(__DIR__).'/Fixtures/js/app.broken.ts');
        $findings = InertiaLayoutWiring::inspect($source);

        $this->assertSame('problem', $findings[0]['level']);
        $this->assertStringContainsString('does not reference PanelLayout', $findings[0]['title']);
    }

    public function test_nullish_assign_in_resolve_is_a_note(): void
    {
        $source = (string) file_get_contents(dirname(__DIR__).'/Fixtures/js/app.nullish.ts');
        $findings = InertiaLayoutWiring::inspect($source);

        $this->assertSame('note', $findings[0]['level']);
        $this->assertStringContainsString('??=', $findings[0]['title']);
    }

    public function test_the_install_stub_is_quiet(): void
    {
        $source = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/app.ts.stub'
        );

        $this->assertSame([], InertiaLayoutWiring::inspect($source));
    }

    public function test_panel_layout_without_shell_is_rejected(): void
    {
        $broken = (string) file_get_contents(dirname(__DIR__).'/Fixtures/js/PanelLayout.broken.vue');
        $stub = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/stubs/PanelLayout.vue.stub'
        );

        $this->assertFalse(PanelLayoutShell::usesPanelShell($broken));
        $this->assertTrue(PanelLayoutShell::usesPanelShell($stub));
    }

    public function test_doctor_reports_a_broken_app_ts_on_disk(): void
    {
        $dir = resource_path('js');
        File::ensureDirectoryExists($dir);

        $path = $dir.'/app.ts';
        $previous = is_file($path) ? (string) file_get_contents($path) : null;

        try {
            file_put_contents(
                $path,
                file_get_contents(dirname(__DIR__).'/Fixtures/js/app.broken.ts'),
            );

            Artisan::call('panel:doctor', ['--json' => true]);
            $findings = json_decode(Artisan::output(), true, 512, JSON_THROW_ON_ERROR);
            $titles = array_column($findings, 'title');

            $this->assertContains(
                'resources/js/app.ts does not reference PanelLayout',
                $titles,
            );
        } finally {
            if ($previous === null) {
                @unlink($path);
            } else {
                file_put_contents($path, $previous);
            }
        }
    }

    public function test_doctor_reports_a_layout_that_dropped_panel_shell(): void
    {
        $dir = resource_path('js/layouts');
        File::ensureDirectoryExists($dir);

        $path = $dir.'/PanelLayout.vue';
        $previous = is_file($path) ? (string) file_get_contents($path) : null;

        try {
            file_put_contents(
                $path,
                file_get_contents(dirname(__DIR__).'/Fixtures/js/PanelLayout.broken.vue'),
            );

            Artisan::call('panel:doctor', ['--json' => true]);
            $findings = json_decode(Artisan::output(), true, 512, JSON_THROW_ON_ERROR);
            $titles = array_column($findings, 'title');

            $this->assertContains(
                'PanelLayout.vue no longer uses PanelShell',
                $titles,
            );
        } finally {
            if ($previous === null) {
                @unlink($path);
            } else {
                file_put_contents($path, $previous);
            }
        }
    }
}
