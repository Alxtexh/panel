<?php

declare(strict_types=1);

return [
    'account' => [
        'profile' => 'Profile',
        'settings' => 'Settings',
        'users' => 'User management',
        'backups' => 'Backups',
        'logs' => 'Logs',
        'monitoring' => 'Monitoring',
        'activity' => 'Activity',
        'logout' => 'Log out',
    ],

    'nav' => [
        'system' => 'System',
    ],

    /*
     * SHARED SIDEBAR VOCABULARY, not account-menu copy - `account.*` above
     * labels the avatar dropdown; these label the same screens when
     * OperationsNav/SettingsNav put them in the sidebar proper, which reads
     * differently enough (a nav item, not a menu row) to want its own words.
     */
    'links' => [
        'settings' => 'Settings',
        'users' => 'Users',
        'roles' => 'Roles',
        'documents' => 'Documents',
        'backups' => 'Backups',
        'logs' => 'Logs',
        'monitoring' => 'Monitoring',
        'help' => 'Help',
    ],
];
