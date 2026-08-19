<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Forms\Fields\SelectField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Infolists\TextEntry;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tag;

/**
 * Nested under ArticleResource: dedicated list/create/edit/view pages at
 * `/articles/{id}/comments`, not a modal.
 *
 * `article_id` is on the form so `SelectField::relationship()` has an HTTP
 * surface. Nested writes still stamp the parent from the URL, so a submitted
 * foreign key cannot move the row.
 */
final class CommentResource extends Resource
{
    protected static string $model = Comment::class;

    protected static string $panel = 'admin';

    protected static ?string $parent = ArticleResource::class;

    protected static ?string $purpose = 'Comments on one article.';

    public static function form(Form $form): Form
    {
        return $form->schema([
            SelectField::make('article_id')
                ->relationship(Article::class, 'title')
                ->createOption([
                    TextField::make('title')->required(),
                    TextField::make('status'),
                ])
                ->tableSelect(ArticleResource::class)
                ->live(),
            SelectField::make('notable')
                ->morphTo([
                    Article::class => 'title',
                    Tag::class => 'name',
                ]),
            TextField::make('body')->required()->live(),
        ]);
    }

    public static function infolist(): array
    {
        return [
            TextEntry::make('body'),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('body')->from('comments.body')->sortable()->searchable()->locked(),
                DateColumn::make('created_at')->from('comments.created_at')->sortable()->withTime(),
            ])
            ->keyColumn('comments.id')
            ->alsoSelect(['comments.id']);
    }
}
