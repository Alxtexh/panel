<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Second;

use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;

/**
 * The SAME MODEL as `ArticleResource`, mounted in a DIFFERENT panel.
 *
 * That is the interesting configuration rather than a contrivance: two portals
 * commonly show the same table to different audiences. It is also where the
 * separation property is testable - `reports` belongs to the second panel, so
 * requesting it from the first must not resolve, and vice versa. A shared
 * `{resource}` pattern across panels would let one portal's URL reach the
 * other's screen, which is the leak the panel split exists to prevent.
 */
final class ReportResource extends Resource
{
    protected static string $model = Article::class;

    protected static string $panel = 'second';

    public static function key(): string
    {
        return 'reports';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('articles.title')->sortable(),
                TextColumn::make('created_at')->from('articles.created_at')->sortable(),
            ])
            ->keyColumn('articles.id');
    }
}
