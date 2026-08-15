<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Resources;

use Alxtexh\Panel\Actions\BulkAction;
use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Forms\Fields\FileUploadField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\BadgeColumn;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\SelectColumn;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Widgets\StatWidget;
use Alxtexh\Panel\Resources\RelationManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;

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
            /*
             * AN UPLOAD FIELD, so the upload endpoints have a declared target.
             * `accept()` is the allowlist those endpoints check a filename
             * against - without a declared field there is nothing to refuse
             * an undeclared one BY, and the refusal is the property worth
             * testing.
             */
            FileUploadField::make('attachment')->accept(['pdf', 'txt'])->maxKilobytes(64),
        ]);
    }

    /**
     * WIDGETS ABOVE THE LIST - `Resource::headerWidgets()`.
     *
     * One open and one ability-gated, so both halves of `WidgetSet`'s
     * permission rule are assertable: a widget nobody may see must be neither
     * sent nor RESOLVED, since resolving it would run its query for somebody
     * forbidden to read the answer.
     *
     * @return list<StatWidget>
     */
    public static function headerWidgets(): array
    {
        return [
            StatWidget::make('total', 'Total')
                ->value(static fn (): int => Article::query()->count()),

            StatWidget::make('secret', 'Secret')
                ->ability('see_secret_stat')
                ->value(static fn (): int => throw new \RuntimeException(
                    'A hidden widget was resolved for somebody who may not see it.',
                )),
        ];
    }

    /**
     * A CHILD TABLE ON THE RECORD PAGE.
     *
     * `relations()` is the declared allowlist the relation endpoint checks a
     * URL segment against - the segment is caller-supplied, so an endpoint
     * that loaded any named relation would let a URL walk this model's
     * relationship graph.
     *
     * @return list<RelationManager>
     */
    public static function relations(): array
    {
        return [
            RelationManager::make('comments', 'Comments')
                ->related(Comment::class, 'comments.article_id')
                ->table(fn (Table $table): Table => $table
                    ->columns([
                        TextColumn::make('body')->from('comments.body')->sortable(),
                        // Sortable, because it is the default sort - the same
                        // refusal the parent table taught: `ListQuery` will not
                        // accept a default that is not in the allowlist.
                        DateColumn::make('created_at')->from('comments.created_at')->sortable()->withTime(),
                    ])
                    ->keyColumn('comments.id')
                    ->alsoSelect(['comments.id'])),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->from('articles.title')->sortable()->searchable(),
                /*
                 * EDITABLE, so the inline-cell endpoint has something it is
                 * ALLOWED to write - and `title` above stays non-editable so
                 * the same endpoint has something it must REFUSE. One of each
                 * is what makes that guard assertable.
                 *
                 * Searchable too, so a term can be asserted to match words
                 * spread across DIFFERENT columns rather than only within one.
                 */
                SelectColumn::make('status')
                    ->from('articles.status')
                    ->options(['draft' => 'Draft', 'published' => 'Published', 'archived' => 'Archived'])
                    ->sortable()
                    ->searchable(),
                /*
                 * A DISPLAY BADGE next to the writable select, so the cell
                 * endpoint can be asserted to refuse a pill that was never
                 * opted into a resolver.
                 */
                BadgeColumn::make('kind')
                    ->from('articles.status')
                    ->colors([
                        'draft' => 'neutral',
                        'published' => 'success',
                        'archived' => 'warning',
                    ]),
                BadgeColumn::make('workflow')
                    ->from('articles.status')
                    ->colors([
                        'draft' => 'neutral',
                        'published' => 'success',
                        'archived' => 'warning',
                    ])
                    ->resolver(),
                DateColumn::make('created_at')->from('articles.created_at')->sortable()->withTime(),
            ])
            /*
             * A DECLARED FILTER, which is the allowlist the query string is
             * checked against. Anything not declared here must be ignored
             * rather than applied - otherwise a query parameter is a WHERE
             * clause the resource never offered.
             */
            ->filters([
                SelectFilter::make('status')
                    ->column('articles.status')
                    ->options(['draft', 'published', 'archived']),
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
