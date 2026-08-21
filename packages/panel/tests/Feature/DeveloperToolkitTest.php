<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Forms\Fields\BarcodeField;
use Alxtexh\Panel\Forms\Fields\DiffField;
use Alxtexh\Panel\Forms\Fields\MapField;
use Alxtexh\Panel\Forms\Fields\QrCodeField;
use Alxtexh\Panel\Support\OpenApiSpec;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\CalendarWidget;
use Alxtexh\Panel\Widgets\MapWidget;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class DeveloperToolkitTest extends TestCase
{
    use RefreshDatabase;

    public function test_map_field_schema_exposes_geopoint_keys(): void
    {
        $schema = MapField::make('location')
            ->defaultCenter(-1.286389, 36.817223)
            ->zoom(11)
            ->latLng('latitude', 'longitude')
            ->height(320)
            ->toSchema();

        $this->assertSame('map', $schema['type']);
        $this->assertSame('latitude', $schema['latKey']);
        $this->assertSame('longitude', $schema['lngKey']);
        $this->assertSame(11, $schema['zoom']);
        $this->assertSame(320, $schema['height']);
        $this->assertSame(-1.286389, $schema['defaultCenter']['lat']);
    }

    public function test_map_widget_builds_a_map_chart(): void
    {
        $chart = MapWidget::make('coverage', 'Coverage')
            ->center(-1.29, 36.82)
            ->zoom(10)
            ->markers(static fn (): array => [
                ['lat' => -1.29, 'lng' => 36.82, 'label' => 'HQ'],
            ])
            ->toChartWidget();

        $declaration = $chart->toArray();
        $this->assertSame('map', $declaration['type']);

        $resolved = $chart->resolve(
            \Alxtexh\Panel\Widgets\Period::Days30,
            'tenant-1',
        );

        $this->assertFalse($resolved['error']);
        $this->assertSame('HQ', $resolved['markers'][0]['label']);
        $this->assertSame(10, $resolved['zoom']);
    }

    public function test_calendar_widget_builds_a_calendar_chart(): void
    {
        $chart = CalendarWidget::make('bookings', 'Bookings')
            ->events(static fn (): array => [
                ['date' => '2026-08-21', 'label' => 'Install'],
            ])
            ->toChartWidget();

        $this->assertSame('calendar', $chart->toArray()['type']);

        $resolved = $chart->resolve(
            \Alxtexh\Panel\Widgets\Period::Days30,
            'tenant-1',
        );

        $this->assertSame('Install', $resolved['events'][0]['label']);
    }

    public function test_qr_and_diff_field_schemas(): void
    {
        $qr = QrCodeField::make('ticket')->size(180)->from('public_url')->toSchema();
        $this->assertSame('qrcode', $qr['type']);
        $this->assertSame(180, $qr['size']);
        $this->assertSame('public_url', $qr['from']);

        $diff = DiffField::make('patch')->original('before')->modified('after')->rows(8)->toSchema();
        $this->assertSame('diff', $diff['type']);
        $this->assertSame('before', $diff['originalKey']);
        $this->assertSame('after', $diff['modifiedKey']);
    }

    public function test_barcode_field_schema(): void
    {
        $schema = BarcodeField::make('sku')
            ->format('EAN13')
            ->height(96)
            ->barWidth(2)
            ->from('ean')
            ->hideValue()
            ->toSchema();

        $this->assertSame('barcode', $schema['type']);
        $this->assertSame('EAN13', $schema['format']);
        $this->assertSame(96, $schema['height']);
        $this->assertSame(2, $schema['width']);
        $this->assertFalse($schema['displayValue']);
        $this->assertSame('ean', $schema['from']);
    }

    public function test_openapi_documents_bulk_relations_and_bearer_auth(): void
    {
        $doc = OpenApiSpec::document('Toolkit');

        $this->assertArrayHasKey('/api/v1', $doc['paths']);
        $this->assertArrayHasKey('bearer', $doc['components']['securitySchemes']);

        $this->assertArrayHasKey('/articles', $doc['paths']);
        $this->assertArrayHasKey('/articles/bulk', $doc['paths']);
        $this->assertArrayHasKey('/articles/{id}/relations/comments', $doc['paths']);
        $this->assertSame(
            [['bearer' => []]],
            $doc['paths']['/articles']['get']['security'] ?? null,
        );
    }
}
