<?php

use App\Models\Customer;
use App\Models\User;

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | This option defines the default authentication "guard" and password
    | reset "broker" for your application. You may change these values
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        'guard' => env('AUTH_GUARD', 'web'),
        'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Next, you may define every authentication guard for your application.
    | Of course, a great default configuration has been defined for you
    | which utilizes session storage plus the Eloquent user provider.
    |
    | All authentication guards have a user provider, which defines how the
    | users are actually retrieved out of your database or other storage
    | system used by the application. Typically, Eloquent is utilized.
    |
    | Supported: "session"
    |
    */

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        /*
         * THE CUSTOMER PORTAL'S OWN GUARD.
         *
         * A second guard is what makes a client panel a different thing rather
         * than the same panel with fewer menu entries. Sessions are keyed per
         * guard, so an operator signed in on `web` is not signed in here and a
         * customer signed in here is not signed in there - which is the
         * property `SecondGuardIsolationTest` asserts in both directions.
         *
         * `Panel::guard('customers')` is what points the client panel at this.
         * Everything else - the login attempt, the logout, social login, the
         * props shared with Inertia - already reads the panel's guard.
         */
        'customers' => [
            'driver' => 'session',
            'provider' => 'customers',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | All authentication guards have a user provider, which defines how the
    | users are actually retrieved out of your database or other storage
    | system used by the application. Typically, Eloquent is utilized.
    |
    | If you have multiple user tables or models you may configure multiple
    | providers to represent the model / table. These providers may then
    | be assigned to any extra authentication guards you have defined.
    |
    | Supported: "database", "eloquent"
    |
    */

    'providers' => [
        'users' => [
            /*
             * `panel-tenant`, not `eloquent`.
             *
             * `users.email` is unique PER TENANT now, so an email alone no
             * longer identifies anybody - the plain Eloquent provider would
             * match whichever row the database returned first, which on a
             * per-tenant login page means the person typing into one
             * organisation's form can be matched against another's account with
             * the same address.
             *
             * The driver adds a tenant constraint and leaves password
             * verification, rehashing and remember-me tokens to Laravel.
             */
            'driver' => 'panel-tenant',
            'model' => env('AUTH_MODEL', User::class),
        ],

        /*
         * PLAIN `eloquent`, NOT `panel-tenant`.
         *
         * The operator provider above is tenant-aware because `users.email` is
         * unique per tenant, so an address alone does not identify anybody. The
         * same is true of customers - and it is handled by the UNIQUE INDEX on
         * (tenant_id, email) plus the tenant the panel resolves, rather than by
         * a second custom driver. Saying so here because the asymmetry looks
         * like an oversight otherwise.
         */
        'customers' => [
            'driver' => 'eloquent',
            'model' => Customer::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | These configuration options specify the behavior of Laravel's password
    | reset functionality, including the table utilized for token storage
    | and the user provider that is invoked to actually retrieve users.
    |
    | The expiry time is the number of minutes that each reset token will be
    | considered valid. This security feature keeps tokens short-lived so
    | they have less time to be guessed. You may change this as needed.
    |
    | The throttle setting is the number of seconds a user must wait before
    | generating more password reset tokens. This prevents the user from
    | quickly generating a very large amount of password reset tokens.
    |
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the number of seconds before a password confirmation
    | window expires and users are asked to re-enter their password via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),

];
