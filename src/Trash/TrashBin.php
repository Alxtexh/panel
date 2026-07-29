<?php

declare(strict_types=1);

namespace PanelKit\Panel\Trash;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;

/**
 * Everything this person has deleted, across every resource, in one place.
 *
 * IT EXISTS BECAUSE A DELETE HAD NOWHERE TO GO. Soft deletes, restore and
 * force-delete were all built and all reachable only by adding a `?trashed=`
 * option to one table's filter - so a deleted subscriber sat in the same list as
 * the live ones under a filter nobody opens, and the endpoint that could bring
 * it back had no button anywhere in the panel. The mechanism worked; there was
 * no way to use it.
 *
 * DELETED RECORDS LEAVE THE LIST ENTIRELY. That is the other half. A table that
 * can show deleted rows is a table where every count, every filter and every
 * export has to be read twice - "is this 43 live, or 43 including the ones
 * somebody removed?" - and the answer depends on a control most people never
 * touch. Gone means gone from the list, and here instead.
 *
 * EVERY QUERY GOES THROUGH THE MODEL, so the tenant scope applies exactly as it
 * does everywhere else. `onlyTrashed()` lifts the soft-delete scope and nothing
 * else: another organisation's deleted records are as unreachable as their live
 * ones, which matters more here than usual because a trash bin is where somebody
 * looks for something they cannot otherwise find.
 *
 * IT IS BOUNDED PER RESOURCE. A bin holding 200,000 rows is not a screen, and
 * loading it to render the first twenty is how a maintenance page becomes the
 * slowest one in the panel. The count is exact; the list is a page of it.
 */
final class TrashBin
{
    /** How many rows of each resource the screen shows. */
    private const PER_RESOURCE = 25;

    /**
     * The trash, grouped by resource.
     *
     * @return list<array{
     *     key: string, label: string, icon: string, total: int,
     *     records: list<array{id: int|string, title: string, deletedAt: string, purgesAt: string, canRestore: bool, canForceDelete: bool}>
     * }>
     */
    public function groups(?string $panelId = null): array
    {
        $groups = [];

        foreach ($this->resources($panelId) as $key => $class) {
            /*
             * THE PERMISSION GATE IS THE RESOURCE'S OWN. A trash bin that showed
             * records from a resource somebody cannot list would be a way to
             * read - names, ids, when they were removed - through the back door
             * of a maintenance screen.
             */
            if (! $class::can('viewAny')) {
                continue;
            }

            $model = $class::model();

            $query = $model::query()->onlyTrashed();

            $total = (clone $query)->count();

            if ($total === 0) {
                continue;
            }

            $records = $query
                // Most recently deleted first: the thing somebody is looking for
                // is almost always the thing they just removed.
                ->orderByDesc($this->deletedColumn($model))
                ->limit(self::PER_RESOURCE)
                ->get();

            $groups[] = [
                'key' => $key,
                'label' => $class::pluralLabel(),
                'icon' => $class::icon(),
                'total' => $total,
                'records' => array_map(
                    fn (Model $record): array => $this->describe($class, $record),
                    $records->all(),
                ),
            ];
        }

        return $groups;
    }

    /**
     * The Trash entry for a panel's navigation, or null when it has no bin.
     *
     * THE PACKAGE ADVERTISES IT, not the application. The bin is a panel
     * feature: `make:panel` routes it, so a generated portal would otherwise
     * have a working Trash screen that nothing links to - the same
     * disappearing-page problem that put backups and the assistant behind
     * nothing at all. A portal gets the entry because it has the route, not
     * because somebody remembered to add it to a list.
     *
     * NULL WHERE NOTHING SOFT-DELETES, because a bin that can never contain
     * anything is a menu entry that teaches somebody the panel keeps deleted
     * records when it does not.
     *
     * @return array{title: string, href: string, icon: string, group: string}|null
     */
    public function navigationEntry(?string $panelId = null): ?array
    {
        $manager = app(PanelManager::class);
        $panel = $panelId === null ? $manager->currentPanel() : $manager->panel($panelId);

        if ($this->resources($panel?->id) === []) {
            return null;
        }

        $prefix = rtrim('/'.trim((string) ($panel?->getPath() ?? ''), '/'), '/');

        return [
            'title' => 'Trash',
            'href' => $prefix.'/trash',
            'icon' => 'trash',
            /*
             * BESIDE THE RESOURCES rather than under a heading of its own. It is
             * about the records those screens administer, and "where did the
             * thing I deleted go" is asked in a hurry - a bin two levels into a
             * menu is one nobody finds when they need it.
             */
            'group' => 'Platform',
        ];
    }

    /**
     * Resources whose records can be in the bin at all.
     *
     * A RESOURCE WITHOUT SOFT DELETES IS NOT AN ERROR AND NOT SHOWN. Deleting
     * there is immediate and always was; listing an empty section for it would
     * suggest a recovery that does not exist.
     *
     * @return array<string, class-string<Resource>>
     */
    public function resources(?string $panelId = null): array
    {
        $manager = app(PanelManager::class);

        $panelId ??= $manager->currentPanel()?->id;

        $resources = $panelId === null ? $manager->resources() : $manager->resourcesFor($panelId);

        return array_filter(
            $resources,
            static function (string $class): bool {
                if (! $class::isEnabled()) {
                    return false;
                }

                return in_array(
                    SoftDeletes::class,
                    class_uses_recursive($class::model()),
                    true,
                );
            },
        );
    }

    /**
     * When a deleted record stops being recoverable.
     *
     * A REAL DATE RATHER THAN "SOON". The whole promise of a bin is that there
     * is time to change your mind, and a promise without a deadline is one
     * nobody can plan around - somebody has to be able to look at this and know
     * whether it will still be here on Monday.
     */
    public function purgesAt(Model $record): \Illuminate\Support\Carbon
    {
        $deleted = $record->{$record->getDeletedAtColumn()};

        return \Illuminate\Support\Carbon::parse($deleted)->addDays(self::retentionDays());
    }

    /**
     * How long a deleted record is kept.
     *
     * AT LEAST ONE DAY, whatever config says. A retention of zero would purge
     * records in the same sweep that put them here, which is not a bin - it is
     * a delayed hard delete with a screen in front of it.
     */
    public static function retentionDays(): int
    {
        return max(1, (int) config('panel.trash.retention_days', 7));
    }

    /** @param  class-string<Resource>  $class */
    private function describe(string $class, Model $record): array
    {
        return [
            'id' => $record->getKey(),
            'title' => $this->titleFor($class, $record),
            'deletedAt' => (string) $record->{$record->getDeletedAtColumn()},
            'purgesAt' => $this->purgesAt($record)->toIso8601String(),
            /*
             * ASKED PER RECORD, not per resource. A policy may allow restoring
             * one's own records and not somebody else's, and a button that is
             * rendered and then refused is worse than one that was never there.
             */
            'canRestore' => $class::can('restore', $record),
            'canForceDelete' => $class::can('forceDelete', $record),
        ];
    }

    /**
     * Something to call the record.
     *
     * THE FIRST COLUMN OF ITS OWN TABLE, because that is what the resource
     * already decided identifies a row - it is the column somebody reads down
     * when scanning the list. Falling back to the key means a record with an
     * empty first column is still actionable rather than a blank line.
     *
     * @param  class-string<Resource>  $class
     */
    private function titleFor(string $class, Model $record): string
    {
        foreach ($class::definition()->getColumns() as $column) {
            $value = $record->getAttribute($column->key);

            if (is_scalar($value) && (string) $value !== '') {
                return (string) $value;
            }
        }

        return '#'.$record->getKey();
    }

    /** @param  class-string<Model>  $model */
    private function deletedColumn(string $model): string
    {
        return (new $model)->getDeletedAtColumn();
    }
}
