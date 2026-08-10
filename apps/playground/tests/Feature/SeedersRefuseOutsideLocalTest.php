<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

/**
 * The commands that invent data must not run on a server.
 *
 * THESE SHIP INSIDE THE PACKAGE, which is what makes them worth a test rather
 * than a note in the README. Everybody who installs Alxtexhpanel gets them in
 * `artisan list`, and both create operator accounts whose password is a fixed
 * string written in the source - so running one on a server hands out known
 * credentials for every tenant it invents, succeeds, and reports nothing wrong.
 *
 * `panel:seed-demo` HAS REFUSED SINCE IT WAS WRITTEN. `panel:seed-reference`
 * never did, which is the gap this file closes and then pins.
 *
 * THE PRUNE COMMANDS ARE DELIBERATELY ABSENT from this list. They are scheduled
 * to run daily in production - guarding them would break the maintenance they
 * exist for - and it is worth writing down so nobody "fixes" that later.
 */
final class SeedersRefuseOutsideLocalTest extends TestCase
{
    use RefreshDatabase;

    /** @return list<array{string}> */
    public static function seeders(): array
    {
        return [
            'reference estate' => ['panel:seed-reference'],
            'demo data' => ['panel:seed-demo'],
        ];
    }

    #[DataProvider('seeders')]
    public function test_it_refuses_to_run_in_production(string $command): void
    {
        app()->detectEnvironment(static fn (): string => 'production');

        $code = Artisan::call($command);

        $this->assertSame(
            1,
            $code,
            "{$command} ran in production. It creates accounts with a published password.",
        );

        $this->assertStringContainsString('refuses', Artisan::output());
    }

    #[DataProvider('seeders')]
    public function test_it_also_refuses_in_staging(string $command): void
    {
        // Staging is the one people forget: not production, but a real server
        // with real DNS in front of it.
        app()->detectEnvironment(static fn (): string => 'staging');

        $this->assertSame(1, Artisan::call($command), "{$command} ran in staging.");
    }
}
