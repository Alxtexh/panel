<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Actions;

use Closure;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

/**
 * A mutation hung off an infolist entry on the dedicated view page.
 *
 * THE REQUEST NAMES A KEY, NEVER AN ATTRIBUTE SET. Same contract as
 * `RecordAction`: only a key the resource declared on an entry is runnable,
 * the ability is checked against this record, and `handle()` / `mutate()`
 * live in PHP. The client POSTs `{ action }` to
 * `{resource}/{id}/infolist-action`. The view stays a page, never a modal
 * and never Livewire.
 *
 * `Entry::url()` is a separate link. An entry may have a URL, an action,
 * both, or neither.
 */
final class Action
{
    private ?string $icon = null;

    private bool $destructive = false;

    private ?string $confirmation = null;

    private string $ability = 'view';

    /** @var array<string, mixed> */
    private array $mutate = [];

    private ?Closure $handle = null;

    private function __construct(public readonly string $key, private string $label)
    {
        if (preg_match('/^[a-z][a-z0-9_-]*$/', $key) !== 1) {
            throw new InvalidArgumentException("[{$key}] is not a valid action key.");
        }
    }

    public static function make(string $key, ?string $label = null): self
    {
        return new self($key, $label ?? str($key)->headline()->value());
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function destructive(bool $destructive = true): self
    {
        $this->destructive = $destructive;

        return $this;
    }

    public function confirm(string $message): self
    {
        $this->confirmation = $message;

        return $this;
    }

    public function authorize(string $ability): self
    {
        $this->ability = $ability;

        return $this;
    }

    /** @param array<string, mixed> $attributes */
    public function mutate(array $attributes): self
    {
        $this->mutate = $attributes;

        return $this;
    }

    /** @param  Closure(Model): mixed  $handle */
    public function handle(Closure $handle): self
    {
        $this->handle = $handle;

        return $this;
    }

    public function ability(): string
    {
        return $this->ability;
    }

    public function run(Model $record): void
    {
        if ($this->handle !== null) {
            ($this->handle)($record);

            return;
        }

        if ($this->mutate === []) {
            throw new InvalidArgumentException("[{$this->key}] declares nothing to do.");
        }

        $record->forceFill($this->mutate)->save();
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return array_filter([
            'key' => $this->key,
            'label' => $this->label,
            'icon' => $this->icon,
            'destructive' => $this->destructive,
            'confirmation' => $this->confirmation,
        ], static fn (mixed $v): bool => $v !== null && $v !== false);
    }
}
