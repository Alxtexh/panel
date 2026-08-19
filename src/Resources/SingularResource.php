<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Resources;

use Alxtexh\Panel\Forms\Form;

/**
 * A screen with ONE record and no list - roadmap 4.3.
 *
 * THE SHAPE A RESOURCE CANNOT EXPRESS AND A BESPOKE PAGE OVER-EXPRESSES.
 * Billing preferences, portal defaults, an integration's credentials - each
 * is a form over exactly one row of state, and each was costing a
 * hand-written controller, a hand-written Vue page and a hand-wired route to
 * say what a resource says declaratively. A resource is the wrong tool from
 * the other side: it would render a list of one, with a create button for a
 * record that must not multiply.
 *
 * SO A SINGULAR RESOURCE IS A FORM AND TWO FUNCTIONS. `form()` declares the
 * fields exactly as a resource does - same field types, same validation rules
 * derived server-side, same Vue rendering, nothing new to learn. `values()`
 * says what the form shows; `save()` says what happens to what came back,
 * already validated and sanitized. Where the state LIVES - a tenant column, a
 * settings row, an API - is the application's business, which is why both are
 * abstract rather than assuming a model.
 *
 * ROUTED AT `/{key}` WITH `PUT /{key}/current`, mounted per panel before the
 * `{resource}` patterns so the fixed segment wins. The screen renders through
 * the SAME ResourceForm page every edit screen uses, so the unsaved-changes
 * guard, validation display and submit flow are the ones already tested.
 */
abstract class SingularResource
{
    protected static string $icon = 'sliders';

    protected static ?string $group = null;

    /** One sentence: what this screen decides. Shown under the title. */
    protected static ?string $purpose = null;

    /** Which panel this screen belongs to - same default as Resource. */
    protected static string $panel = 'admin';

    /** The form over the one record. Same declaration language as a resource. */
    abstract public static function form(Form $form): Form;

    /**
     * The current values, shaped for the form's fields.
     *
     * @return array<string, mixed>
     */
    abstract public static function values(): array;

    /**
     * Persist a validated, sanitized submission. Storage is yours.
     *
     * @param  array<string, mixed>  $validated
     */
    abstract public static function save(array $validated): void;

    /**
     * The ability that gates this screen, or null for any signed-in member.
     *
     * A PANEL-LEVEL ABILITY (declared in `config('panel.abilities')`), not a
     * resource one: there is no model to hang a policy on, and "may configure
     * billing" is the same kind of grant as "may configure the assistant".
     */
    public static function ability(): ?string
    {
        return null;
    }

    /** `BillingSettingsResource` becomes `billing-settings`. */
    public static function key(): string
    {
        return str(class_basename(static::class))->beforeLast('Resource')->kebab()->value();
    }

    public static function label(): string
    {
        return str(class_basename(static::class))->beforeLast('Resource')->headline()->value();
    }

    public static function icon(): string
    {
        return static::$icon;
    }

    public static function group(): ?string
    {
        return static::$group;
    }

    public static function purpose(): ?string
    {
        return static::$purpose;
    }

    public static function panel(): string
    {
        return static::$panel;
    }

    /**
     * Places to go from this screen - normally the thing it configures.
     *
     * A SETTINGS SCREEN THAT CANNOT SHOW YOU WHAT IT CHANGES is guesswork with
     * a Save button. The landing editor is the case that asked for it: somebody
     * composes eleven sections and the only way to see the result is to
     * remember the URL and open it by hand.
     *
     * `external` OPENS IN A NEW TAB, which is the point for a preview - the
     * alternative loses whatever is half-typed in the form. It also means
     * the link leaves the panel, so it is a plain anchor rather than an Inertia
     * visit; a `Link` to a non-Inertia page renders the JSON.
     *
     * @return list<array{label: string, href: string, external?: bool}>
     */
    public static function links(): array
    {
        return [];
    }

    public static function formDefinition(): Form
    {
        return static::form(new Form);
    }
}
