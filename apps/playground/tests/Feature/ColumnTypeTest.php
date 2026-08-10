<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Tables\Columns\CheckboxColumn;
use Alxtexh\Panel\Tables\Columns\ColourColumn;
use Tests\TestCase;

/**
 * Roadmap 4.6: a colour you can SEE, and a boolean rendered as state.
 *
 * BOTH ARE ABOUT WHAT A COLUMN IS FOR. `#7C3AED` in a monospace cell is a
 * value a person can read and cannot recognise, so a table of brand colours
 * became a list of codes that all look alike. And a toggle in a row is a
 * CONTROL - one mis-click while scanning changes a record - where the same
 * fact rendered as a checkbox is state you scan down a column with nothing
 * to press.
 */
final class ColumnTypeTest extends TestCase
{
    use RefreshDatabase;

    /* ------------------------------------------------------------- colour */

    public function test_a_colour_column_declares_its_type_and_shows_its_value(): void
    {
        $column = ColourColumn::make('brand')->toArray();

        $this->assertSame('colour', $column['type']);
        $this->assertTrue($column['showValue'], 'The code stays beside the swatch by default.');
    }

    /** Decoration-only columns drop the code; forty of them is noise. */
    public function test_a_colour_column_can_be_swatch_only(): void
    {
        $this->assertFalse(ColourColumn::make('accent')->swatchOnly()->toArray()['showValue']);
    }

    /* ----------------------------------------------------------- checkbox */

    public function test_a_checkbox_column_declares_its_type_and_its_labels(): void
    {
        $column = CheckboxColumn::make('verified')
            ->labels('Email verified', 'Email not verified')
            ->toArray();

        $this->assertSame('checkbox', $column['type']);
        $this->assertSame('Email verified', $column['trueLabel']);
        $this->assertSame('Email not verified', $column['falseLabel']);
    }

    /**
     * A checkbox column is NOT editable, and that is the distinction from
     * `ToggleColumn` rather than a styling difference - it must not arrive
     * carrying the flag that makes a cell writable.
     */
    public function test_a_checkbox_column_is_not_editable(): void
    {
        $column = CheckboxColumn::make('verified')->toArray();

        $this->assertArrayNotHasKey('editable', $column);
    }

    /* ---------------------------------------------------- through a screen */

    /** The users list ships one, so the whole path is exercised end to end. */
    public function test_the_users_screen_serves_a_checkbox_column(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $columns = $this->actingAs($user)->get('/users')->assertOk()
            ->viewData('page')['props']['schema']['table']['columns'];

        $verified = collect($columns)->firstWhere('key', 'email_verified_at');

        $this->assertSame('checkbox', $verified['type']);
        $this->assertSame('Email verified', $verified['trueLabel']);
    }
}
