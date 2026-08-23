<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Actions;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Duplicate a record.
 *
 * IT IS AUTHORIZED AS A CREATE, NOT AN UPDATE, and that is the whole reason
 * this is a class rather than three lines in a closure. Replicate reads like an
 * operation on the row it hangs off, so the obvious ability to check is the one
 * every other row action checks - and it is wrong. The act produces a NEW
 * record, so somebody with permission to edit clients but not to add them must
 * not be able to add one by duplicating. Getting this backwards hands out a
 * create permission through a menu item nobody thought of as creating anything.
 *
 * THE TENANT COMES FROM CONTEXT, NEVER FROM THE SOURCE ROW. Copying
 * `tenant_id` across looks harmless - the source was scoped, so it must be the
 * right tenant - but that reasoning holds only while the scope is correct, and
 * this is exactly the kind of write that should not depend on that. Setting it
 * from context means a copy cannot land in another organisation even if the row
 * it came from somehow did.
 *
 * UNIQUE COLUMNS ARE THE CALLER'S PROBLEM, and the class makes that explicit
 * rather than guessing. There is no reliable way to know that `access_code`
 * must differ while `plan_type` may not - the database knows there is a unique
 * index, but not what a sensible new value looks like. So `except()` drops
 * columns and `then()` fills them in, and a resource that declares neither gets
 * a duplicate-key error rather than a silently wrong row.
 *
 * RELATIONS ARE NOT COPIED. Eloquent's own `replicate()` copies attributes
 * only, and this deliberately does not extend that: "duplicate this client"
 * almost never means "and duplicate its 40,000 sessions", and an action that
 * sometimes copies children and sometimes does not is worse than one that never
 * does. Copy them in `then()` where the intent is visible.
 */
final class ReplicateAction
{
    /**
     * Attributes never carried to the copy, whatever the caller says.
     *
     * The key and the timestamps: a replica is a new row that has just been
     * created, and inheriting the original's `created_at` makes it sort as
     * though it always existed.
     *
     * @var list<string>
     */
    private const NEVER_COPIED = ['id', 'created_at', 'updated_at', 'deleted_at'];

    /** @var list<string> */
    private array $except = [];

    private ?Closure $then = null;

    private string $label = 'Duplicate';

    private ?string $confirmation = null;

    private function __construct(private readonly string $key) {}

    public static function make(string $key = 'replicate'): self
    {
        return new self($key);
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Columns to leave off the copy - the unique ones, usually.
     *
     * @param  list<string>  $columns
     */
    public function except(array $columns): self
    {
        $this->except = array_values($columns);

        return $this;
    }

    /**
     * Adjust the copy before it is saved.
     *
     * Receives the unsaved replica and the original, in that order, because the
     * common case is deriving a new value from an old one - "Copy of {name}",
     * a fresh access code, a reset status.
     *
     * @param  Closure(Model, Model): void  $then
     */
    public function then(Closure $then): self
    {
        $this->then = $then;

        return $this;
    }

    public function confirm(string $message): self
    {
        $this->confirmation = $message;

        return $this;
    }

    /** Build the record action this configures. */
    public function toAction(): RecordAction
    {
        $except = [...self::NEVER_COPIED, ...$this->except];
        $then = $this->then;

        $action = RecordAction::make($this->key, $this->label)
            ->icon('copy')
            // See the class note: a duplicate is a CREATE.
            ->authorize('create')
            ->handle(function (Model $record) use ($except, $then): void {
                $copy = $record->replicate($except);

                /*
                 * From context, never from the source row - the same rule the
                 * record controller follows when creating from a form.
                 */
                $context = app(TenantContext::class);

                if ($context->shouldScopeByColumn()) {
                    $key = $context->currentKey();

                    if ($key !== null) {
                        $copy->setAttribute($context->column(), $key);
                    }
                }

                if ($then !== null) {
                    $then($copy, $record);
                }

                $copy->save();
            });

        if ($this->confirmation !== null) {
            $action->confirm($this->confirmation);
        }

        return $action;
    }
}
