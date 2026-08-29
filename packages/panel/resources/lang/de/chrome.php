<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/chrome.php',
    [
        'account' => [
            'profile' => 'Profil',
            'settings' => 'Einstellungen',
            'users' => 'Benutzerverwaltung',
            'backups' => 'Backups',
            'logs' => 'Protokolle',
            'monitoring' => 'Monitoring',
            'activity' => 'Aktivitaet',
            'logout' => 'Abmelden',
        ],
        'nav' => [
            'system' => 'System',
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

