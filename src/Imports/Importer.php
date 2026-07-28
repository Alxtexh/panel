<?php

declare(strict_types=1);

namespace PanelKit\Panel\Imports;

use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;
use PanelKit\Panel\Forms\Form;

/**
 * Reads rows, validates them one at a time, and reports what failed.
 *
 * THE COUNTERPART TO THE EXPORT, and the harder direction. An export writes what
 * the panel already believes; an import accepts a file somebody assembled in a
 * spreadsheet, where a column is missing, a date is written three different ways
 * in the same file, and row 4,000 has a stray apostrophe.
 *
 * ONE BAD ROW MUST NOT ABORT THE BATCH. The instinct is a transaction around the
 * whole file so it either lands or does not, and it is wrong for the case that
 * actually happens: an operator uploads 5,000 subscribers, three of them have a
 * malformed phone number, and rolling back the other 4,997 means fixing three
 * cells and re-uploading everything - while nothing tells them which three. Rows
 * are independent; failures are collected and reported by row number.
 *
 * THE FORM IS THE VALIDATION, and reusing it is the point. An import that
 * declared its own rules would drift from the form's the first time either
 * changed, and the drift would be silent: a value the form refuses would enter
 * through the importer, which is a way of writing records the panel itself
 * considers invalid.
 *
 * A DRY RUN IS THE SAME CODE PATH. It validates and maps everything and writes
 * nothing - not a separate "check" implementation, which would be a second thing
 * to keep in step and would eventually approve a file the real run rejects.
 */
final class Importer
{
    /** Rows examined per pass. Bounded so a large file cannot exhaust memory. */
    public const MAX_ROWS = 10000;

    /** @param array<string, string> $mapping file column => field key */
    public function __construct(
        private readonly Form $form,
        private readonly array $mapping,
    ) {
        $declared = array_map(
            static fn (\PanelKit\Panel\Forms\Fields\Field $f): string => $f->key,
            $form->fields(),
        );

        foreach ($mapping as $column => $field) {
            if (! in_array($field, $declared, true)) {
                /*
                 * A MAPPING TO AN UNDECLARED FIELD IS REFUSED, not ignored.
                 *
                 * Ignoring it would mean a file mapping `tenant_id` or
                 * `is_admin` imports cleanly and silently drops the column -
                 * which reads as success and is the shape of failure this
                 * project exists to avoid. It is also the obvious way to try to
                 * write a column the form deliberately does not expose.
                 */
                throw new InvalidArgumentException(
                    "[{$field}] is not a field on this form, so [{$column}] cannot map to it."
                );
            }
        }

        /*
         * EVERY REQUIRED FIELD MUST BE MAPPED, and this is checked ONCE on the
         * mapping rather than once per row.
         *
         * Only the rules for MAPPED fields are applied below - otherwise a file
         * that legitimately omits an optional column would fail on every row.
         * That is right for optional fields and silently wrong for required
         * ones: an unmapped `name` would simply never be validated, and five
         * thousand rows would import with a null the form considers impossible.
         *
         * A test caught exactly that. It belongs here because it is a property
         * of the MAPPING, not of any row - and saying so before reading the
         * file means the operator is told "map the Name column" instead of
         * receiving five thousand identical row errors.
         */
        $missing = [];

        foreach ($form->fields() as $field) {
            if (! in_array('required', $field->rules(), true)) {
                continue;
            }

            if (! in_array($field->key, $mapping, true)) {
                $missing[] = $field->key;
            }
        }

        if ($missing !== []) {
            throw new InvalidArgumentException(
                'These fields are required and no column maps to them: '.implode(', ', $missing).'.'
            );
        }
    }

    /**
     * Validate and map every row.
     *
     * @param  iterable<int, array<string, mixed>>  $rows  Keyed by file column.
     */
    public function process(iterable $rows): ImportResult
    {
        $rules = $this->form->rules();
        $prepared = [];
        $failures = [];
        $seen = 0;

        foreach ($rows as $index => $row) {
            if ($seen >= self::MAX_ROWS) {
                $failures[] = new ImportFailure(
                    // +2: rows are zero-indexed and a spreadsheet's first line
                    // is the header, so the operator's row 1 is our index 0.
                    line: $index + 2,
                    messages: ['This file has more than '.self::MAX_ROWS.' rows. Split it and import again.'],
                );

                break;
            }

            $seen++;

            $attributes = $this->map($row);

            /*
             * Only the rules for fields this file actually maps.
             *
             * A file that legitimately omits an optional column must not fail
             * on it, and - more importantly - a REQUIRED field the file does
             * not map must fail loudly rather than being quietly defaulted.
             * Both follow from validating the mapped subset.
             */
            $applicable = array_intersect_key($rules, $attributes);

            $validator = Validator::make($attributes, $applicable);

            if ($validator->fails()) {
                $failures[] = new ImportFailure(
                    line: $index + 2,
                    messages: array_merge(...array_values($validator->errors()->toArray())),
                );

                continue;
            }

            $prepared[] = $this->form->sanitize($validator->validated());
        }

        return new ImportResult(prepared: $prepared, failures: $failures);
    }

    /**
     * Turn a file row into form input.
     *
     * COLUMNS THE MAPPING DOES NOT NAME ARE DROPPED. A spreadsheet carries
     * whatever somebody left in it - an internal reference, a formula column, a
     * note - and none of it is input to this form. Only mapped columns survive,
     * which is the same rule `Form::sanitize` applies and for the same reason.
     *
     * @param  array<string, mixed>  $row
     * @return array<string, mixed>
     */
    private function map(array $row): array
    {
        $out = [];

        foreach ($this->mapping as $column => $field) {
            if (! array_key_exists($column, $row)) {
                continue;
            }

            $value = $row[$column];

            // A spreadsheet's empty cell is an empty string, not null, and an
            // empty string fails `nullable` rules that a null would pass.
            $out[$field] = is_string($value) && trim($value) === '' ? null : $value;
        }

        return $out;
    }
}
