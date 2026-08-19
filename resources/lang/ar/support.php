<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/support.php',
    [
        'help' => [
            'title' => 'المساعدة',
            'heading' => 'كيف يمكننا مساعدتك؟',
            'search' => 'بحث في المساعدة',
            'search_placeholder' => 'بحث في المساعدة - جرب تصدير او مجمع او سمة',
            'clear' => 'مسح البحث',
            'all' => 'الكل',
            'no_match' => 'لا نتائج لـ ":term"',
            'no_match_hint' => 'جرب كلمة اقصر او تصفح الكل.',
            'show_all' => 'عرض جميع المقالات',
        ],
        'faq' => [
            'title' => 'الاسئلة الشائعة',
            'heading' => 'الاسئلة المتكررة',
            'subtitle' => 'الاسئلة التي يطرحها الناس في الاسبوع الاول.',
        ],
        'about' => [
            'title' => 'حول',
            'empty' => 'لم يتم كتابة شيء هنا بعد. املا panel.about في اعداداتك لوصف هذا التثبيت واضافة روابط وتحديد جهة الاتصال.',
        ],
        'whats_new' => 'ما الجديد',
    ],
);
