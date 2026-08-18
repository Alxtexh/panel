<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Infolists\TextEntry;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Tag;

/**
 * BelongsToMany under ArticleResource. Dedicated list and attach pages at
 * `/articles/{id}/tags` and `/articles/{id}/tags/attach`. Detach is a row
 * action on the nested index. Not a modal, not Livewire.
 */
final class TagResource extends Resource
{
    protected static string $model = Tag::class;

    protected static string $panel = 'admin';

    protected static ?string $parent = ArticleResource::class;

    protected static ?string $relationship = 'tags';

    protected static ?string $purpose = 'Tags on one article.';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextField::make('name')->required(),
        ]);
    }

    public static function infolist(): array
    {
        return [
            TextEntry::make('name'),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->from('tags.name')->sortable()->searchable()->locked(),
                DateColumn::make('created_at')->from('tags.created_at')->sortable()->withTime(),
            ])
            ->keyColumn('tags.id')
            ->alsoSelect(['tags.id']);
    }
}
