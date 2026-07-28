<?php

declare(strict_types=1);

/*
 | Panel strings.
 |
 | ONE FILE PER CONCERN rather than one enormous file, because a translator works
 | through a file at a time and "everything" is not a unit of work anybody can
 | pick up.
 |
 | KEYS DESCRIBE THE PLACE, NOT THE ENGLISH. `actions.save` survives the button
 | being renamed to "Apply"; a key of `save` named after its own English value
 | has to be renamed everywhere the day the wording changes, which is the day
 | nobody wants to touch forty files.
 */

return [
    'actions' => [
        'save' => 'Save',
        'cancel' => 'Cancel',
        'delete' => 'Delete',
        'create' => 'Create',
        'edit' => 'Edit',
        'search' => 'Search',
        'export' => 'Export',
        'import' => 'Import',
        'discard' => 'Discard',
        'retry' => 'Try again',
    ],

    'table' => [
        'empty' => 'Nothing here yet.',
        'no_results' => 'No matches for :term.',
        'showing' => 'Showing :from-:to of :total',
        'per_page' => 'Per page',
        'selected' => ':count selected|:count selected',
    ],

    'record' => [
        'created' => ':label created.',
        'updated' => ':label updated.',
        'deleted' => ':label deleted.',
        'unsaved' => 'You have unsaved changes.',
    ],

    'history' => [
        'title' => 'History',
        'empty' => 'Nothing has changed since this record was created.',
        'failed' => 'The history could not be loaded.',
        'earlier' => 'Show earlier changes',
        'created' => 'created this record',
        'updated' => 'changed',
        'deleted' => 'deleted this record',
        'restored' => 'restored this record',
    ],

    'a11y' => [
        'skip_to_content' => 'Skip to content',
        'page_loaded' => ':title - page loaded',
    ],
];
