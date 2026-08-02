<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Reference-app conveniences
|--------------------------------------------------------------------------
|
| THIS FILE DOES NOT SHIP. It configures `apps/playground`, which exists to
| exercise the framework - none of it is read by `panelkit/panel`, and an
| installation of the package never receives it.
|
*/

return [

    'login' => [

        /*
        | Prefill the sign-in form with a seeded demo account.
        |
        | OFF BY DEFAULT, and ignored entirely outside the `local` environment -
        | see `App\Support\DemoLogin`, where the environment check is made in
        | code precisely so that no value here can turn it on where it matters.
        |
        | It is for a machine where the panel is restarted a dozen times an hour
        | and the same password is typed each time.
        */
        'prefill' => (bool) env('DEMO_PREFILL_LOGIN', false),

        /*
        | Which seeded account. A TENANT administrator by default rather than a
        | platform one: most screens worth opening are inside an organisation,
        | and a platform account resolves no tenant, so half the panel renders
        | its empty state.
        */
        'email' => env('DEMO_PREFILL_EMAIL', 'admin@nairobi-fibre.test'),

    ],

];
