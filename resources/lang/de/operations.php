<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/operations.php',
    [
        'group' => 'Operationen',
        'backups' => [
            'title' => 'Backups',
            'empty' => 'Noch keine Snapshots.',
            'settings' => 'Einstellungen',
            'snapshots' => 'Snapshots',
            'database' => 'Datenbank',
        ],
        'logs' => [
            'title' => 'Protokolle',
            'subtitle' => 'Der letzte Teil jeder Datei. Nur lesen.',
            'empty' => 'Noch keine Protokolldateien.',
            'nothing' => 'Nichts anzuzeigen.',
            'file' => 'Protokolldatei',
            'filter' => 'Zeilen filtern',
            'filter_placeholder' => 'Zeilen filtern...',
            'truncated' => 'Anzeige vom Ende der Datei. Fruhere Eintraege sind auf dem Datentraeger.',
        ],
        'monitoring' => [
            'title' => 'Monitoring',
            'no_samples' => 'Noch keine Samples. Die Historie erscheint, sobald der Scheduler panel:monitor-sample ausgefuehrt hat, alle fuens Minuten, wenn cron laeuft.',
            'last_24h' => 'Letzte 24 Stunden',
            'unavailable' => 'nicht verfuegbar',
        ],
    ],
);

