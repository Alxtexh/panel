<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Actions;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\Forms\Form;

/**
 * One step in a declarative record action wizard.
 *
 * A step may provide:
 * - a form schema (fields collected from the operator)
 * - a server-side validation callback (additional checks or value patches)
 *
 * The validation callback may return an array of values to merge into the
 * action's collected data, after it validated the input.
 */
final class ActionStep
{
    private ?Form $form = null;

    private ?string $description = null;

    /**
     * @var Closure(Model, array<string, mixed>): array<string, mixed>|void|null
     */
    private ?Closure $validate = null;

    private function __construct(public readonly string $label) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    public function describe(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @param  Closure(Form): Form  $form
     */
    public function form(Closure $form): self
    {
        $this->form = $form(Form::make());

        return $this;
    }

    /**
     * @param  Closure(Model, array<string, mixed>): array<string, mixed>|void  $callback
     */
    public function validate(Closure $callback): self
    {
        $this->validate = $callback;

        return $this;
    }

    public function formDefinition(): ?Form
    {
        return $this->form;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>|null
     */
    public function runValidate(Model $record, array $data): ?array
    {
        if ($this->validate === null) {
            return null;
        }

        $result = ($this->validate)($record, $data);

        return is_array($result) ? $result : null;
    }
}

