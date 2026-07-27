<?php

declare(strict_types=1);

namespace PanelKit\Panel\Actions;

use Closure;
use InvalidArgumentException;

/**
 * A mutation applied to a selection.
 *
 * THE CLIENT SENDS AN ACTION KEY, NEVER AN ATTRIBUTE SET. `mutate()` is
 * declared here, in server-side code, and the request may only name which
 * declared action to run. The alternative — accepting `{status: 'active'}` from
 * the browser and applying it — is a mass-assignment endpoint wearing a bulk
 * action's clothes, and it would let any authenticated operator write any
 * column on any row they can see.
 *
 * TWO EXECUTION SHAPES, because they have genuinely different costs:
 *
 *   `mutate()`  one UPDATE per chunk. Suspending 50,000 clients is 50 queries,
 *               not 50,000. This is the path almost every bulk action wants.
 *
 *   `handle()`  receives the models, for anything that needs events, per-record
 *               logic, or related writes. Costs a hydration per chunk and is
 *               the honest price of doing per-record work.
 *
 * Authorization is an ABILITY NAME resolved against the resource policy, and it
 * defaults to `update` rather than to nothing — an action that forgets to
 * declare one is checked, not waved through.
 */
final class BulkAction
{
    private ?string $icon = null;

    private bool $destructive = false;

    private ?string $confirmation = null;

    private string $ability = 'update';

    /** @var array<string, mixed> */
    private array $mutate = [];

    private ?Closure $handle = null;

    private int $chunkSize = 1000;

    private function __construct(public readonly string $key, private readonly string $label) {}

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /** Renders in a warning tone and always confirms. */
    public function destructive(bool $destructive = true): self
    {
        $this->destructive = $destructive;

        return $this;
    }

    public function requiresConfirmation(string $message): self
    {
        $this->confirmation = $message;

        return $this;
    }

    /** The policy ability checked before anything is written. */
    public function authorize(string $ability): self
    {
        $this->ability = $ability;

        return $this;
    }

    /**
     * The attributes to set, as ONE update per chunk.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function mutate(array $attributes): self
    {
        if ($attributes === []) {
            throw new InvalidArgumentException("Bulk action [{$this->key}] declares an empty mutation.");
        }

        $this->mutate = $attributes;

        return $this;
    }

    /**
     * Per-record work, for anything an UPDATE cannot express.
     *
     * @param  Closure(\Illuminate\Database\Eloquent\Collection): void  $handle
     */
    public function handle(Closure $handle): self
    {
        $this->handle = $handle;

        return $this;
    }

    /**
     * How many records are touched per round trip.
     *
     * Bounded on both sides: a chunk of 1 is one query per record, and a chunk
     * of 100,000 builds a `WHERE id IN (...)` with 100,000 bindings, which most
     * drivers reject outright and the rest handle badly.
     */
    public function chunkSize(int $size): self
    {
        if ($size < 1 || $size > 5000) {
            throw new InvalidArgumentException('Chunk size must be between 1 and 5000.');
        }

        $this->chunkSize = $size;

        return $this;
    }

    public function getAbility(): string
    {
        return $this->ability;
    }

    public function getChunkSize(): int
    {
        return $this->chunkSize;
    }

    /** @return array<string, mixed> */
    public function getMutation(): array
    {
        return $this->mutate;
    }

    public function getHandler(): ?Closure
    {
        return $this->handle;
    }

    public function isRunnable(): bool
    {
        return $this->mutate !== [] || $this->handle !== null;
    }

    /**
     * The client half. Semantic only — no classes, no colours (§6.1).
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'icon' => $this->icon,
            'destructive' => $this->destructive,
            // A destructive action always confirms, even if the definition
            // forgot to say so.
            'confirmation' => $this->confirmation
                ?? ($this->destructive ? "{$this->label} the selected records?" : null),
        ];
    }
}
