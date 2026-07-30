<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Plan;
use App\Panel\Clusters\NetworkCluster;
use PanelKit\Panel\Actions\BulkAction;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\BooleanFilter;
use PanelKit\Panel\Tables\Table;

final class PlanResource extends Resource
{
    protected static string $model = Plan::class;

    protected static string $icon = 'package';

    protected static ?string $purpose = 'The catalogue of plans subscribers can be sold.';

    // A cluster member, not a group entry - the sidebar says "Network" once
    // and this screen is reached from its sub-navigation. Roadmap 4.1.
    protected static ?string $cluster = NetworkCluster::class;

    protected static ?int $sort = 30;

    public static function table(Table $table): Table
    {
        return $table
            /*
             * A catalogue has a chosen order - the sequence a sales page lists
             * packages in - which follows no property of the rows and so cannot
             * be sorted into existence. Declaring this also makes `position`
             * the default sort, because dragging while ordered by name moves a
             * row somewhere you cannot see the effect of.
             */
            ->reorderable('position')
            ->columns([
                TextColumn::make('name')->from('plans.name')->sortable()->searchable()->locked(),
                TextColumn::make('speed_mbps')->from('plans.speed_mbps')->label('Speed')->sortable()->suffix('Mbps'),
                /*
                 * NO FOOTER TOTALS HERE, deliberately.
                 *
                 * This table is a CATALOGUE - a list of what may be sold - and
                 * the arithmetic over it is meaningless. "Total: KES 2,800,000"
                 * is the sum of ten price tags, which is not revenue, not
                 * outstanding, not anything anybody would act on. The average
                 * speed of the plans on offer is the same kind of number: real
                 * arithmetic over rows that are not quantities.
                 *
                 * `Summarizer` stays in the framework because a footer total is
                 * genuinely right for rows that ARE quantities - invoices,
                 * payments, usage. Putting one here just because the column
                 * held a number was the mistake.
                 */
                // Displays the computed `price`, orders by `price_cents` -
                // sorting the formatted string puts 12,000.00 before 900.00.
                TextColumn::make('price')->sortable()->sortAs('price_cents')->prefix('KES'),
                // A switch, so retiring a plan is one click from the list.
                /*
                 * A BADGE, NOT A SWITCH.
                 *
                 * An inline toggle turns a row into a control: one mis-click
                 * while scanning a list retires a plan customers are being sold,
                 * with no confirmation and nothing to undo it with. It also
                 * makes the state ambiguous - a switch invites you to change it,
                 * so the column stops reading as "this is how things are" and
                 * starts reading as "set this".
                 *
                 * Retiring a plan is a deliberate act, so it goes through the
                 * selection and the bulk menu, where it is chosen rather than
                 * brushed against.
                 */
                BadgeColumn::make('is_active')->from('plans.is_active')->label('Status')
                    ->labels([1 => 'Available', 0 => 'Retired'])
                    ->colors([1 => 'success', 0 => 'muted'])
                    ->defaultColor('muted'),
                DateColumn::make('created_at')->from('plans.created_at')->sortable()->muted(),
            ])
            ->filters([
                // Three states: unset, true, false. `false` is an applied value.
                BooleanFilter::make('active')->label('Availability')->column('plans.is_active')
                    ->labels('Active', 'Inactive'),
            ])
            ->keyColumn('plans.id')
            // `price` is computed, so the underlying columns must be selected
            // explicitly - the column list alone would not include them.
            ->alsoSelect(['plans.id', 'plans.price_cents', 'plans.is_active'])
            ->transform(function (array $row): array {
                $row['price'] = number_format((int) $row['price_cents'] / 100, 2);
                $row['is_active'] = (bool) $row['is_active'];

                return $row;
            })
            /*
             * `position`, not `created_at`.
             *
             * `reorderable()` already sets this, and it is repeated here so the
             * pairing is visible: dragging only makes sense while the table is
             * ordered by the column being dragged, so a resource that declares
             * one and then overrides the other has silently disabled its own
             * handles.
             */
            /*
             * Retiring a plan lives HERE, not in a switch on the row.
             *
             * The selection makes it deliberate: you choose the rows, then
             * choose the act, and the confirmation names what is about to
             * happen. A toggle in the list is the same change with none of
             * those steps.
             */
            ->bulkActions([
                BulkAction::make('activate', 'Make available')
                    ->icon('check')
                    ->authorize('update')
                    ->mutate(['is_active' => true]),

                BulkAction::make('retire', 'Retire')
                    ->icon('archive')
                    ->authorize('update')
                    ->mutate(['is_active' => false])
                    ->requiresConfirmation('Retire these plans? They stay on existing subscriptions but cannot be sold.'),
            ])
            ->defaultSort('position', 'asc');
    }
}
