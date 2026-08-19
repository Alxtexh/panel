<?php

declare(strict_types=1);

return [
    'group' => 'Operations',

    'backups' => [
        'title' => 'Backups',
        'empty' => 'No snapshots yet.',
        'settings' => 'Settings',
        'snapshots' => 'Snapshots',
        'database' => 'Database',
    ],

    'logs' => [
        'title' => 'Logs',
        'subtitle' => 'The last part of each file. Reading only.',
        'empty' => 'No log files yet.',
        'nothing' => 'Nothing to show.',
        'file' => 'Log file',
        'filter' => 'Filter lines',
        'filter_placeholder' => 'Filter lines…',
        'truncated' => 'Showing the end of the file - earlier entries are on disk.',
    ],

    'monitoring' => [
        'title' => 'Monitoring',
        'no_samples' => 'No samples yet. History appears once the scheduler has run panel:monitor-sample, every five minutes when cron is ticking.',
        'last_24h' => 'Last 24 hours',
        'unavailable' => 'unavailable',
    ],
];
