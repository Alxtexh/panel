<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Resources\Resource;
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

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable()->searchable(),
                TextColumn::make('status')->from('posts.status')->sortable(),
            ])
            ->keyColumn('posts.id');
    }
}
