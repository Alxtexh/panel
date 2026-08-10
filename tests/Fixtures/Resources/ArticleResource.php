<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;

/** The tenant-scoped counterpart of `PostResource`. */
final class ArticleResource extends Resource
{
    protected static string $model = Article::class;

    protected static string $panel = 'admin';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('articles.title')->sortable()->searchable(),
                TextColumn::make('status')->from('articles.status')->sortable(),
                DateColumn::make('created_at')->from('articles.created_at')->sortable()->withTime(),
            ])
            ->keyColumn('articles.id');
    }
}
