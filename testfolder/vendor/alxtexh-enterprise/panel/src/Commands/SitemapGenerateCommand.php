<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Alxtexh\Panel\Support\Sitemap;

/**
 * php artisan panel:sitemap-generate
 *
 * THE SAME OPERATION THE "SITEMAP" SCREEN'S BUTTON RUNS, exposed to the CLI
 * and the scheduler. The screen exists for a person; this exists for an
 * installation that registers a `Sitemap::source()` over data that changes
 * without a person editing anything - a public blog fed by a resource, say -
 * where "regenerate on request" is the wrong shape and a nightly
 * `$schedule->command('panel:sitemap-generate')->daily()` is the right one.
 *
 * SUCCEEDS WITH ZERO URLS RATHER THAN FAILING, deliberately different from the
 * screen it shares logic with: the screen is gated behind `isEnabled()` so it
 * cannot be opened with nothing to generate, but a scheduled command runs
 * unconditionally, on installations that will never register anything. An
 * exit code that flips between success and failure as an unrelated feature is
 * turned on and off is a false alarm waiting to page somebody.
 */
final class SitemapGenerateCommand extends Command
{
    protected $signature = 'panel:sitemap-generate';

    protected $description = 'Write sitemap.xml from every registered URL';

    public function handle(): int
    {
        $result = Sitemap::write();

        if ($result['count'] === 0) {
            $this->components->warn('Nothing is registered - wrote an empty sitemap.');

            return self::SUCCESS;
        }

        $this->components->info(sprintf(
            'Wrote %d URL(s) to %s.',
            $result['count'],
            implode(', ', $result['files']),
        ));

        if ($result['robotsTxtUpdated']) {
            $this->components->info('Referenced it from robots.txt.');
        }

        match ($result['indexNow']) {
            'notified' => $this->components->info('Notified IndexNow (Bing, Yandex, Naver, Seznam).'),
            'failed' => $this->components->warn('IndexNow notification failed - the sitemap itself is still written.'),
            'empty' => $this->components->warn('IndexNow is configured but nothing declared belongs to this host.'),
            default => null,
        };

        return self::SUCCESS;
    }
}
