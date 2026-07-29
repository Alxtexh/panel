<?php

return [

    /*
    | Telegram, read by `laravel-notification-channels/telegram` and by the
    | panel's channel on top of it.
    |
    | THE ENVIRONMENT IS THE FLOOR, NOT THE ONLY SOURCE. An administrator can
    | set both from the panel's alert settings, which are applied over these at
    | boot - so a token can be rotated without a deploy, and an installation
    | that has always used `.env` keeps working untouched. Unset in both places
    | means nothing is sent, silently and deliberately: an alert channel that
    | throws turns one incident into two.
    */
    'telegram' => [
        'token' => env('TELEGRAM_BOT_TOKEN'),
        'chat_id' => env('TELEGRAM_CHAT_ID'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Resend, Postmark, AWS, and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

];
