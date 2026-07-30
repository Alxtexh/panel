<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\CustomFields\CustomFieldFactory;
use PanelKit\Panel\CustomFields\CustomFieldStorage;
use PanelKit\Panel\Forms\Fields\KeyValueField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Fields\ToggleField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Table;

/**
 * Where an installation adds a field to Clients, Routers or Plans without a
 * migration - roadmap 5.1.
 *
 * DOGFOODS THE GENERIC RESOURCE SYSTEM ON ITSELF: this screen is a `Resource`
 * over the `CustomField` model exactly like `PlanResource` is one over
 * `Plan`, which is what proves the schema-driven form/table layer is general
 * rather than built to fit six known screens. `Resource::customFields()`
 * reads what gets saved here straight back out through `CustomFieldFactory`.
 *
 * ONE ROW PER DEFINITION, SORTED BY DRAG, exactly like `PlanResource`'s
 * catalogue - a field's position in its resource's form is the same kind of
 * chosen order a plan's position in a price list is.
 */
final class CustomFieldResource extends Resource
{
    protected static string $model = CustomField::class;

    protected static string $icon = 'sliders';

    protected static ?string $purpose = 'Add fields to Clients, Routers or Plans without a migration.';

    protected static ?string $group = 'Configuration';

    protected static ?int $sort = 90;

    public static function form(Form $form): Form
    {
        return $form->schema([
            Section::make('Definition')->columns(2)->schema([
                SelectField::make('resource')->required()
                    ->options(array_combine(
                        CustomFieldStorage::resources(),
                        array_map(ucfirst(...), CustomFieldStorage::resources()),
                    ))
                    ->help('Which list and form this field appears on.'),

                SelectField::make('type')->required()
                    ->options(array_combine(
                        CustomFieldFactory::types(),
                        array_map(ucfirst(...), CustomFieldFactory::types()),
                    )),

                TextField::make('key')->required()->max(64)
                    ->help('Letters, numbers and underscores. Cannot change once records use it.'),

                TextField::make('label')->required()->max(80)
                    ->help('What the operator sees on the form and the column heading.'),

                ToggleField::make('required')->label('Required'),
            ]),

            // Only a `select` field has choices to name - see
            // `CustomFieldFactory::field()`'s own note on why the other five
            // types need nothing more than a key and a label.
            Section::make('Choices')->columns(1)->visibleWhen('type', 'select')
                ->description('Shown as the dropdown\'s options - the stored value on the left, what the operator sees on the right.')
                ->schema([
                    KeyValueField::make('options')
                        ->label('Choices')
                        ->labels('Value', 'Label')
                        ->maxPairs(30),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->reorderable('sort')
            ->columns([
                BadgeColumn::make('resource')->from('panel_custom_fields.resource')->sortable()
                    ->labels(array_combine(CustomFieldStorage::resources(), array_map(ucfirst(...), CustomFieldStorage::resources())))
                    ->colors(array_fill_keys(CustomFieldStorage::resources(), 'neutral')),
                TextColumn::make('label')->from('panel_custom_fields.label')->sortable()->searchable()->locked(),
                TextColumn::make('key')->from('panel_custom_fields.key')->mono()->muted(),
                BadgeColumn::make('type')->from('panel_custom_fields.type')
                    ->labels(array_combine(CustomFieldFactory::types(), array_map(ucfirst(...), CustomFieldFactory::types())))
                    ->colors(array_fill_keys(CustomFieldFactory::types(), 'info')),
                BadgeColumn::make('required')->from('panel_custom_fields.required')
                    ->labels([1 => 'Required', 0 => 'Optional'])
                    ->colors([1 => 'warning', 0 => 'muted'])
                    ->defaultColor('muted'),
            ])
            ->filters([
                SelectFilter::make('resource')->column('panel_custom_fields.resource')
                    ->options(CustomFieldStorage::resources()),
            ])
            ->keyColumn('panel_custom_fields.id')
            ->alsoSelect(['panel_custom_fields.id'])
            ->defaultSort('sort', 'asc');
    }
}
