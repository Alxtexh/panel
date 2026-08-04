<?php

declare(strict_types=1);

namespace PanelKit\Panel\Landing;

use PanelKit\Panel\Forms\Fields\BuilderField;
use PanelKit\Panel\Forms\Fields\NumberField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextareaField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Fields\ToggleField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Resources\SingularResource;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Support\InstallationState;

/**
 * The public landing page, edited from the panel.
 *
 * A BUILDER, NOT A PAGE BUILDER. Every block here is one of the sections
 * `@panelkit/ui` already draws, so the editor cannot invent a layout the front
 * end has no component for - which is the failure mode of every "drag anything
 * anywhere" CMS: an author composes something the renderer skips, and the only
 * symptom is a gap on the live site.
 *
 * IT IS INSTALLATION STATE, NOT TENANT STATE, and that is the one decision here
 * worth arguing about. The front door is served to anonymous visitors, before
 * any tenant is resolved - so a landing page stored on a tenant row could not be
 * read by the request that needs it. `panel_settings` has no tenant column by
 * design and is reached through the same connection everywhere, which is exactly
 * the shape of a fact about the installation rather than about an organisation.
 *
 * EMPTY MEANS "USE THE SHIPPED DESIGN". Saving no blocks does not blank the
 * site; it hands the page back to `LandingPresets`, so the worst an editor can
 * do by deleting everything is return to what shipped. A CMS whose empty state
 * is a white page is a CMS that will eventually produce one.
 */
final class LandingPageResource extends SingularResource
{
    /** Where the composed page lives. See the note above on why not the tenant. */
    public const KEY = 'landing.sections';

    protected static string $icon = 'home';

    protected static ?string $group = 'Configuration';

    protected static ?string $purpose = 'The public front page, section by section.';

    public static function key(): string
    {
        return 'landing-page';
    }

    public static function label(): string
    {
        return 'Landing page';
    }

    public static function ability(): ?string
    {
        /*
         * NOT `manage_settings` - that name is in no registry, and `grants_all`
         * deliberately covers only abilities that EXIST, so an unregistered
         * name denies everybody including administrators. The screen 403ed for
         * the account that owns the installation, which is the correct
         * behaviour for a typo and a confusing way to find one.
         */
        return 'manage_landing_page';
    }

    /**
     * OPEN THE PAGE THIS SCREEN COMPOSES.
     *
     * Composing eleven sections with no way to look at the result is guesswork
     * with a Save button, and the only alternative was remembering the URL and
     * typing it. In a NEW TAB deliberately: the same tab would take whatever is
     * half-edited in the builder with it.
     *
     * ONLY WHERE THE PAGE IS ACTUALLY SERVED. `panel.landing.route` is off by
     * default, and an installation that composes the page but routes it itself
     * has a URL this package cannot know - so it points at its own route or at
     * `panel.landing.url` if one is named, and offers nothing rather than a
     * link to a 404.
     *
     * @return list<array{label: string, href: string, external?: bool}>
     */
    public static function links(): array
    {
        $url = config('panel.landing.url');

        if (! is_string($url) || $url === '') {
            $url = LandingController::registers() ? '/' : null;
        }

        return $url === null ? [] : [
            ['label' => 'View the page', 'href' => $url, 'external' => true],
        ];
    }

    /** @return array<string, mixed> */
    public static function defaults(): array
    {
        return ['sections' => []];
    }

    /**
     * @return array<string, mixed>
     *
     * THE EDITOR OPENS ON THE PAGE THAT IS LIVE, which it did not.
     *
     * `LandingController` falls back to `LandingPresets::get()` when nothing has
     * been saved - so a fresh installation serves eleven sections of real
     * content while this returned an empty list. Opening the editor showed a row
     * of "+" buttons and nothing else, for a front page that visibly has a hero,
     * a pricing table and an FAQ on it. Nothing was broken and nothing said so;
     * the screen simply described a different page than the one at `/`.
     *
     * SO THE FALLBACK IS THE SAME ONE THE CONTROLLER USES. Editing starts from
     * what a visitor sees, which is what "edit this page" means. `save()` writes
     * whatever is in the builder, so the first save materialises the shipped
     * design into storage - and removing every block still hands the page back
     * to the preset, so the escape hatch is unchanged.
     */
    public static function values(): array
    {
        $stored = app(InstallationState::class)->get(self::KEY);

        $sections = is_array($stored) && $stored !== []
            ? $stored
            : LandingPresets::get(self::configuredDesign());

        return [
            'sections' => $sections,
            // Never sticky: it is an action spelled as a field, and a preset
            // that stayed selected would re-apply itself on the next save.
            'preset' => null,
        ];
    }

    /** The design this installation configured, or the first that exists. */
    private static function configuredDesign(): string
    {
        $configured = (string) config('panel.landing.design', 'aurora');

        return in_array($configured, LandingPresets::names(), true)
            ? $configured
            : (LandingPresets::names()[0] ?? 'aurora');
    }

    /** @param array<string, mixed> $validated */
    public static function save(array $validated): void
    {
        /*
         * CHOOSING A PRESET REPLACES THE PAGE, and it wins over whatever is in
         * the builder because that is what somebody choosing it means. It is an
         * action wearing a field's clothes - the alternative was a button that
         * saves before it acts, which is worse.
         */
        $preset = $validated['preset'] ?? null;

        $sections = is_string($preset) && in_array($preset, LandingPresets::names(), true)
            ? LandingPresets::get($preset)
            : array_values(array_filter(
                (array) ($validated['sections'] ?? []),
                static fn (mixed $block): bool => is_array($block) && isset($block['type']),
            ));

        app(InstallationState::class)->put(self::KEY, $sections);
    }

    /**
     * The blocks, one per section the renderer knows.
     *
     * THE TYPES MATCH `PkLandingSections` EXACTLY. A block whose type the
     * renderer does not know is skipped on the live page - deliberately, so a
     * rename cannot take the front door down - which means a typo here is a
     * section that saves, looks right in the editor and never appears. A test
     * asserts the two lists agree.
     */
    public static function form(Form $form): Form
    {
        return $form->schema([
            Section::make('The page')
                ->description(
                    'Sections render in this order. Remove them all to go back to the '
                    .'design configured in panel.landing.design.'
                )
                ->schema([
                    BuilderField::make('sections')->label('')
                        ->block('hero', 'Hero', [
                            TextField::make('eyebrow')->help('A small line above the headline.'),
                            TextField::make('title')->required(),
                            TextareaField::make('body')->rows(2),
                            TextField::make('primaryLabel')->label('Primary button'),
                            TextField::make('primaryHref')->label('Primary link'),
                            TextField::make('secondaryLabel')->label('Secondary button'),
                            TextField::make('secondaryHref')->label('Secondary link'),
                            TextField::make('note')->help('Small print under the buttons.'),
                        ])
                        ->block('logos', 'Logo cloud', [
                            TextField::make('title'),
                            BuilderField::make('items')->label('Names')
                                ->block('logo', 'Name', [TextField::make('name')->required()]),
                        ])
                        ->block('features', 'Feature grid', [
                            TextField::make('title'),
                            TextareaField::make('body')->rows(2),
                            BuilderField::make('items')->label('Features')
                                ->block('feature', 'Feature', [
                                    TextField::make('title')->required(),
                                    TextareaField::make('body')->rows(2),
                                ]),
                        ])
                        ->block('bento', 'Bento grid', [
                            TextField::make('title'),
                            TextareaField::make('body')->rows(2),
                            BuilderField::make('items')->label('Tiles')
                                ->block('tile', 'Tile', [
                                    TextField::make('title')->required(),
                                    TextareaField::make('body')->rows(2),
                                    SelectField::make('span')->label('Size')->options([
                                        '' => 'Normal',
                                        'wide' => 'Two columns wide',
                                        'tall' => 'Two rows tall',
                                        'large' => 'Wide and tall',
                                    ])->help('Which capability deserves the big tile is an editorial call.'),
                                    ToggleField::make('accent')->label('Tint this tile'),
                                ]),
                        ])
                        ->block('showcase', 'Product showcase', [
                            TextField::make('title')->required(),
                            TextareaField::make('body')->rows(2),
                            TextField::make('caption')->help('The address shown in the window chrome.'),
                            NumberField::make('rows')->label('Table rows')->min(3)->max(12),
                        ])
                        ->block('steps', 'How it works', [
                            TextField::make('title'),
                            TextareaField::make('body')->rows(2),
                            BuilderField::make('items')->label('Steps')
                                ->block('step', 'Step', [
                                    TextField::make('title')->required(),
                                    TextareaField::make('body')->rows(2),
                                ]),
                        ])
                        ->block('stats', 'Stats', [
                            TextField::make('title'),
                            BuilderField::make('items')->label('Numbers')
                                ->block('stat', 'Stat', [
                                    TextField::make('value')->required()
                                        ->help('"250k" counts up; "Talk to us" is left alone.'),
                                    TextField::make('label')->required(),
                                ]),
                        ])
                        ->block('testimonials', 'Testimonials', [
                            TextField::make('title'),
                            BuilderField::make('items')->label('Quotes')
                                ->block('quote', 'Quote', [
                                    TextareaField::make('quote')->rows(3)->required(),
                                    TextField::make('name')->required(),
                                    TextField::make('role'),
                                    TextField::make('avatar')->label('Avatar URL'),
                                ]),
                        ])
                        ->block('pricing', 'Pricing', [
                            TextField::make('title'),
                            TextareaField::make('body')->rows(2),
                            TextField::make('annualNote')->help('Shown beside the monthly/annual switch.'),
                            BuilderField::make('items')->label('Tiers')
                                ->block('tier', 'Tier', [
                                    TextField::make('name')->required(),
                                    TextField::make('price')->required(),
                                    TextField::make('annualPrice')
                                        ->help('Leave empty on every tier to hide the switch.'),
                                    TextField::make('period')->help('e.g. /month'),
                                    TextareaField::make('body')->rows(2),
                                    ToggleField::make('featured')->label('Highlight this tier'),
                                    TextField::make('label')->label('Button'),
                                    TextField::make('href')->label('Button link'),
                                    BuilderField::make('features')->label('Included')
                                        ->block('item', 'Line', [TextField::make('title')->required()]),
                                ]),
                        ])
                        ->block('faq', 'FAQ', [
                            TextField::make('title'),
                            BuilderField::make('items')->label('Questions')
                                ->block('qa', 'Question', [
                                    TextField::make('question')->required(),
                                    TextareaField::make('answer')->rows(3)->required(),
                                ]),
                        ])
                        ->block('cta', 'Closing call to action', [
                            TextField::make('title')->required(),
                            TextareaField::make('body')->rows(2),
                            TextField::make('label')->label('Button'),
                            TextField::make('href')->label('Button link'),
                        ]),
                ]),

            Section::make('Start from a shipped design')
                ->description(
                    'Choosing one replaces the sections above the next time you save. '
                    .'The three differ in composition and in copy, not only in colour.'
                )
                ->schema([
                    SelectField::make('preset')->label('Copy a design in')
                        ->options(array_combine(
                            LandingPresets::names(),
                            array_map(ucfirst(...), LandingPresets::names()),
                        ))
                        ->help('Leave unset to keep what is already there.'),
                ]),
        ]);
    }
}
