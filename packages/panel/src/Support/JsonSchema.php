<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use PanelKit\Panel\Forms\Fields\Field;
use PanelKit\Panel\Tables\Columns\Column;

/**
 * JSON Schema for the shapes the panel's endpoints send and accept.
 *
 * WITHOUT THIS THE REFERENCE SAID "No Body" ON EVERY OPERATION. It described the
 * paths, the verbs and the query string, and then went silent about the one
 * thing an integrator has to get right - what to POST and what comes back. A
 * document that stops there is not a reference; it is a table of contents.
 *
 * DERIVED FROM THE FORM AND THE TABLE, never written out. The panel already
 * knows what a Client accepts, because a `Form` declares it and the validator
 * enforces the same declaration. A hand-written schema would be a second copy of
 * that fact, and the way it fails is the dangerous direction: it stays plausible
 * while drifting, so somebody builds against a field that was renamed a year ago
 * and finds out from a 422 in production.
 *
 * WHAT IS SENT AND WHAT IS ACCEPTED ARE DIFFERENT SHAPES, and conflating them is
 * the usual mistake. A row carries the columns a LIST renders - joined values,
 * computed labels, things with no setter. A create body carries the FORM's
 * fields. They overlap and are not the same set, so they are generated
 * separately.
 *
 * NOTHING TENANT-SPECIFIC GETS IN. No option lists, no examples drawn from real
 * records: the document is generated once and read by everybody who can open it,
 * and one organisation's plan names are not part of the contract.
 */
final class JsonSchema
{
    /**
     * How a form field maps onto JSON.
     *
     * `format` IS ADVISORY AND STILL WORTH SETTING - a generator that knows a
     * string is a date emits a date type, and a human reading the document
     * learns the shape without a round trip.
     *
     * @var array<string, array<string, mixed>>
     */
    private const FIELD_TYPES = [
        'text' => ['type' => 'string'],
        'textarea' => ['type' => 'string'],
        'richtext' => ['type' => 'string', 'description' => 'Sanitised HTML.'],
        'password' => ['type' => 'string', 'format' => 'password'],
        'number' => ['type' => 'number'],
        'toggle' => ['type' => 'boolean'],
        'date' => ['type' => 'string', 'format' => 'date'],
        'datetime' => ['type' => 'string', 'format' => 'date-time'],
        'select' => ['type' => 'string'],
        'multiselect' => ['type' => 'array', 'items' => ['type' => 'string']],
        'file' => ['type' => 'string', 'format' => 'binary'],
        'keyvalue' => ['type' => 'object', 'additionalProperties' => ['type' => 'string']],
        'repeater' => ['type' => 'array', 'items' => ['type' => 'object']],
    ];

    /** @var array<string, array<string, mixed>> */
    private const COLUMN_TYPES = [
        'text' => ['type' => 'string'],
        'badge' => ['type' => 'string'],
        'select' => ['type' => 'string'],
        'icon' => ['type' => 'string'],
        'image' => ['type' => 'string', 'format' => 'uri'],
        'toggle' => ['type' => 'boolean'],
        'date' => ['type' => 'string', 'format' => 'date'],
        'datetime' => ['type' => 'string', 'format' => 'date-time'],
    ];

    /**
     * One row, as a list or a read returns it.
     *
     * `id` IS ADDED EXPLICITLY. It is never a declared column - the table
     * selects it separately as the key - so a schema built from columns alone
     * would describe rows without the one field every caller needs to do
     * anything with them.
     *
     * @param  list<Column>  $columns
     * @return array<string, mixed>
     */
    public function row(array $columns): array
    {
        $properties = [
            'id' => ['type' => 'integer', 'description' => 'The record key.'],
        ];

        foreach ($columns as $column) {
            $properties[$column->key] = [
                ...(self::COLUMN_TYPES[$column->type()] ?? ['type' => 'string']),
                'description' => $column->resolvedLabel(),
            ];
        }

        return [
            'type' => 'object',
            'properties' => $properties,
            /*
             * OPEN, deliberately. A row also carries per-record action state and
             * whatever `alsoSelect` added, and a closed schema would declare a
             * real response invalid - which is worse than an incomplete one,
             * because a strict client would reject it.
             */
            'additionalProperties' => true,
        ];
    }

    /**
     * The envelope a list endpoint returns.
     *
     * THE TOTAL IS NULLABLE AND SAYS WHY. It arrives as a deferred prop rather
     * than blocking the rows, so a caller reading the first response and finding
     * no count has not hit an error - and without that written down, the obvious
     * conclusion is that the endpoint is broken.
     *
     * @param  list<Column>  $columns
     * @return array<string, mixed>
     */
    public function page(array $columns): array
    {
        return [
            'type' => 'object',
            'properties' => [
                'rows' => ['type' => 'array', 'items' => $this->row($columns)],
                'nextCursor' => [
                    'type' => ['string', 'null'],
                    'description' => 'Pass back as ?cursor to fetch the next page. Null on the last one.',
                ],
                'total' => [
                    'type' => ['integer', 'null'],
                    'description' => 'Deferred - null until it resolves, rather than blocking the rows.',
                ],
            ],
            'additionalProperties' => true,
        ];
    }

    /**
     * What a create or update accepts.
     *
     * REQUIRED IS TAKEN FROM THE FIELD, so the document and the validator cannot
     * disagree about which attributes are mandatory - they are reading the same
     * declaration.
     *
     * PASSWORDS AND FILES ARE STILL LISTED. A schema that hid them would be
     * describing a different endpoint; what matters is that no VALUE from any
     * record ever appears here, and none does - this is structure only.
     *
     * @param  list<Field>  $fields
     * @return array<string, mixed>
     */
    public function writeBody(array $fields, bool $partial = false): array
    {
        $properties = [];
        $required = [];

        foreach ($fields as $field) {
            $shape = $field->toSchema();
            $type = (string) $shape['type'];

            $properties[$field->key] = array_filter([
                ...(self::FIELD_TYPES[$type] ?? ['type' => 'string']),
                'description' => $shape['help'] ?? $shape['label'] ?? null,
            ], static fn (mixed $v): bool => $v !== null);

            if (($shape['required'] ?? false) === true) {
                $required[] = $field->key;
            }
        }

        return array_filter([
            'type' => 'object',
            'properties' => $properties,
            /*
             * AN UPDATE REQUIRES NOTHING, and that is not laziness. `PUT` here
             * accepts the subset a form submitted, so demanding every required
             * attribute would document an endpoint that refuses requests it
             * actually accepts - and the reader would send fields they did not
             * mean to change.
             */
            'required' => $partial ? [] : $required,
            'additionalProperties' => false,
        ], static fn (mixed $v): bool => $v !== []);
    }

    /**
     * The body a bulk action takes.
     *
     * IT NAMES A KEY AND A SELECTION, NEVER AN ATTRIBUTE SET. What the action
     * does lives on the server; a request that could describe the change would
     * be a request that could describe any change.
     *
     * @param  list<string>  $actions
     * @return array<string, mixed>
     */
    public function bulkBody(array $actions): array
    {
        return [
            'type' => 'object',
            'properties' => array_filter([
                'action' => array_filter([
                    'type' => 'string',
                    'description' => 'A key the resource declared.',
                    'enum' => $actions,
                ], static fn (mixed $v): bool => $v !== []),
                'ids' => [
                    'type' => 'array',
                    'items' => ['type' => 'integer'],
                    'description' => 'Ignored when `all` is true.',
                ],
                'all' => [
                    'type' => 'boolean',
                    'description' => 'Apply to every record matching the current filters, not just the page.',
                ],
                'filters' => [
                    'type' => 'object',
                    'description' => 'The filter state `all` is resolved against. Same keys as the query string.',
                    'additionalProperties' => true,
                ],
            ]),
            'required' => ['action'],
            'additionalProperties' => false,
        ];
    }

    /**
     * The body a single-record action takes.
     *
     * @param  list<string>  $actions
     * @return array<string, mixed>
     */
    public function recordActionBody(array $actions): array
    {
        return [
            'type' => 'object',
            'properties' => [
                'action' => array_filter([
                    'type' => 'string',
                    'description' => 'A key the resource declared.',
                    'enum' => $actions,
                ], static fn (mixed $v): bool => $v !== []),
            ],
            'required' => ['action'],
            'additionalProperties' => false,
        ];
    }

    /**
     * What a validation failure looks like.
     *
     * WORTH DOCUMENTING BECAUSE IT IS THE RESPONSE INTEGRATORS ACTUALLY HANDLE.
     * The happy path is guessed correctly; the error shape is the one people get
     * wrong, and a 422 whose body nobody expected reads as a server fault.
     *
     * @return array<string, mixed>
     */
    public function validationError(): array
    {
        return [
            'type' => 'object',
            'properties' => [
                'message' => ['type' => 'string'],
                'errors' => [
                    'type' => 'object',
                    'description' => 'Attribute name to a list of messages.',
                    'additionalProperties' => ['type' => 'array', 'items' => ['type' => 'string']],
                ],
            ],
            'additionalProperties' => true,
        ];
    }
}
