<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

/**
 * Short free text, edited directly in the row.
 *
 * THE ONE EDITABLE COLUMN THAT TAKES ARBITRARY TEXT, which is exactly why it
 * is the narrowest of the three: `ToggleColumn` only accepts a boolean and
 * `SelectColumn` only its own declared options, so neither can be steered
 * into writing something unexpected. Free text has no such fence by
 * construction - `rules()` is how a resource author draws one. A reference
 * code, a short note, a label: things worth fixing without leaving the list,
 * not a description field that belongs on the edit page.
 *
 * `rules()` REUSES LARAVEL'S OWN VALIDATOR rather than a bespoke length
 * check, so a resource can say `->rules(['max:20', 'alpha_dash'])` and get
 * every rule Laravel already ships, not a reimplementation of a handful of
 * them. Declared here and nowhere else - the same allow-list posture every
 * other editable column takes.
 */
final class TextInputColumn extends EditableColumn
{
    /** @var list<string> */
    private array $rules = [];

    private ?string $placeholder = null;

    public function type(): string
    {
        return 'text';
    }

    /**
     * Laravel validation rules, checked against the incoming value alone -
     * `max:20`, `alpha_dash`, `regex:/.../`, whatever the column needs.
     * `required` is implicit: an editable cell has no concept of "leave this
     * attribute out of the request" the way a form does, so an empty string
     * is what a blanked-out cell means.
     *
     * @param  list<string>  $rules
     */
    public function rules(array $rules): self
    {
        $this->rules = $rules;

        return $this;
    }

    public function placeholder(string $placeholder): self
    {
        $this->placeholder = $placeholder;

        return $this;
    }

    public function castValue(mixed $value): string
    {
        $value = is_scalar($value) ? (string) $value : '';

        if ($this->rules !== []) {
            $validator = Validator::make(['value' => $value], ['value' => $this->rules]);

            if ($validator->fails()) {
                throw new InvalidArgumentException((string) $validator->errors()->first('value'));
            }
        }

        return $value;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'placeholder' => $this->placeholder,
        ];
    }
}
