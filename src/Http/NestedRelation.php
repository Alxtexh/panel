<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http;

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Nested HasMany vs BelongsToMany, one choke point.
 *
 * HasMany stamps a foreign key from the URL. BelongsToMany never writes that
 * column: attach and detach go through the parent's relationship, and a
 * mismatched pairing is a 404, the same as a missing parent. Another tenant's
 * related id is indistinguishable from a missing one because the related
 * model's global scopes still apply.
 *
 * @phpstan-type resourceClass class-string<\Alxtexh\Panel\Resources\Resource>
 */
final class NestedRelation
{
    /** @param  resourceClass  $class */
    public static function belongsToMany(string $class): bool
    {
        return self::relationOn($class) instanceof BelongsToMany;
    }

    /**
     * The parent's BelongsToMany for this nested resource, unbound.
     *
     * Instantiates an empty parent model so definition() can ask the shape
     * without querying. Not a row lookup.
     *
     * @param  resourceClass  $class
     */
    public static function relationOn(string $class): ?BelongsToMany
    {
        $parentClass = $class::parentResource();
        $name = $class::relationship();

        if ($parentClass === null || $name === null || $name === '') {
            return null;
        }

        $model = $parentClass::model();
        $instance = new $model;

        if (! method_exists($instance, $name)) {
            return null;
        }

        $relation = $instance->{$name}();

        return $relation instanceof BelongsToMany ? $relation : null;
    }

    /**
     * @param  resourceClass  $class
     */
    public static function of(Model $parent, string $class): BelongsToMany
    {
        $name = $class::relationship();

        if ($name === null || $name === '' || ! method_exists($parent, $name)) {
            throw new NotFoundHttpException('This resource is not a BelongsToMany nested relation.');
        }

        $relation = $parent->{$name}();

        if (! $relation instanceof BelongsToMany) {
            throw new NotFoundHttpException('This resource is not a BelongsToMany nested relation.');
        }

        return $relation;
    }

    /**
     * Narrow a child list (or a find) to rows that belong to this parent.
     *
     * @param  resourceClass  $class
     */
    public static function constrain(EloquentBuilder $query, string $class, Model $parent): void
    {
        if (self::belongsToMany($class)) {
            $relation = self::of($parent, $class);
            $related = $relation->getRelated();

            $query->whereIn(
                $related->getQualifiedKeyName(),
                $relation->select($related->getQualifiedKeyName()),
            );

            return;
        }

        $query->where(
            $query->getModel()->getTable().'.'.$class::parentColumn(),
            $parent->getKey(),
        );
    }

    /**
     * One child row that belongs to this parent, or 404.
     *
     * @param  resourceClass  $class
     */
    public static function findOrFail(string $class, Model $parent, string $id): Model
    {
        if (self::belongsToMany($class)) {
            return self::of($parent, $class)->whereKey($id)->firstOrFail();
        }

        return $class::model()::query()
            ->where($class::parentColumn(), $parent->getKey())
            ->findOrFail($id);
    }

    /**
     * Stamp HasMany from the URL, or attach a BelongsToMany after insert.
     *
     * @param  resourceClass  $class
     */
    public static function associateNew(string $class, Model $parent, Model $record): void
    {
        if (self::belongsToMany($class)) {
            self::of($parent, $class)->syncWithoutDetaching([$record->getKey()]);

            return;
        }

        $record->setAttribute($class::parentColumn(), $parent->getKey());
    }

    /**
     * Re-stamp HasMany on update. BelongsToMany membership is the pivot, not a column.
     *
     * @param  resourceClass  $class
     */
    public static function restamp(string $class, Model $parent, Model $record): void
    {
        if (self::belongsToMany($class)) {
            return;
        }

        $record->setAttribute($class::parentColumn(), $parent->getKey());
    }

    /**
     * Related rows that are not already attached, tenant-scoped.
     *
     * @param  resourceClass  $class
     * @return list<array{value: int|string, label: string}>
     */
    public static function attachableOptions(Model $parent, string $class, int $limit = 50): array
    {
        $relation = self::of($parent, $class);
        $related = $relation->getRelated();
        $attachedIds = $relation->pluck($related->getKeyName());

        $rows = $class::model()::query()
            ->whereNotIn($related->getKeyName(), $attachedIds)
            ->orderBy($related->getKeyName())
            ->limit($limit)
            ->get();

        $options = [];

        foreach ($rows as $row) {
            $options[] = [
                'value' => $row->getKey(),
                'label' => (string) ($row->name ?? $row->title ?? ('#'.$row->getKey())),
            ];
        }

        return $options;
    }

    /**
     * @param  resourceClass  $class
     * @param  list<int|string>  $ids
     * @param  array<string, mixed>  $pivot  Extra pivot-column values, the same for every id in this call.
     */
    public static function attach(string $class, Model $parent, array $ids, array $pivot = []): void
    {
        $ids = array_values(array_unique(array_map(static fn (mixed $id): string => (string) $id, $ids)));

        abort_if($ids === [], 404);

        $allowed = $class::model()::query()
            ->whereIn((new ($class::model()))->getKeyName(), $ids)
            ->pluck((new ($class::model()))->getKeyName())
            ->map(static fn (mixed $id): string => (string) $id)
            ->all();

        sort($ids);
        $found = $allowed;
        sort($found);

        abort_unless($found === $ids, 404, 'One or more records cannot be attached.');

        $already = self::of($parent, $class)
            ->whereKey($ids)
            ->pluck((new ($class::model()))->getKeyName())
            ->map(static fn (mixed $id): string => (string) $id)
            ->all();

        abort_if($already !== [], 404, 'One or more records are already attached.');

        self::of($parent, $class)->attach($ids, $pivot);
    }
}
