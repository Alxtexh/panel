<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Gated;

use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;

/**
 * Same model as PostResource, different key, gated by the campaigns module.
 * Not discovered: tests register it only when they need a \$module resource.
 */
final class GatedPostResource extends Resource
{
    protected static string $model = Post::class;

    protected static string $panel = 'admin';

    protected static ?string $module = 'campaigns';

    public static function key(): string
    {
        return 'gated-posts';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('posts.title'),
            ])
            ->keyColumn('posts.id');
    }
}
