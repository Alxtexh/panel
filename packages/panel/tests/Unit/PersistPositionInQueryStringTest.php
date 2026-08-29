<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Schema\Tab;
use Alxtexh\Panel\Schema\Tabs;
use Alxtexh\Panel\Schema\Step;
use Alxtexh\Panel\Schema\Wizard;
use Alxtexh\Panel\Tests\TestCase;

/**
 * `Tabs`/`Wizard` remembering position in the URL - `?tab=`/`?step=` by
 * default, a caller-chosen key otherwise, off unless declared.
 *
 * PHP'S OWN PART OF THIS IS JUST THE KEY NAME. Reading and writing the query
 * parameter happens client-side (`history.replaceState`, no request) - what
 * this covers is that the key reaches `toSchema()` correctly, defaults to
 * null (never persisted unless asked), and defaults to the right name when
 * asked without one.
 */
final class PersistPositionInQueryStringTest extends TestCase
{
    public function test_tabs_do_not_persist_by_default(): void
    {
        $schema = Tabs::make()->tabs([Tab::make('One')->schema([])])->toSchema();

        $this->assertNull($schema['persistInQueryString']);
    }

    public function test_tabs_persist_under_a_default_key(): void
    {
        $schema = Tabs::make()
            ->tabs([Tab::make('One')->schema([])])
            ->persistInQueryString()
            ->toSchema();

        $this->assertSame('tab', $schema['persistInQueryString']);
    }

    public function test_tabs_persist_under_a_chosen_key(): void
    {
        $schema = Tabs::make()
            ->tabs([Tab::make('One')->schema([])])
            ->persistInQueryString('invoice-tab')
            ->toSchema();

        $this->assertSame('invoice-tab', $schema['persistInQueryString']);
    }

    public function test_wizards_do_not_persist_by_default(): void
    {
        $schema = Wizard::make()->steps([Step::make('One')->schema([])])->toSchema();

        $this->assertNull($schema['persistInQueryString']);
    }

    public function test_wizards_persist_under_a_default_key(): void
    {
        $schema = Wizard::make()
            ->steps([Step::make('One')->schema([TextField::make('name')])])
            ->persistInQueryString()
            ->toSchema();

        $this->assertSame('step', $schema['persistInQueryString']);
    }

    public function test_wizards_persist_under_a_chosen_key(): void
    {
        $schema = Wizard::make()
            ->steps([Step::make('One')->schema([TextField::make('name')])])
            ->persistInQueryString('onboarding-step')
            ->toSchema();

        $this->assertSame('onboarding-step', $schema['persistInQueryString']);
    }

    /**
     * TWO PERSISTED TABS ON ONE SCHEMA NEED TWO DIFFERENT KEYS - see
     * `Tabs::persistInQueryString()`'s own note on why this is not
     * auto-derived. This is what makes that a working convention rather
     * than a footgun: nothing stops a caller reusing a key, but nothing
     * silently shares one either.
     */
    public function test_two_persisted_tabs_keep_independent_keys(): void
    {
        $first = Tabs::make()->tabs([Tab::make('A')->schema([])])->persistInQueryString('left')->toSchema();
        $second = Tabs::make()->tabs([Tab::make('B')->schema([])])->persistInQueryString('right')->toSchema();

        $this->assertSame('left', $first['persistInQueryString']);
        $this->assertSame('right', $second['persistInQueryString']);
    }
}
