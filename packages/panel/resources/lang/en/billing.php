<?php

declare(strict_types=1);

return [
    'heading' => 'Subscription access',
    'description' => 'Billing needs attention before access to this panel can continue.',
    'label' => 'Billing',
    'plan' => 'Plan',
    'status_heading' => 'Status',
    'current_subscription' => 'Current subscription',
    'need_help' => 'Need help? Contact',
    'plan_suffix' => ' for :plan',

    'portal' => [
        'title' => 'Billing',
        'empty' => 'No billing data yet. Connect your billing gateway mapping on a subclass.',
    ],

    'status' => [
        'active' => 'Active',
        'past_due' => 'Past due',
        'suspended' => 'Suspended',
        'canceled' => 'Canceled',
        'expired' => 'Expired',
        'fallback' => 'Subscription status',
    ],

    'title' => [
        'active' => 'Subscription active',
        'past_due' => 'Payment is due',
        'suspended' => 'Subscription suspended',
        'canceled' => 'Subscription canceled',
        'expired' => 'Subscription expired',
        'limited' => 'Subscription access is limited',
    ],

    'body' => [
        'active' => 'This subscription:plan is active.',
        'past_due' => 'Your billing is behind:plan. Update payment details to avoid interruption.',
        'suspended' => 'Access is paused:plan until billing is brought back into good standing.',
        'canceled' => 'This subscription:plan has been canceled. Choose a plan to restore access.',
        'expired' => 'This subscription:plan has ended. Renew or change plan to continue.',
        'attention' => 'Billing needs attention before access can continue.',
    ],

    'actions' => [
        'manage' => 'Manage billing',
        'manage_subscription' => 'Manage subscription',
        'pay_now' => 'Pay now',
        'update_method' => 'Update payment method',
        'view_invoices' => 'View invoices',
        'contact_billing' => 'Contact billing',
        'logout' => 'Sign out',
    ],

    'wall' => [
        'page_title' => 'Access suspended',
        'organisation' => 'This organisation',
        'heading' => ':name is suspended',
        'body' => 'This account cannot be used at the moment. Your data has not been deleted.',
        'contact_named' => 'Contact :email to resolve this.',
        'contact_admin' => 'Please contact your account administrator to resolve this.',
    ],
];
