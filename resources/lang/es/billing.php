<?php

declare(strict_types=1);

return [
    'heading' => 'Acceso de suscripcion',
    'description' => 'La facturacion requiere atencion antes de que el acceso a este panel pueda continuar.',
    'label' => 'Facturacion',
    'plan' => 'Plan',
    'status_heading' => 'Estado',
    'current_subscription' => 'Suscripcion actual',
    'need_help' => '¿Necesitas ayuda? Contacta a',
    'plan_suffix' => ' de :plan',

    'portal' => [
        'title' => 'Facturacion',
        'empty' => 'Aun no hay datos de facturacion. Sobrescribe BillingPortalPage en el host para mapear tu pasarela.',
        'empty_hint' => 'Suscripcion, facturas y metodos de pago quedan vacios hasta que el host los rellene. Los enlaces de accion abajo quedan deshabilitados hasta que definas hrefs.',
        'subscription' => 'Suscripcion',
        'invoices' => 'Facturas',
        'payment_methods' => 'Metodos de pago',
        'actions' => 'Acciones de facturacion',
        'no_invoices' => 'No hay facturas que mostrar.',
        'no_methods' => 'No hay metodos de pago registrados.',
        'host_extension' => 'Extension del host: subclasa BillingPortalPage y sobrescribe subscription(), invoices(), paymentMethods() y billingActions().',
    ],

    'catalog' => [
        'label' => 'Planes',
        'title' => 'Elige un plan',
        'empty' => 'No hay planes disponibles en este momento.',
        'monthly' => 'Mensual',
        'annual' => 'Anual',
    ],

    'status' => [
        'active' => 'Activa',
        'past_due' => 'Vencida',
        'suspended' => 'Suspendida',
        'canceled' => 'Cancelada',
        'expired' => 'Caducada',
        'fallback' => 'Estado de la suscripcion',
    ],

    'title' => [
        'active' => 'Suscripcion activa',
        'past_due' => 'Pago pendiente',
        'suspended' => 'Suscripcion suspendida',
        'canceled' => 'Suscripcion cancelada',
        'expired' => 'Suscripcion caducada',
        'limited' => 'El acceso de suscripcion esta limitado',
    ],

    'body' => [
        'active' => 'Esta suscripcion:plan esta activa.',
        'past_due' => 'Tu facturacion esta atrasada:plan. Actualiza los datos de pago para evitar una interrupcion.',
        'suspended' => 'El acceso esta en pausa:plan hasta que la facturacion vuelva a estar al dia.',
        'canceled' => 'Esta suscripcion:plan se ha cancelado. Elige un plan para restaurar el acceso.',
        'expired' => 'Esta suscripcion:plan ha terminado. Renueva o cambia de plan para continuar.',
        'attention' => 'La facturacion requiere atencion antes de que el acceso pueda continuar.',
    ],

    'actions' => [
        'manage' => 'Gestionar facturacion',
        'manage_subscription' => 'Gestionar suscripcion',
        'pay_now' => 'Pagar ahora',
        'update_method' => 'Actualizar metodo de pago',
        'view_invoices' => 'Ver facturas',
        'contact_billing' => 'Contactar facturacion',
        'logout' => 'Cerrar sesion',
    ],

    'wall' => [
        'page_title' => 'Acceso suspendido',
        'organisation' => 'Esta organizacion',
        'heading' => ':name esta suspendida',
        'body' => 'Esta cuenta no se puede usar en este momento. Tus datos no se han eliminado.',
        'contact_named' => 'Contacta a :email para resolverlo.',
        'contact_admin' => 'Contacta al administrador de la cuenta para resolverlo.',
    ],
];
