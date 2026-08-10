<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables\Columns;

use InvalidArgumentException;

/**
 * A column an operator can write to without leaving the list.
 *
 * THE WORKFLOW ARGUMENT: flipping twenty clients from active to suspended
 * currently costs twenty page visits - list, open, edit, save, back, repeat.
 * That is the single largest difference between a panel that gets used and one
 * that gets worked around.
 *
 * THE SECURITY ARGUMENT IS THE HARDER HALF. An editable cell is a write
 * endpoint pointed at a named column, so three things are true of every
 * subclass without exception:
 *
 *   1. ONLY A DECLARED EDITABLE COLUMN MAY BE WRITTEN. The request names a
 *      column; the server looks it up in this table's definition and refuses
 *      anything that is not an EditableColumn. A column that merely exists on
 *      the model is not writable, so this can never become a general
 *      "set any attribute" endpoint.
 *
 *   2. THE VALUE IS VALIDATED AGAINST THE DECLARATION, not merely cast.
 *      `castValue()` is abstract for exactly this reason - a select accepts
 *      only its own declared options, so a hand-crafted request cannot write
 *      `status = 'god'` into an enum column that has no database constraint.
 *
 *   3. THE RECORD IS RE-AUTHORIZED. `update` is checked against the specific
 *      record, not the resource, because a policy may well permit editing some
 *      rows and not others.
 *
 * A cell edit is a full write. It is smaller on screen, not smaller in
 * consequence.
 */
abstract class EditableColumn extends Column
{
    protected ?string $confirmation = null;

    /** Require a confirmation before the write lands. */
    public function requiresConfirmation(string $message): static
    {
        $this->confirmation = $message;

        return $this;
    }

    /**
     * Coerce and VALIDATE an incoming value.
     *
     * Throws rather than returning null on a bad value: null is a legitimate
     * value for a nullable column, so using it to mean "rejected" would make an
     * invalid write indistinguishable from clearing a field.
     *
     * @throws InvalidArgumentException when the value is not acceptable.
     */
    abstract public function castValue(mixed $value): mixed;

    /**
     * The database column this writes to.
     *
     * Table-qualified names are stripped: a list joins, so a column is declared
     * as `clients.status`, but the write goes through the model, where the
     * attribute is just `status`.
     */
    public function writableColumn(): string
    {
        $column = $this->resolvedDatabaseColumn() ?? $this->key;

        return str_contains($column, '.') ? substr($column, (int) strrpos($column, '.') + 1) : $column;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'editable' => true,
            'confirmation' => $this->confirmation,
        ];
    }
}
