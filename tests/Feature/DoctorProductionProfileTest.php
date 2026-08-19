<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

final class DoctorProductionProfileTest extends TestCase
{
    public function test_production_profile_reports_missing_storage_link(): void
    {
        Artisan::call('panel:doctor', ['--profile' => 'production', '--json' => true]);

        $output = Artisan::output();
        $decoded = json_decode($output, true);

        $this->assertIsArray($decoded);
        $this->assertNotEmpty($decoded);

        $this->assertArrayHasKey('title', $decoded[0]);
        $this->assertArrayHasKey('detail', $decoded[0]);
        $this->assertArrayHasKey('level', $decoded[0]);
    }
}

