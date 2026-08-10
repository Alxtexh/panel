<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Actions\BulkAction;
use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
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

    /**
     * A FORM, because without one the write endpoints answer 404.
     *
     * `RecordController::store` aborts when `formDefinition()->fields()` is
     * empty - deliberately: a resource that declared no form has no create
     * screen, so accepting a POST would be writing through a door the panel
     * never drew. `tenant_id` is absent on purpose; it comes from request
     * context, and a field for it would be a way to file into another
     * organisation.
     */
    public static function form(Form $form): Form
    {
        return $form->schema([
            TextField::make('title')->required(),
            TextField::make('status'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('articles.title')->sortable()->searchable(),
                TextColumn::make('status')->from('articles.status')->sortable(),
                DateColumn::make('created_at')->from('articles.created_at')->sortable()->withTime(),
            ])
            ->keyColumn('articles.id')
            /*
             * DECLARED ACTIONS, because the endpoint only runs what the
             * resource offered - that refusal is the property under test, and
             * it cannot be asserted against a resource that declares none.
             */
            ->recordActions([
                RecordAction::make('publish', 'Publish')
                    ->authorize('update')
                    ->mutate(['status' => 'published']),

                // Hidden for an already-published row. `visible()` is enforced
                // on EXECUTION, not merely used to draw the menu - forcing the
                // key on a row it is hidden for must still refuse.
                RecordAction::make('archive', 'Archive')
                    ->authorize('update')
                    ->visible(static fn (array $row): bool => ($row['status'] ?? null) !== 'archived')
                    ->mutate(['status' => 'archived']),
            ])
            ->bulkActions([
                BulkAction::make('publish', 'Publish')
                    ->authorize('update')
                    ->mutate(['status' => 'published']),
            ]);
    }
}
