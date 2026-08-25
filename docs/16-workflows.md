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

## Visual board and editor

When a resource declares `workflow()`, the package mounts a workflow page at
`/{resource}/workflow` (for example `/tickets/workflow`). The board shows the
current state machine as a diagram: nodes are states, edges are transitions.

### Editing states and transitions

Users with `update` permission on the resource see an "Edit workflow" button.
Clicking it opens a form editor where you can:

- Add, remove, or rename states (key, label, color).
- Add, remove, or modify transitions (key, label, target state, source states).
- Change the action group label.

Click "Save workflow" to persist the changes. Edits are stored in the
`panel_workflow_overrides` database table and take effect immediately. The
diagram reloads to reflect the saved definition. The same save also stores the
current canvas node positions.

### Dragging nodes (layout)

Users with `update` permission can drag state nodes on the board. Moving a node
marks the layout dirty; "Save layout" PUTs the current definition plus
`positions` to the same endpoint. Positions are JSON keyed by state id:

```json
{
    "positions": {
        "draft": { "x": 40, "y": 80 },
        "published": { "x": 320, "y": 80 }
    }
}
```

Without saved positions the board uses an automatic rank-based layout.

### Dragging edges (create and reconnect)

Users with `update` permission can also edit transitions on the canvas:

- Drag from a state's **right handle** onto another state to create a
  transition (`from: [source]`, `to: target`, auto key and label).
- Drag an existing edge's **source** or **target** endpoint onto another
  state to reconnect that end. Reconnecting a target changes `to` for the
  whole transition key (all visual edges that share the key). Reconnecting
  one source among a multi-`from` list updates only that entry.
- Empty `from` (any-state) edges: reconnecting a source collapses the
  transition to an explicit single-source `from` list.
- Click an edge (or its endpoints), then press Delete/Backspace or use the
  Delete control to remove that visual edge. Multi-source transitions drop
  only that source; a single-source transition is removed entirely.
- Click a state, then Delete/Backspace to hide it from the board (at least
  one state must remain). Save layout persists the remaining states.
- Undo (button or Ctrl/Cmd+Z) restores the last canvas change before save.

"Save layout" PUTs the current definition (including canvas-created,
reconnected, or deleted transitions) plus `positions`. The form editor
remains the fallback for renaming, abilities, icons, colours, confirm copy,
and multi-source checklists.

Light edge auto-routing fans parallel edges between the same pair and bows
curves when the chord would cross another state box. Full orthogonal
avoidance is not shipped.

### PHP default vs. DB override

The PHP `workflow()` definition serves as the default and seed. When an admin
saves changes from the board, those changes are stored in the database and
**the DB definition wins** at runtime:

- `Resource::resolvedWorkflow()` returns the DB override when one exists, or
  the PHP default otherwise.
- The `column` and `model` always come from the PHP definition (they reference
  code artifacts that cannot be invented from the UI).
- `HasStateTransitions::stateTransitions()` also checks for a DB override, so
  runtime transition guards match the board the admin saved.
- Canvas `positions` are board-only metadata; they do not affect transition
  rules.

To reset a resource back to its PHP definition, delete its row from the
`panel_workflow_overrides` table.

### PUT endpoint

`PUT /{resource}/workflow` accepts:

```json
{
    "group_label": "Status",
    "states": {
        "draft": { "label": "Draft", "color": "neutral" },
        "published": { "label": "Published", "color": "success" }
    },
    "transitions": [
        {
            "key": "publish",
            "label": "Publish",
            "to": "published",
            "from": ["draft"],
            "ability": "update"
        }
    ],
    "positions": {
        "draft": { "x": 40, "y": 80 },
        "published": { "x": 320, "y": 80 }
    }
}
```

Validation enforces:

- At least one state.
- Every transition `to` and `from` must reference a declared state key.
- Position keys that are not declared states are dropped.
- Requires `update` ability (not `viewAny` alone).
- When `positions` is omitted, an existing layout is preserved so a form-only
  client cannot wipe coordinates by accident.

### What works / what does not

**Works**

- Drag state nodes on the canvas and persist `{ x, y }` via PUT.
- Drag-to-create transitions from a node's out-handle to another state.
- Drag-to-reconnect existing edge source or target endpoints.
- Delete a selected edge or state on the canvas (Delete/Backspace or Delete control).
- Undo the last canvas change before save (Undo button or Ctrl/Cmd+Z).
- Light auto-routing: parallel fan-out and bow around crossed state boxes.
- Form editor for add/remove/rename states and transitions (ability, icon,
  colour, confirm, multi-source).
- SVG edges drawn between current node positions.
- Same auth and validation path for layout saves and definition saves.

**Does not (yet)**

- Full orthogonal edge routing or collision-free pathfinding.
- Collaborative live cursors or multi-step undo history across saves.

### Limitations

- State keys are freeform strings. Renaming a key does not migrate existing
  records in the status column.
- The `column` and `model` cannot be changed from the UI.

The schema includes `routes.workflow` and a `graph` payload (`nodes` + `edges`)
so custom UIs can draw the same machine without a second round trip. The
workflow page also receives a `positions` prop from the override row.

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
