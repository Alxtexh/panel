<?php

declare(strict_types=1);

return [
    'heading' => 'Acces a l\'abonnement',
    'description' => 'La facturation doit etre traitee avant de continuer.',
    'label' => 'Facturation',
    'plan' => 'Offre',
    'status_heading' => 'Statut',
    'current_subscription' => 'Abonnement actuel',
    'need_help' => 'Besoin d\'aide ? Contactez',
    'plan_suffix' => ' pour :plan',

    'portal' => [
        'title' => 'Facturation',
        'empty' => 'Pas encore de donnees de facturation. Surclasssez BillingPortalPage cote hote pour mapper votre passerelle.',
        'empty_hint' => 'Abonnement, factures et moyens de paiement restent vides tant que l\'hote ne les renseigne pas. Les actions ci-dessous restent desactivees tant que les hrefs ne sont pas definis.',
        'subscription' => 'Abonnement',
        'invoices' => 'Factures',
        'payment_methods' => 'Moyens de paiement',
        'actions' => 'Actions de facturation',
        'no_invoices' => 'Aucune facture a afficher.',
        'no_methods' => 'Aucun moyen de paiement enregistre.',
        'host_extension' => 'Extension hote : sous-classez BillingPortalPage et surchargez subscription(), invoices(), paymentMethods() et billingActions().',
    ],

    'subscription' => [
        'label' => 'Abonnement',
        'title' => 'Abonnement',
        'empty' => 'Aucune offre disponible pour le moment.',
        'monthly' => 'Mensuel',
        'annual' => 'Annuel',
        'current_plan' => 'Offre actuelle',
        'no_active' => 'Vous n\'avez pas encore d\'abonnement actif.',
    ],

    'status' => [
        'active' => 'Actif',
        'past_due' => 'Impaye',
        'suspended' => 'Suspendu',
        'canceled' => 'Annule',
        'expired' => 'Expire',
        'fallback' => 'Statut de l\'abonnement',
    ],

    'title' => [
        'active' => 'Abonnement actif',
        'past_due' => 'Paiement du',
        'suspended' => 'Abonnement suspendu',
        'canceled' => 'Abonnement annule',
        'expired' => 'Abonnement expire',
        'limited' => 'Acces a l\'abonnement limite',
    ],

    'body' => [
        'active' => 'Cet abonnement:plan est actif.',
        'past_due' => 'Votre facturation est en retard:plan. Mettez a jour le paiement pour eviter une interruption.',
        'suspended' => 'L\'acces est en pause:plan jusqu\'au reglement.',
        'canceled' => 'Cet abonnement:plan a ete annule. Choisissez une offre pour restaurer l\'acces.',
        'expired' => 'Cet abonnement:plan est termine. Renouvelez ou changez d\'offre pour continuer.',
        'attention' => 'La facturation doit etre traitee avant de continuer.',
    ],

    'actions' => [
        'manage' => 'Gerer la facturation',
        'manage_subscription' => 'Gerer l\'abonnement',
        'pay_now' => 'Payer maintenant',
        'update_method' => 'Mettre a jour le moyen de paiement',
        'view_invoices' => 'Voir les factures',
        'contact_billing' => 'Contacter la facturation',
        'logout' => 'Se deconnecter',
    ],

    'wall' => [
        'page_title' => 'Acces suspendu',
        'organisation' => 'Cette organisation',
        'heading' => ':name est suspendu',
        'body' => 'Ce compte ne peut pas etre utilise pour le moment. Vos donnees n\'ont pas ete supprimees.',
        'contact_named' => 'Contactez :email pour resoudre cela.',
        'contact_admin' => 'Contactez l\'administrateur du compte pour resoudre cela.',
    ],
];
