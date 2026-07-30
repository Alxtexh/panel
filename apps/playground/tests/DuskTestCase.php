<?php

namespace Tests;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Illuminate\Support\Collection;
use Laravel\Dusk\TestCase as BaseTestCase;
use PHPUnit\Framework\Attributes\BeforeClass;

/**
 * The base for browser tests.
 *
 * WHY THESE EXIST AT ALL. Two real bugs shipped in one afternoon that 1,237
 * passing tests could not see: a form bound `@update:model-value` to a component
 * that emits `@change`, which type-checked, built, flipped the radio in the DOM
 * and never told the form; and an invoice rendered a quantity, a unit price and
 * an amount as `1100,000.00100,000.00`, because right-aligned cells had no
 * horizontal padding. Both were obvious the moment somebody looked at a screen,
 * and invisible to every other kind of test we have.
 *
 * THE BROWSER IS RESOLVED, NOT ASSUMED, and this is the part that took the
 * afternoon. `/snap/bin/chromium` is a symlink to `snap`, and ChromeDriver
 * launching a confined snap does not fail - it HANGS, with no output from either
 * process, which is indistinguishable from a suite that is merely slow. So the
 * search order below is explicit, snap is deliberately excluded, and a machine
 * with no usable browser SKIPS with an instruction rather than timing out.
 *
 * @see scripts/dusk.sh - the wrapper that guarantees the dev database is safe.
 */
abstract class DuskTestCase extends BaseTestCase
{
    /**
     * Where to look for a browser, in order.
     *
     * CHROME FOR TESTING FIRST, because it is the only entry whose version we
     * chose: `npx @puppeteer/browsers install chrome@<major>` fetches a build
     * that matches the ChromeDriver Dusk downloaded. Everything after it is
     * whatever the machine happens to have, and a ChromeDriver/Chrome major
     * mismatch is its own confusing failure.
     *
     * SNAP IS NOT IN THIS LIST. See the class note - it hangs rather than fails.
     */
    private const BROWSER_CANDIDATES = [
        // Downloaded into the app directory by scripts/dusk.sh.
        'chrome/*/chrome-linux64/chrome',
        // Ordinary Debian/Ubuntu packages.
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser',
        // Where GitHub Actions' browser setup steps land.
        '/opt/hostedtoolcache/chrome/*/chrome-linux64/chrome',
        '/opt/hostedtoolcache/setup-chrome/chromium/*/chrome-linux64/chrome',
    ];

    #[BeforeClass]
    public static function prepare(): void
    {
        if (static::runningInSail()) {
            return;
        }

        static::startChromeDriver(['--port=9515']);
    }

    /**
     * Skip the whole class when there is no browser to drive.
     *
     * A SKIP, NOT A FAILURE. A developer without a browser installed has not
     * broken anything, and a red suite for a missing optional tool is a suite
     * people stop running. The message says exactly what to run.
     */
    protected function setUp(): void
    {
        if (static::browserBinary() === null) {
            $this->markTestSkipped(
                'No usable Chrome found, so the browser tests cannot run. Install one with: '
                .'npx @puppeteer/browsers install chrome@151  (from apps/playground). '
                .'A snap-packaged Chromium will not work - ChromeDriver hangs launching it.'
            );
        }

        parent::setUp();
    }

    protected function driver(): RemoteWebDriver
    {
        $options = (new ChromeOptions)
            /*
             * THE BINARY IS SET EXPLICITLY. Left to itself ChromeDriver searches
             * the PATH, finds the snap wrapper, and hangs - so the one thing this
             * class exists to prevent would happen by default.
             */
            ->setBinary((string) static::browserBinary())
            ->addArguments(collect([
                $this->shouldStartMaximized() ? '--start-maximized' : '--window-size=1400,1000',
                '--disable-search-engine-choice-screen',
                '--disable-smooth-scrolling',
                /*
                 * A FIXED LOCALE.
                 *
                 * The panel formats dates and money through `Intl`, so a browser
                 * on a different locale renders "30/07/2026" where an assertion
                 * expects "2026-07-30" - a test that passes on one machine and
                 * fails on another with nothing to explain why.
                 */
                '--lang=en-GB',
            ])->unless($this->hasHeadlessDisabled(), function (Collection $items) {
                return $items->merge([
                    '--disable-gpu',
                    '--headless=new',
                    /*
                     * `--no-sandbox` is for CI containers, which run as root and
                     * cannot use Chrome's own sandbox. It weakens a boundary
                     * inside a browser that only ever loads our test server, and
                     * it is the difference between a suite that runs in CI and
                     * one that does not.
                     */
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                ]);
            })->all());

        return RemoteWebDriver::create(
            $_ENV['DUSK_DRIVER_URL'] ?? env('DUSK_DRIVER_URL') ?? 'http://localhost:9515',
            DesiredCapabilities::chrome()->setCapability(ChromeOptions::CAPABILITY, $options),
        );
    }

    /**
     * The first browser on disk, or null.
     *
     * `DUSK_CHROME_BINARY` overrides everything, because a machine with an
     * unusual layout should not need this file edited.
     */
    protected static function browserBinary(): ?string
    {
        $explicit = $_ENV['DUSK_CHROME_BINARY'] ?? getenv('DUSK_CHROME_BINARY') ?: null;

        if (is_string($explicit) && is_executable($explicit)) {
            return $explicit;
        }

        foreach (self::BROWSER_CANDIDATES as $candidate) {
            /*
             * `dirname(__DIR__)`, not `base_path()`.
             *
             * This runs from `setUp()` BEFORE `parent::setUp()` boots the
             * application - deliberately, so a machine with no browser skips
             * instead of booting a framework it is about to abandon. At that
             * point the container is a bare `Container` with no `basePath()`,
             * and calling the helper fails with an error about the container
             * rather than about Chrome.
             */
            $pattern = str_starts_with($candidate, '/')
                ? $candidate
                : dirname(__DIR__).'/'.$candidate;

            // Newest first, so an upgrade that leaves an older build in place
            // does not pin the suite to a version ChromeDriver no longer matches.
            $matches = glob($pattern) ?: [];
            rsort($matches);

            foreach ($matches as $match) {
                if (is_executable($match)) {
                    return $match;
                }
            }
        }

        return null;
    }
}
