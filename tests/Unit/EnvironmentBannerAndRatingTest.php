<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\RatingField;
use Alxtexh\Panel\Support\EnvironmentBanner;
use Alxtexh\Panel\Tables\Columns\RatingColumn;
use Alxtexh\Panel\Tests\TestCase;

final class EnvironmentBannerAndRatingTest extends TestCase
{
    public function test_environment_banner_is_always_null(): void
    {
        config(['panel.environment_banner.enabled' => true]);
        $previous = $this->app['env'];
        $this->app['env'] = 'local';

        try {
            $this->assertNull(EnvironmentBanner::for());
        } finally {
            $this->app['env'] = $previous;
        }
    }

    public function test_environment_banner_stays_null_in_production(): void
    {
        config(['panel.environment_banner.enabled' => null]);
        $previous = $this->app['env'];
        $this->app['env'] = 'production';

        try {
            $this->assertNull(EnvironmentBanner::for());
        } finally {
            $this->app['env'] = $previous;
        }
    }

    public function test_rating_field_schema_and_rules(): void
    {
        $field = RatingField::make('score')->max(5);
        $schema = $field->toSchema();

        $this->assertSame('rating', $schema['type']);
        $this->assertSame(5, $schema['max']);
        $this->assertContains('integer', $field->rules());
    }

    public function test_rating_column_schema(): void
    {
        $schema = RatingColumn::make('score')->max(10)->toSchema();

        $this->assertSame('rating', $schema['type']);
        $this->assertSame(10, $schema['max']);
    }
}
