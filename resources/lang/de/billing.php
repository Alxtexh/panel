<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/billing.php',
    [
        'heading' => 'Abonnementzugriff',
        'description' => 'Die Abrechnung braucht Aufmerksamkeit, bevor der Zugriff auf dieses Panel fortgesetzt werden kann.',
        'label' => 'Abrechnung',
        'plan' => 'Abo',
        'status_heading' => 'Status',
        'status' => [
            'active' => 'Aktiv',
            'past_due' => 'Überfällig',
            'suspended' => 'Ausgesetzt',
            'canceled' => 'Storniert',
            'expired' => 'Abgelaufen',
            'fallback' => 'Abonnementstatus',
        ],
        'title' => [
            'active' => 'Abonnement aktiv',
            'past_due' => 'Zahlung fällig',
            'suspended' => 'Abonnement ausgesetzt',
            'canceled' => 'Abonnement storniert',
            'expired' => 'Abonnement abgelaufen',
            'limited' => 'Der Abonnementzugriff ist eingeschränkt',
        ],
        'body' => [
            'active' => 'Dieses Abo:plan ist aktiv.',
            'past_due' => 'Ihre Abrechnung ist zurück. Update die Zahlungsdetails, um eine Unterbrechung zu vermeiden.',
            'suspended' => 'Der Zugriff ist pausiert:plan, bis die Abrechnung wieder in einen guten Zustand gebracht ist.',
            'attention' => 'Die Abrechnung braucht Aufmerksamkeit, bevor der Zugriff fortgesetzt werden kann.',
        ],
        'actions' => [
            'manage' => 'Abrechnung verwalten',
            'manage_subscription' => 'Abonnement verwalten',
            'pay_now' => 'Jetzt bezahlen',
            'update_method' => 'Zahlungsmethode aktualisieren',
            'view_invoices' => 'Rechnungen ansehen',
            'contact_billing' => 'Abrechnung kontaktieren',
            'logout' => 'Abmelden',
        ],
        'wall' => [
            'page_title' => 'Zugriff ausgesetzt',
            'organisation' => 'Diese Organisation',
            'heading' => ':name ist ausgesetzt',
            'contact_named' => 'Kontaktieren Sie :email, um das zu klären.',
            'contact_admin' => 'Bitte wenden Sie sich an den Administrator Ihres Kontos, um das zu beheben.',
        ],
    ],
);

