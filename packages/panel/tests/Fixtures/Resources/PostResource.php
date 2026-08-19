<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;

/**
 * A resource over a model that means nothing to anybody.
 *
 * WHAT IT IS FOR: asserting the framework's behaviour without borrowing an
 * application's domain to do it. `Resource::documented()`, key uniqueness,
 * navigation visibility and the table contract are all properties of THIS
 * class, and testing them through the reference app's `ClientResource` meant
 * every such test also depended on subscribers, plans, routers and a tenant
 * scope that denies when no tenant resolves.
 */
final class PostResource extends Resource
{
    protected static string $model = Post::class;

    protected static string $panel = 'admin';

    public static function searchWeight(): float
    {
        return 2;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable()->searchable(),
                TextColumn::make('status')->from('posts.status')->sortable(),
                /*
                 * SORTABLE BECAUSE IT IS THE DEFAULT SORT. `ListQuery` refuses
                 * a default that is not in the sortable allowlist - loudly,
                 * which is right: a silently ignored default sort is a list
                 * whose order nobody can explain.
                 */
                DateColumn::make('created_at')->from('posts.created_at')->sortable()->withTime(),
            ])
            ->keyColumn('posts.id');
    }
}
