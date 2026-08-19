<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/billing.php',
    [
        'heading' => 'صلاحية الاشتراك',
        'description' => 'الفوترة تحتاج انتباها قبل ان يمكن متابعة الوصول الى هذه اللوحة.',
        'label' => 'الفوترة',
        'plan' => 'الخطة',
        'status_heading' => 'الحالة',
        'status' => [
            'active' => 'نشط',
            'past_due' => 'متاخر',
            'suspended' => 'معلق',
            'canceled' => 'ملغي',
            'expired' => 'منتهي',
            'fallback' => 'حالة الاشتراك',
        ],
        'title' => [
            'active' => 'الاشتراك نشط',
            'past_due' => 'الدفع مستحق',
            'suspended' => 'الاشتراك معلق',
            'canceled' => 'الاشتراك ملغي',
            'expired' => 'الاشتراك منتهي',
            'limited' => 'صلاحية الاشتراك محدودة',
        ],
        'body' => [
            'active' => 'هذا الاشتراك:plan نشط.',
            'past_due' => 'فوترتك متاخرة:plan. حدث بيانات الدفع لتجنب الانقطاع.',
            'suspended' => 'الوصول متوقف:plan حتى تعود الفوترة الى وضعها الصحيح.',
            'attention' => 'الفوترة تحتاج انتباها قبل ان يمكن متابعة الوصول.',
        ],
        'actions' => [
            'manage' => 'ادارة الفوترة',
            'manage_subscription' => 'ادارة الاشتراك',
            'pay_now' => 'ادفع الان',
            'update_method' => 'تحديث طريقة الدفع',
            'view_invoices' => 'عرض الفواتير',
            'contact_billing' => 'التواصل مع الفوترة',
            'logout' => 'تسجيل الخروج',
        ],
        'wall' => [
            'page_title' => 'الوصول معلق',
            'organisation' => 'هذه المنظمة',
            'heading' => ':name معلق',
            'contact_named' => 'تواصل مع :email لحل هذا.',
            'contact_admin' => 'يرجى التواصل مع مدير حسابك لحل هذا.',
        ],
    ],
);
