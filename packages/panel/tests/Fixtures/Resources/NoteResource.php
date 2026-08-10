<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Note;

/** Registered, routable, and guarded by nothing. */
final class NoteResource extends Resource
{
    protected static string $model = Note::class;

    protected static string $panel = 'admin';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('body')->from('notes.body')->sortable(),
                TextColumn::make('created_at')->from('notes.created_at')->sortable(),
            ])
            ->keyColumn('notes.id');
    }
}
