<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/operations.php',
    [
        'group' => 'العمليات',
        'backups' => [
            'title' => 'النسخ الاحتياطية',
            'empty' => 'لا توجد لقطات بعد.',
            'settings' => 'الاعدادات',
            'snapshots' => 'اللقطات',
            'database' => 'قاعدة البيانات',
        ],
        'logs' => [
            'title' => 'السجلات',
            'subtitle' => 'الجزء الاخير من كل ملف. للقراءة فقط.',
            'empty' => 'لا توجد ملفات سجلات بعد.',
            'nothing' => 'لا شيء للعرض.',
            'file' => 'ملف السجل',
            'filter' => 'تصفية الاسطر',
            'filter_placeholder' => 'تصفية الاسطر...',
            'truncated' => 'عرض نهاية الملف. الادخالات السابقة موجودة على القرص.',
        ],
        'monitoring' => [
            'title' => 'المراقبة',
            'no_samples' => 'لا توجد عينات بعد. يظهر السجل عندما ينفذ المجدول panel:monitor-sample كل خمس دقائق عند عمل cron.',
            'last_24h' => 'اخر 24 ساعة',
            'unavailable' => 'غير متاح',
        ],
    ],
);
