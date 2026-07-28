<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Closure;
use PanelKit\Panel\Schema\Renderable;

/**
 * A form field.
 *
 * ONE SOURCE OF VALIDATION TRUTH. `rules()` produces the Laravel validation
 * array the server enforces, and it is the ONLY place rules are written. The
 * client carries no copy - a duplicated rule set drifts, and the copy that
 * drifts is always the client one, so the failure is "the form said it was fine
 * and the save rejected it".
 *
 * LIVE validation while typing is not wired yet. The route carries the
 * `precognitive` middleware, so the endpoint already answers precognitive
 * requests, but `laravel-precognition-vue-inertia` peers on Inertia ^1 || ^2 and
 * this app is on Inertia 3. Errors currently arrive on submit. Wiring it needs
 * either that package to support Inertia 3, or a thin client of our own against
 * the same endpoint.
 *
 * Like columns, a field emits SEMANTIC values only. No CSS classes ever reach
 * the schema (antipatterns §6.1), and no tenant data either - an option list
 * backed by a query is a closure, resolved when the form's data is assembled,
 * never while building the cached schema (antipatterns §3.3, addendum Part A).
 */
abstract class Field implements Renderable
{
    protected ?string $label = null;

    protected bool $required = false;

    /**
     * `[controlling field, value]` when this field is conditional, else null.
     *
     * @var array{0: string, 1: mixed}|null
     */
    protected ?array $visibleWhen = null;

    protected ?string $help = null;

    protected ?string $placeholder = null;

    protected bool $disabled = false;

    /** @var list<object|string> */
    protected array $rules = [];

    /** Columns spanned in the form grid. Layout intent, not a CSS class. */
    protected int $span = 1;

    final public function __construct(public readonly string $key) {}

    public static function make(string $key): static
    {
        return new static($key);
    }

    abstract public function type(): string;

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function required(bool $required = true): static
    {
        $this->required = $required;

        return $this;
    }

    public function help(string $help): static
    {
        $this->help = $help;

        return $this;
    }

    public function placeholder(string $placeholder): static
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    public function disabled(bool $disabled = true): static
    {
        $this->disabled = $disabled;

        return $this;
    }

    /**
     * Additional rules, merged with the ones the type implies.
     *
     * Accepts rule OBJECTS as well as strings, because some checks a string
     * cannot express - ExistsInScope, for instance, has to ask the model rather
     * than the table so global scopes apply.
     *
     * Widened rather than given a second method: `rules()` is already the
     * getter, and a setter of the same name is a fatal redeclare.
     */
    public function rule(object|string ...$rules): static
    {
        $this->rules = [...$this->rules, ...$rules];

        return $this;
    }

    public function span(int $span): static
    {
        $this->span = $span;

        return $this;
    }

    public function resolvedLabel(): string
    {
        return $this->label ?? str($this->key)->headline()->value();
    }

    public function isRequired(): bool
    {
        return $this->required;
    }

    /**
     * The Laravel validation rules for this field.
     *
     * @return list<mixed>
     */
    public function rules(): array
    {
        return [$this->presenceRule(), ...$this->typeRules(), ...$this->rules];
    }

    /**
     * `required`, `nullable`, or `required_if` when this field is conditional.
     *
     * THE CONDITION IS RE-EVALUATED SERVER-SIDE, and that is the entire point of
     * expressing it as a validation rule rather than as a client hint.
     *
     * A conditional field is hidden by the browser when its condition is not
     * met - "show the tax number when the customer is a business". Treating that
     * as the whole story produces two symmetrical bugs, in opposite directions:
     *
     *   A plain `required` on a HIDDEN field means the form can never be
     *   submitted: the operator is told to fill in something that is not on
     *   screen, with no way to find it.
     *
     *   Dropping the rule entirely means a client that simply does not send the
     *   field skips a requirement the resource declared - and "hidden" was never
     *   a constraint on what a request may contain.
     *
     * `required_if` is neither. The rule travels with the same condition the UI
     * uses, so the server decides using the SUBMITTED value of the controlling
     * field. A request claiming to be a business must supply the tax number
     * whatever the browser displayed.
     */
    private function presenceRule(): string
    {
        if (! $this->required) {
            return 'nullable';
        }

        if ($this->visibleWhen === null) {
            return 'required';
        }

        [$field, $value] = $this->visibleWhen;

        // Booleans have to be written the way Laravel's rule parser reads them,
        // or `required_if:is_business,1` silently never matches `true`.
        $value = match (true) {
            $value === true => '1',
            $value === false => '0',
            default => (string) $value,
        };

        return "required_if:{$field},{$value}";
    }

    /**
     * Show this field only when another field holds a given value.
     *
     * PRESENTATION AND VALIDATION TOGETHER, from one declaration. The schema
     * carries the condition so the client can hide the control, and `rules()`
     * turns the same condition into `required_if` so the server reaches the same
     * answer from the submitted data. Declaring them separately is how they come
     * to disagree.
     */
    public function visibleWhen(string $field, mixed $value): static
    {
        $this->visibleWhen = [$field, $value];

        return $this;
    }

    /** @return array{0: string, 1: mixed}|null */
    public function visibilityCondition(): ?array
    {
        return $this->visibleWhen;
    }

    /** @return list<mixed> */
    protected function typeRules(): array
    {
        return [];
    }

    /**
     * Rules for keys OTHER than this field's own.
     *
     * A multi-value field needs `key.*` as well as `key`, and Form::rules()
     * keys everything by field - so without this hook a field could only ever
     * validate its own key. The consequence is not cosmetic: an `array` rule
     * alone accepts `['active', 'anything']`, because the array is an array.
     *
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        return [];
    }

    /**
     * Structure only. Never resolves an option closure.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        return array_filter([
            // Discriminator, so the client can walk a mixed tree of layout
            // nodes and fields without guessing what each node is.
            'component' => 'field',
            'key' => $this->key,
            'label' => $this->resolvedLabel(),
            'type' => $this->type(),
            'required' => $this->required,
            'help' => $this->help,
            'placeholder' => $this->placeholder,
            'disabled' => $this->disabled,
            'span' => $this->span > 1 ? $this->span : null,
            /*
             * The visibility condition, so the client can hide the control.
             *
             * A HINT, NOT A RULE. The server derives `required_if` from the same
             * declaration, so hiding this field on the client changes what is
             * shown and nothing about what is enforced.
             */
            'visibleWhen' => $this->visibleWhen === null ? null : [
                'field' => $this->visibleWhen[0],
                'value' => $this->visibleWhen[1],
            ],
        ], static fn (mixed $v): bool => $v !== null && $v !== false);
    }

    /**
     * Turn a stored value into what the FORM should show.
     *
     * The mirror of `transformForStorage()`, and the identity for the same
     * reason: for most fields the column value is the editable value. An upload
     * is not - the column holds a path, and a path is not something a person
     * can look at and recognise.
     */
    public function presentValue(mixed $value): mixed
    {
        return $value;
    }

    /**
     * Turn a validated value into what the column should hold.
     *
     * The identity by default: for most fields the submitted value IS the
     * stored value. It exists for the ones where it is not - an upload submits
     * a handle and stores a path - and living here rather than in the
     * controller is what keeps that knowledge with the field that has it,
     * instead of adding a type check to every save path.
     */
    public function transformForStorage(mixed $value): mixed
    {
        return $value;
    }

    /**
     * Whether this value should be left out of the write entirely.
     *
     * DIFFERENT FROM TRANSFORMING TO NULL, and the distinction is the whole
     * reason this exists: null OVERWRITES the stored value, omission leaves it
     * alone. A password field submitted blank means "keep the current one", and
     * transforming it to null would instead erase it - locking the account out
     * of a form somebody opened to correct a typo in a name.
     *
     * Defaults to false, so every existing field writes exactly as before.
     */
    public function omitsFromStorage(mixed $value): bool
    {
        return false;
    }

    /**
     * Tenant-varying options, resolved when the DATA payload is assembled.
     *
     * @return list<array{value: mixed, label: string}>|null
     */
    public function resolveOptions(): ?array
    {
        return null;
    }
}
