<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/directory.php',
    [
        'title' => 'Verzeichnis',
        'description' => 'Springen Sie zu Einstellungen, Personen, Dokumenten, Operationen und Hilfe.',
        'sections' => [
            'workspace' => 'Arbeitsbereich',
            'operations' => 'Operationen',
            'help' => 'Hilfe',
        ],
        'links' => [
            'settings' => 'Einstellungen',
            'users' => 'Benutzer',
            'roles' => 'Rollen',
            'documents' => 'Dokumente',
            'backups' => 'Backups',
            'logs' => 'Protokolle',
            'monitoring' => 'Monitoring',
            'help' => 'Hilfe',
        ],
    ],
);

