<?php

declare(strict_types=1);

return [
    'group' => 'Operations',

    'backups' => [
        'title' => 'Sauvegardes',
        'empty' => 'Aucun instantane pour le moment.',
        'settings' => 'Parametres',
        'snapshots' => 'Instantanes',
        'database' => 'Base de donnees',
    ],

    'logs' => [
        'title' => 'Journaux',
        'subtitle' => 'La fin de chaque fichier. Lecture seule.',
        'empty' => 'Aucun fichier journal pour le moment.',
        'nothing' => 'Rien a afficher.',
        'file' => 'Fichier journal',
        'filter' => 'Filtrer les lignes',
        'filter_placeholder' => 'Filtrer les lignes…',
        'truncated' => 'Fin du fichier affichee. Les entrees plus anciennes sont sur le disque.',
    ],

    'monitoring' => [
        'title' => 'Supervision',
        'no_samples' => 'Aucun echantillon pour le moment. L\'historique apparait une fois que le planificateur a lance panel:monitor-sample, toutes les cinq minutes si cron tourne.',
        'last_24h' => 'Dernieres 24 heures',
        'unavailable' => 'indisponible',
    ],
];
