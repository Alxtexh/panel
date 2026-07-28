<?php

declare(strict_types=1);

/*
 | Arabic, present so RTL is exercised by a REAL locale rather than by a toggle.
 |
 | A direction switch tested with English text mirrors the layout and leaves the
 | words reading left to right, which hides every bug that only appears when the
 | text itself runs the other way - punctuation drifting to the wrong end,
 | numbers keeping their own direction inside a mirrored sentence, an icon that
 | now points away from the thing it refers to.
 |
 | The translations here are deliberately ordinary. They exist to be rendered,
 | not to be a complete localisation.
 */

return [
    'actions' => [
        'save' => 'حفظ',
        'cancel' => 'إلغاء',
        'delete' => 'حذف',
        'create' => 'إنشاء',
        'edit' => 'تعديل',
        'search' => 'بحث',
        'export' => 'تصدير',
        'import' => 'استيراد',
        'discard' => 'تجاهل',
        'retry' => 'أعد المحاولة',
    ],

    'table' => [
        'empty' => 'لا يوجد شيء هنا بعد.',
        'no_results' => 'لا توجد نتائج لـ :term.',
        'showing' => 'عرض :from-:to من :total',
        'per_page' => 'لكل صفحة',
        'selected' => 'تم تحديد :count',
    ],

    'record' => [
        'created' => 'تم إنشاء :label.',
        'updated' => 'تم تحديث :label.',
        'deleted' => 'تم حذف :label.',
        'unsaved' => 'لديك تغييرات غير محفوظة.',
    ],

    'history' => [
        'title' => 'السجل',
        'empty' => 'لم يتغير شيء منذ إنشاء هذا السجل.',
        'failed' => 'تعذر تحميل السجل.',
        'earlier' => 'عرض التغييرات السابقة',
        'created' => 'أنشأ هذا السجل',
        'updated' => 'غيّر',
        'deleted' => 'حذف هذا السجل',
        'restored' => 'استعاد هذا السجل',
    ],

    'a11y' => [
        'skip_to_content' => 'تخطٍ إلى المحتوى',
        'page_loaded' => ':title - تم تحميل الصفحة',
    ],
];
