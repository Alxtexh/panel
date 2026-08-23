# 16. Workflows and states

Resource-level workflows map a status column to labelled states and allowed
transitions. They are opt-in: a resource without `workflow()` pays no cost.

## Declaring a workflow

```php
use Alxtexh\Panel\Workflow\Transition;
use Alxtexh\Panel\Workflow\Workflow;

public static function workflow(): Workflow
{
    return Workflow::make('status')
        ->model(Order::class)
        ->states([
            'draft' => ['label' => 'Draft', 'color' => 'neutral'],
            'submitted' => ['label' => 'Submitted', 'color' => 'info'],
            'fulfilled' => ['label' => 'Fulfilled', 'color' => 'success'],
        ])
        ->transitions([
            Transition::make('submit', 'Submit order')
                ->from(['draft'])
                ->to('submitted')
                ->authorize('update')
                ->icon('send'),

            Transition::make('fulfill', 'Mark fulfilled')
                ->from(['submitted'])
                ->to('fulfilled')
                ->authorize('update')
                ->confirm('Close this order?'),
        ]);
}
```

Pair the model with `HasStateTransitions` so disallowed hops are refused at
execution time:

```php
use Alxtexh\Panel\Models\Concerns\HasStateTransitions;

final class Order extends Model
{
    use HasStateTransitions;

    /** @var array<string, list<string>> */
    protected array $transitions = [
        'draft' => ['submitted'],
        'submitted' => ['fulfilled'],
        'fulfilled' => [],
    ];
}
```

The workflow merges transition actions into the table row menu. The record view
page shows the current state beside the title and lists allowed transitions in
the header.

## UI and authorization

- Index and view pages show status badges using the workflow colour map.
- Transition buttons appear only when the current state allows the hop and the
  user passes the transition's ability check (re-checked on the server).
- Successful transitions are recorded in the audit trail as `state_transition`
  events when the action uses `transitionTo()`.

## Visual board

When a resource declares `workflow()`, the package mounts a read-only diagram at
`/{resource}/workflow` (for example `/tickets/workflow`). Nodes are states;
edges are transitions from the PHP definition. The record view links to this
board when a workflow is present.

The schema includes `routes.workflow` and a `graph` payload (`nodes` + `edges`)
so custom UIs can draw the same machine without a second round trip.

## Status history

The record view includes a **Status history** strip that lists recent
`state_transition` audit entries for that record (actor, from, to, time). It is
opt-in with the workflow: resources without `workflow()` do not query or render
it. Entries still also appear in the general audit drawer.

## Demo

The packaged `TicketResource` declares a workflow for open, pending, and
resolved tickets. Open a ticket in the playground, use the transition buttons,
then open **Workflow** for the diagram and scroll to **Status history**.

- Diagram: `/tickets/workflow`
- Record: `/tickets/{id}`

See `packages/panel/src/Ticketing/TicketResource.php`.

## Deferred

- Drag-and-drop editing that writes the graph back to the database (the
  definition stays in PHP for this version)
