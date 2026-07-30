<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use PanelKit\Panel\Alerts\Announcement;
use PanelKit\Panel\Forms\Fields\DateField;
use PanelKit\Panel\Forms\Fields\RadioField;
use PanelKit\Panel\Forms\Fields\TextareaField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Table;

/**
 * Where announcements are WRITTEN. They are read on the dashboard.
 *
 * THE DISTINCTION IS THE WHOLE POINT OF THIS CLASS EXISTING. There was a page
 * called Announcements that listed them, and a page called Announcements is a
 * page nobody opens - so the notice everybody needed to read was the one nobody
 * read. Reading moved to a banner at the top of the dashboard, where people
 * already are. This is the other half: somewhere to compose one, which is a
 * table with a form and therefore an ordinary resource.
 *
 * IT IS INSTALLED BY A PLUGIN, not discovered from this application's resource
 * directory - see `AnnouncementsPlugin`. That is deliberate: it is the proof
 * that a package can put a working, authenticated, tenant-scoped CRUD screen
 * into a portal without the application registering anything.
 */
final class AnnouncementResource extends Resource
{
    protected static string $model = Announcement::class;

    public static function key(): string
    {
        return 'announcements';
    }

    public static function label(): string
    {
        return 'Announcement';
    }

    public static function icon(): string
    {
        return 'mail';
    }

    public static function group(): ?string
    {
        return 'Apps';
    }

    /**
     * NOT A PAGE IN THE SIDEBAR, and that was the whole complaint.
     *
     * An announcement is READ in two places that people already look at - the
     * banner at the top of the dashboard and the bell - and it expires by
     * itself. A permanent entry in the column somebody scans all day, for a
     * feature whose entire output appears somewhere else, is a line of
     * navigation that earns nothing.
     *
     * WRITING ONE STILL HAS A SCREEN, reached from the bell rather than from
     * the sidebar: the form, the routes, the policy and the tenant scope are all
     * unchanged, because hiding is a navigation decision and nothing else.
     */
    public static function showsInNavigation(): bool
    {
        return false;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->sortable(),
                BadgeColumn::make('severity')->colors([
                    'danger' => 'rose',
                    'warning' => 'amber',
                    'success' => 'emerald',
                    'info' => 'slate',
                ]),
                TextColumn::make('display')->label('Shown as'),
                DateColumn::make('starts_at')->label('From')->sortable(),
                DateColumn::make('ends_at')->label('Until')->sortable(),
            ])
            ->defaultSort('starts_at', 'desc')
            ->perPage(25);
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            Section::make('The notice')->columns(2)->schema([
                TextField::make('title')->required()->max(120)
                    ->placeholder('Maintenance on Sunday')
                    ->span(2),

                // `TextareaField` has no `max()`; the limit is a rule, which is
                // where every other length constraint in the panel lives too.
                TextareaField::make('body')->rows(3)->span(2)->rule('max:500')
                    ->help('One or two sentences. A banner nobody finishes reading is a banner nobody read.')
                    ->chips(Announcement::variables()),
            ]),

            Section::make('How it appears')->columns(2)->schema([
                /*
                 * SEVERITY DECIDES THE COLOUR, and rendering everything in
                 * amber teaches people to ignore amber.
                 */
                RadioField::make('severity')->required()->inline()->options([
                    'info' => 'Information',
                    'success' => 'Good news',
                    'warning' => 'Warning',
                    'danger' => 'Urgent',
                ]),

                /*
                 * BANNER OR TOAST, and the difference is how long somebody has
                 * to read it. A toast for an outage means whoever was making
                 * coffee never learns about it.
                 */
                RadioField::make('display')->label('Shown as')->required()->inline()->options([
                    'banner' => 'Banner until dismissed',
                    'toast' => 'Brief toast',
                ]),

                TextField::make('action_label')->label('Button')->max(40)
                    ->placeholder('Pay now'),

                TextField::make('action_url')->label('Button link')->as('url')->max(255)
                    ->placeholder('/apps/mail'),
            ]),

            Section::make('When')->columns(2)->schema([
                DateField::make('starts_at')->label('From')
                    ->help('Leave empty to show it immediately.'),

                DateField::make('ends_at')->label('Until')
                    ->help('Leave empty and it stays until somebody deletes it - which nobody ever does.'),
            ]),
        ]);
    }
}
