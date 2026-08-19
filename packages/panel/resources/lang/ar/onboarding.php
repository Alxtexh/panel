<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/onboarding.php',
    [
        'title' => 'البدء',
        'open' => 'فتح',
        'skip' => 'تخطي المتبقي',
        'replay' => 'عرض دليل الاعداد',
        'send_feedback' => 'ارسال ملاحظات',
        'steps' => [
            'users' => [
                'label' => 'اضف اول مستخدم',
            ],
            'invite' => [
                'label' => 'ادع فريقك',
            ],
            'organisation' => [
                'label' => 'المنظمة',
            ],
            'security' => [
                'label' => 'الملف الشخصي والامان',
            ],
            'roles' => [
                'label' => 'الادوار',
            ],
            'settings' => [
                'label' => 'الاعدادات',
            ],
            'directory' => [
                'label' => 'الدليل',
            ],
            'backups' => [
                'label' => 'النسخ الاحتياطية للعمليات',
            ],
            'api_keys' => [
                'label' => 'مفاتيح API',
            ],
            'billing' => [
                'label' => 'الفوترة',
            ],
        ],
    ],
);
