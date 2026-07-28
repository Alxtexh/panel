<?php

declare(strict_types=1);

namespace PanelKit\Panel\Actions;

use Closure;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

/**
 * A mutation applied to ONE record, from its row menu.
 *
 * The single-record twin of BulkAction, and it exists for the same reason:
 * THE CLIENT SENDS AN ACTION KEY, NEVER AN ATTRIBUTE SET. What the action does
 * is declared here, in server-side code; the request may only name which
 * declared action to run against which record it can already see. Accepting
 * `{status: 'suspended'}` from a row menu is a mass-assignment endpoint with a
 * nicer label on it.
 *
 * WHY NOT JUST REUSE BulkAction WITH ONE ID. Because the two differ in the
 * thing that matters most - what they are allowed to do. A bulk action is an
 * UPDATE over a selection and defaults to the `update` ability. A record action
 * covers a wider range: replicate CREATES a row, an export READS one, a
 * "resend invoice" neither reads nor writes the record it hangs off. Folding
 * them together would mean one default ability for genuinely different acts,
 * and the safe default for one is the wrong default for another.
 *
 * THREE SHAPES, and a given action is exactly one of them:
 *
 *   `mutate()`   set columns on this record. One UPDATE, no hydration cost.
 *   `handle()`   receives the model, for anything needing events or related
 *                writes - replication, state machines, notifications.
 *   `link()`     no mutation at all: View and Edit are record actions too, and
 *                keeping them in the same list is what lets a resource reorder
 *                or hide them without editing a Vue file.
 */
final class RecordAction
{
    private ?string $icon = null;

    private bool $destructive = false;

    private ?string $confirmation = null;

    /**
     * The ability checked against the resource policy FOR THIS RECORD.
     *
     * `update` by default rather than nothing: an action that forgets to
     * declare one is checked, not waved through. Anything that creates must say
     * `create`, and anything that only reads should say `view` - a policy check
     * that is broader than the act it guards is a permission nobody granted
     * on purpose.
     */
    private string $ability = 'update';

    /** @var array<string, mixed> */
    private array $mutate = [];

    private ?Closure $handle = null;

    private ?Closure $link = null;

    /** Whether the row disappears from the current list after this runs. */
    private bool $removesRow = false;

    /** Filament's palette, so a ported resource reads the same in both. */
    public const COLORS = ['primary', 'gray', 'success', 'warning', 'danger', 'info'];

    private ?string $color = null;

    private ?Closure $visible = null;

    private function __construct(public readonly string $key, private readonly string $label)
    {
        if (preg_match('/^[a-z][a-z0-9_-]*$/', $key) !== 1) {
            throw new InvalidArgumentException("[{$key}] is not a valid action key.");
        }
    }

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /** Renders in the destructive tone and, by convention, asks first. */
    public function destructive(bool $destructive = true): self
    {
        $this->destructive = $destructive;

        return $this;
    }

    /**
     * The tone this action carries in the menu.
     *
     * COLOUR IS THE ONLY GROUPING LEFT. The menu used to carry headings -
     * "STATUS", "MANAGE" - which cost two lines of chrome each and made a
     * six-item list look like a settings page. Colour separates a price change
     * from a visibility toggle at a glance and costs no vertical space.
     *
     * NAMES MATCH FILAMENT'S so a resource ported from one reads the same in
     * the other, and so nobody has to learn a second vocabulary for the same
     * six ideas.
     *
     * DESTRUCTIVE IS NOT A COLOUR. `destructive()` also moves the action last
     * and is refused in places a delete should not be; setting `danger` here
     * would paint an action red without any of that, which is the worst of both
     * - it looks dangerous and is treated as ordinary.
     */
    public function color(string $color): self
    {
        if (! in_array($color, self::COLORS, true)) {
            throw new InvalidArgumentException(
                "[{$this->key}] has unknown colour [{$color}]. One of: ".implode(', ', self::COLORS).'.'
            );
        }

        $this->color = $color;

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

    /** @param Closure(Model): mixed $handle */
    public function handle(Closure $handle): self
    {
        $this->handle = $handle;

        return $this;
    }

    /**
     * A navigation, not a mutation.
     *
     * Takes the row's attributes for the same reason `visible()` does.
     *
     * @param  Closure(array<string, mixed>): string  $link
     */
    public function link(Closure $link): self
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Whether the acted-on row leaves the current view.
     *
     * The client needs to know, because the two outcomes look different: a
     * status change updates in place, a delete or an archive has to drop the
     * row or the operator clicks it again. Guessing from `destructive` would be
     * wrong in both directions - archiving is not destructive and does remove
     * the row; a hard reset is destructive and does not.
     */
    public function removesRow(bool $removes = true): self
    {
        $this->removesRow = $removes;

        return $this;
    }

    /**
     * Hide the action for records it does not apply to.
     *
     * IT RECEIVES THE ROW'S ATTRIBUTES, NOT A MODEL, and that is a performance
     * decision rather than a stylistic one. The list never hydrates models -
     * that is most of why it is fast on a million rows - so a closure typed
     * against `Model` could only be evaluated by hydrating 25 of them per page,
     * which is exactly the cost the table exists to avoid. An array works
     * identically in both places: the list passes the row it already has, and
     * the endpoint passes the record's attributes.
     *
     * PRESENTATION ONLY. It stops "Restore" appearing on a row that was never
     * deleted; it is NOT a permission check, and the ability above is still
     * enforced on execution. A client that calls a hidden action still has to
     * pass the policy AND this check.
     *
     * @param  Closure(array<string, mixed>): bool  $visible
     */
    public function visible(Closure $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function isLink(): bool
    {
        return $this->link !== null;
    }

    public function ability(): string
    {
        return $this->ability;
    }

    /** @param array<string, mixed> $attributes */
    public function appliesTo(array $attributes): bool
    {
        return $this->visible === null || ($this->visible)($attributes) === true;
    }

    /** @param array<string, mixed> $attributes */
    public function urlFor(array $attributes): ?string
    {
        return $this->link === null ? null : ($this->link)($attributes);
    }

    /**
     * Run it, and say whether anything changed.
     *
     * A link action is not runnable: there is nothing to execute, and letting
     * the endpoint "run" one would turn a navigation into a POST that quietly
     * did nothing.
     */
    public function run(Model $record): void
    {
        if ($this->link !== null) {
            throw new InvalidArgumentException("[{$this->key}] is a link and cannot be executed.");
        }

        if ($this->handle !== null) {
            ($this->handle)($record);

            return;
        }

        if ($this->mutate === []) {
            throw new InvalidArgumentException("[{$this->key}] declares nothing to do.");
        }

        // forceFill, because the attributes come from the DEFINITION rather
        // than from a request - the mass-assignment guard is protecting against
        // input, and there is none here.
        $record->forceFill($this->mutate)->save();
    }

    /**
     * Structure only. No record data, no CSS classes (antipatterns §6.1).
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return array_filter([
            'key' => $this->key,
            'label' => $this->label,
            'icon' => $this->icon,
            'destructive' => $this->destructive,
            'confirmation' => $this->confirmation,
            'link' => $this->isLink(),
            'removesRow' => $this->removesRow,
            'color' => $this->color,
        ], static fn (mixed $v): bool => $v !== null && $v !== false);
    }
}
