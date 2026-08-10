<?php

declare(strict_types=1);

namespace App\Panel\Singulars;

use Alxtexh\Panel\Forms\Fields\NumberField;
use Alxtexh\Panel\Forms\Fields\SelectField;
use Alxtexh\Panel\Forms\Fields\ToggleField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Resources\SingularResource;
use Alxtexh\Panel\Schema\Section;
use Alxtexh\Panel\Support\TenantContext;

/**
 * How this organisation bills - roadmap 4.3's demonstration.
 *
 * ONE RECORD BY NATURE: an ISP has one VAT rate, one currency and one due
 * window, so a list would be a list of one with a create button for a second
 * row nobody should make. The state is a JSON column on the organisation's
 * own tenant row - which is also what makes it honestly tenant-scoped, with
 * nothing new to isolate.
 */
final class BillingSettingsResource extends SingularResource
{
    protected static string $icon = 'sliders';

    protected static ?string $group = 'Configuration';

    protected static ?string $purpose = 'The currency, tax and due window every invoice is written with.';

    /** @return array{currency: string, vat_rate: float|int, due_days: int, remind: bool} */
    public static function defaults(): array
    {
        return [
            'currency' => 'KES',
            'vat_rate' => 16,
            'due_days' => 14,
            'remind' => true,
        ];
    }

    public static function ability(): ?string
    {
        return 'manage_billing';
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            Section::make('Invoicing')->columns(2)->schema([
                SelectField::make('currency')->required()->options([
                    'KES' => 'Kenyan shilling (KES)',
                    'USD' => 'US dollar (USD)',
                    'EUR' => 'Euro (EUR)',
                ]),

                NumberField::make('vat_rate')->label('VAT rate (%)')->required()
                    ->min(0)->max(100)
                    ->help('Applied to every invoice line. 0 turns tax off.'),

                NumberField::make('due_days')->label('Due after (days)')->required()
                    ->min(0)->max(90)
                    ->help('How long a subscriber has to pay before an invoice is overdue.'),

                ToggleField::make('remind')->label('Send payment reminders')
                    ->help('The expiry reminders the panel already schedules honour this.'),
            ]),
        ]);
    }

    public static function values(): array
    {
        $stored = (array) (app(TenantContext::class)->tenant()?->billing ?? []);

        return [...self::defaults(), ...$stored];
    }

    public static function save(array $validated): void
    {
        $tenant = app(TenantContext::class)->tenant();

        abort_if($tenant === null, 403);

        $tenant->forceFill(['billing' => $validated])->save();
    }
}
