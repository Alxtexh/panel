<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/onboarding.php',
    [
        'title' => 'Erste Schritte',
        'open' => 'Offnen',
        'skip' => 'Rest ueberspringen',
        'replay' => 'Setup-Anleitung anzeigen',
        'send_feedback' => 'Feedback senden',
        'steps' => [
            'users' => [
                'label' => 'Fuegen Sie Ihren ersten Benutzer hinzu',
            ],
            'invite' => [
                'label' => 'Laden Sie Ihr Team ein',
            ],
            'organisation' => [
                'label' => 'Organisation',
            ],
            'security' => [
                'label' => 'Profil und Sicherheit',
            ],
            'roles' => [
                'label' => 'Rollen',
            ],
            'settings' => [
                'label' => 'Einstellungen',
            ],
            'directory' => [
                'label' => 'Verzeichnis',
            ],
            'backups' => [
                'label' => 'Operations Backups',
            ],
            'api_keys' => [
                'label' => 'API-Schluessel',
            ],
            'billing' => [
                'label' => 'Abrechnung',
            ],
        ],
    ],
);

