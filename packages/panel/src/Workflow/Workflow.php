<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Workflow;

use Alxtexh\Panel\Actions\ActionGroup;
use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Tables\Columns\BadgeColumn;
use Alxtexh\Panel\Tables\Table;

/**
 * Resource-level workflow: states on a column, transitions as record actions.
 *
 * Opt-in and zero cost when unused: declare `Resource::workflow()` and the
 * definition merges transition actions into the table schema.
 */
final class Workflow
{
    /** @var array<string, array{label: string, color: string}> */
    private array $states = [];

    /** @var list<Transition> */
    private array $transitions = [];

    /** @var class-string|null */
    private ?string $model = null;

    private string $groupLabel = 'Status';

    public function __construct(private readonly string $column) {}

    public static function make(string $column): self
    {
        return new self($column);
    }

    /** @param class-string $model */
    public function model(string $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function group(string $label): self
    {
        $this->groupLabel = $label;

        return $this;
    }

    /**
     * @param  array<string, string|array{label?: string, color?: string}>  $states
     */
    public function states(array $states): self
    {
        $normalized = [];

        foreach ($states as $value => $definition) {
            if (is_string($definition)) {
                $normalized[(string) $value] = [
                    'label' => $definition,
                    'color' => 'neutral',
                ];

                continue;
            }

            $normalized[(string) $value] = [
                'label' => (string) ($definition['label'] ?? str((string) $value)->headline()->value()),
                'color' => (string) ($definition['color'] ?? 'neutral'),
            ];
        }

        $this->states = $normalized;

        return $this;
    }

    /** @param list<Transition> $transitions */
    public function transitions(array $transitions): self
    {
        $this->transitions = array_values($transitions);

        return $this;
    }

    public function column(): string
    {
        return $this->column;
    }

    public function rowKey(): string
    {
        return str_contains($this->column, '.')
            ? substr($this->column, (int) strrpos($this->column, '.') + 1)
            : $this->column;
    }

    /** @return array<string, list<string>> */
    public function transitionsMap(): array
    {
        $map = [];

        foreach ($this->states as $state => $_) {
            $map[$state] = [];
        }

        foreach ($this->transitions as $transition) {
            foreach ($transition->sources() as $from) {
                $map[$from][] = $transition->destination();
            }
        }

        foreach ($map as $from => $targets) {
            $map[$from] = array_values(array_unique($targets));
        }

        return $map;
    }

    public function badgeColumn(string $key = 'status'): BadgeColumn
    {
        $colors = [];
        $labels = [];

        foreach ($this->states as $value => $definition) {
            $colors[$value] = $definition['color'];
            $labels[$value] = $definition['label'];
        }

        return BadgeColumn::make($key)
            ->from($this->column)
            ->colors($colors)
            ->labels($labels);
    }

    /** @return list<RecordAction|ActionGroup> */
    public function recordActions(): array
    {
        if ($this->transitions === []) {
            return [];
        }

        $actions = array_map(
            fn (Transition $transition): RecordAction => $transition->toRecordAction($this->column, $this->model),
            $this->transitions,
        );

        if ($this->groupLabel === '') {
            return $actions;
        }

        return [ActionGroup::make($this->groupLabel)->actions($actions)];
    }

    public function applyTo(Table $table): Table
    {
        $existing = $this->existingActionKeys($table);

        $toAdd = [];

        foreach ($this->recordActions() as $entry) {
            if ($entry instanceof ActionGroup) {
                $groupActions = [];

                foreach ($entry->getActions() as $action) {
                    if (! in_array($action->key, $existing, true)) {
                        $groupActions[] = $action;
                        $existing[] = $action->key;
                    }
                }

                if ($groupActions !== []) {
                    $toAdd[] = ActionGroup::make($entry->label)->actions($groupActions);
                }

                continue;
            }

            if (! in_array($entry->key, $existing, true)) {
                $toAdd[] = $entry;
                $existing[] = $entry->key;
            }
        }

        if ($toAdd === []) {
            return $table;
        }

        return $table->recordActions([...$table->getRecordActions(), ...$toAdd]);
    }

    /**
     * @param  array<string, mixed>  $record
     * @return list<array<string, mixed>>
     */
    public function actionsForRecord(array $record, callable $can): array
    {
        $current = (string) ($record[$this->rowKey()] ?? '');
        $out = [];

        foreach ($this->transitions as $transition) {
            if (! $transition->appliesFrom($current)) {
                continue;
            }

            if ($this->model !== null && class_exists($this->model)) {
                /** @var class-string<\Alxtexh\Panel\Models\Concerns\HasStateTransitions&\Illuminate\Database\Eloquent\Model> $model */
                $model = $this->model;

                if (! $model::canTransitionFromAttributes($record, $transition->destination(), $this->column)) {
                    continue;
                }
            }

            if (! $can($transition->ability())) {
                continue;
            }

            $out[] = $transition->toSchema();
        }

        return $out;
    }

    /** @return array<string, mixed>|null */
    public function stateDefinition(?string $value): ?array
    {
        if ($value === null || $value === '') {
            return null;
        }

        return $this->states[(string) $value] ?? [
            'label' => str((string) $value)->headline()->value(),
            'color' => 'neutral',
        ];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            'column' => $this->column,
            'group' => $this->groupLabel,
            'states' => $this->states,
            'transitions' => array_map(
                static fn (Transition $transition): array => $transition->toSchema(),
                $this->transitions,
            ),
        ];
    }

    /** @return list<string> */
    private function existingActionKeys(Table $table): array
    {
        $keys = [];

        foreach ($table->getRecordActions() as $entry) {
            if ($entry instanceof RecordAction) {
                $keys[] = $entry->key;

                continue;
            }

            foreach ($entry->getActions() as $action) {
                $keys[] = $action->key;
            }
        }

        return $keys;
    }
}
