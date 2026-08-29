<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/grants.php',
    [
        'empty' => [
            'title' => 'Sie haben keine Berechtigungen',
            'reason' => 'Das Erteilen erfordert Shell-Zugriff - das ist Absicht, kein fehlender Button.',
        ],
    ],
);

