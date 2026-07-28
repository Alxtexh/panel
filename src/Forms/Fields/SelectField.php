<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Closure;
use Illuminate\Validation\Rule;

/**
 * A single-choice field.
 *
 * Options may be a literal list (structure - safe to cache) or a Closure
 * (tenant data - resolved only when the form's data payload is assembled).
 * Either way the SUBMITTED value is validated against the resolved list by an
 * `in:` rule, so the allowlist is enforced server-side rather than trusted from
 * the client.
 */
final class SelectField extends Field
{
    /** @var array<string|int, string>|Closure(): array<string|int, string> */
    private array|Closure $options = [];

    private ?array $resolved = null;

    private bool $searchable = false;

    /** @var (Closure(string): array<string|int, string>)|null */
    private ?Closure $searchQuery = null;

    /**
     * Above this, rendering every option inline stops being reasonable.
     *
     * Not arbitrary: 200 options is a long but usable dropdown, and it is far
     * enough below the point where the DOM cost shows up that nobody hits it by
     * accident. Pointed at a 100k-row relation the old code emitted 100,000
     * option elements - a correctness problem, not a slow one.
     */
    private const INLINE_LIMIT = 200;

    /** @param array<string|int, string>|Closure(): array<string|int, string> $options */
    public function options(array|Closure $options): static
    {
        $this->options = $options;

        return $this;
    }

    /** @return array<string|int, string> value => label */
    public function resolvedOptionMap(): array
    {
        return $this->resolved ??= ($this->options instanceof Closure ? ($this->options)() : $this->options);
    }

    /**
     * Fetch options on demand instead of rendering them all.
     *
     * Required for any relation that can grow - a client picker cannot ship
     * every client to the browser. The callback receives the search term and
     * returns value => label, already tenant-scoped by the model it queries.
     *
     * @param  (Closure(string): array<string|int, string>)|null  $query
     */
    public function searchable(?Closure $query = null): static
    {
        $this->searchable = true;
        $this->searchQuery = $query;

        return $this;
    }

    public function isSearchable(): bool
    {
        return $this->searchable;
    }

    /**
     * Options for a search term. Only meaningful on a searchable field.
     *
     * @return list<array{value: mixed, label: string}>
     */
    public function search(string $term): array
    {
        $map = $this->searchQuery !== null
            ? ($this->searchQuery)($term)
            // No dedicated query: filter the declared options in PHP. Correct
            // for a modest list, and the reason a large relation must supply a
            // query rather than relying on this.
            : array_filter(
                $this->resolvedOptionMap(),
                static fn (string $label): bool => $term === '' || stripos($label, $term) !== false,
            );

        $out = [];

        foreach ($map as $value => $label) {
            $out[] = ['value' => $value, 'label' => $label];
        }

        return $out;
    }

    public function type(): string
    {
        return 'select';
    }

    /**
     * `in:` from the resolved options. ALWAYS, even when the list is empty.
     *
     * This is the one place a Closure-backed option list is touched during
     * validation, and it has to be: without it the client could submit any value
     * and the option list would be decoration.
     *
     * Emitting nothing when the list resolves EMPTY was a real hole. `plan_id`
     * is populated from a tenant-scoped query, so an empty result is exactly
     * what a caller without a resolvable tenant sees - and the field then
     * accepted any integer, including another tenant's plan id. Rule::in([])
     * rejects every non-null value instead, which is the correct reading of
     * "there is nothing you may choose".
     */
    protected function typeRules(): array
    {
        /*
         * A SEARCHABLE field cannot use Rule::in - its options are a moving
         * window, and pinning validation to whatever the last search returned
         * would reject perfectly valid values.
         *
         * `exists` is the correct check instead, and it is STRONGER: it asks the
         * database whether the row is real, through a query the tenant scope
         * applies to. Without an exists rule declared, the field falls back to
         * refusing everything rather than accepting anything - a searchable
         * field with no validation would be the exact hole this whole change is
         * fixing.
         */
        if ($this->searchable) {
            return $this->rules === [] ? [Rule::in([])] : [];
        }

        return [Rule::in(array_keys($this->resolvedOptionMap()))];
    }

    public function toSchema(): array
    {
        return [...parent::toSchema(), 'searchable' => $this->searchable];
    }

    public function resolveOptions(): ?array
    {
        // A searchable field ships NO options; the client fetches them.
        if ($this->searchable) {
            return [];
        }

        $map = $this->resolvedOptionMap();

        if (count($map) > self::INLINE_LIMIT) {
            throw new \RuntimeException(sprintf(
                'Select field [%s] resolved %d options. Rendering them inline would ship %d option '
                .'elements to every browser. Call ->searchable() and supply a query.',
                $this->key,
                count($map),
                count($map),
            ));
        }

        $out = [];

        foreach ($this->resolvedOptionMap() as $value => $label) {
            $out[] = ['value' => $value, 'label' => $label];
        }

        return $out;
    }
}
