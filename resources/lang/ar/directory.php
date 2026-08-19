<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/directory.php',
    [
        'title' => 'الدليل',
        'description' => 'انتقل الى الاعدادات والاشخاص والمستندات والعمليات والمساعدة.',
        'sections' => [
            'workspace' => 'مساحة العمل',
            'operations' => 'العمليات',
            'help' => 'المساعدة',
        ],
        'links' => [
            'settings' => 'الاعدادات',
            'users' => 'المستخدمون',
            'roles' => 'الادوار',
            'documents' => 'المستندات',
            'backups' => 'النسخ الاحتياطية',
            'logs' => 'السجلات',
            'monitoring' => 'المراقبة',
            'help' => 'المساعدة',
        ],
    ],
);
