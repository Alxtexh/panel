<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/grants.php',
    [
        'empty' => [
            'title' => 'ليس لديك صلاحيات',
        ],
    ],
);
