<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Closure;

/**
 * A form field.
 *
 * ONE SOURCE OF VALIDATION TRUTH. `rules()` produces the Laravel validation
 * array the server enforces, and it is the ONLY place rules are written. The
 * client carries no copy — a duplicated rule set drifts, and the copy that
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
 * the schema (antipatterns §6.1), and no tenant data either — an option list
 * backed by a query is a closure, resolved when the form's data is assembled,
 * never while building the cached schema (antipatterns §3.3, addendum Part A).
 */
abstract class Field implements \PanelKit\Panel\Schema\Renderable
{
    protected ?string $label = null;

    protected bool $required = false;

    protected ?string $help = null;

    protected ?string $placeholder = null;

    protected bool $disabled = false;

    /** @var list<string> */
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

    /** Additional Laravel rules, merged with the ones the type implies. */
    public function rule(string ...$rules): static
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
        return [$this->required ? 'required' : 'nullable', ...$this->typeRules(), ...$this->rules];
    }

    /** @return list<mixed> */
    protected function typeRules(): array
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
        ], static fn (mixed $v): bool => $v !== null && $v !== false);
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
