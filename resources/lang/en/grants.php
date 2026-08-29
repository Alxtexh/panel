<?php

declare(strict_types=1);

return [
    'empty' => [
        'title' => 'You have no grants',
        'body' => 'This account is signed in and allowed into the panel, but it has no role and no abilities yet. The installer does not grant everything. Create an Administrator and assign it:',
        'reason' => 'Granting it needs someone with a shell - deliberate, not a missing button.',
    ],
];
