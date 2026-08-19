<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/chrome.php',
    [
        'account' => [
            'profile' => 'الملف الشخصي',
            'settings' => 'الاعدادات',
            'users' => 'ادارة المستخدمين',
            'backups' => 'النسخ الاحتياطية',
            'logs' => 'السجلات',
            'monitoring' => 'المراقبة',
            'activity' => 'النشاط',
            'logout' => 'تسجيل الخروج',
        ],
    ],
);
