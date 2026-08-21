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

    /*
    |--------------------------------------------------------------------------
    | Sign-in providers
    |--------------------------------------------------------------------------
    |
    | CREDENTIALS ARE THE SWITCH. A provider with no client id is not offered
    | on the sign-in screen at all - see `Alxtexh\Panel\Auth\SocialProviders` -
    | so there is never a button that cannot work. Leave these unset to ship
    | without social sign-in. Microsoft, Apple and Discord need a Socialite
    | community provider; without one the button 404s rather than 500s.
    |
    | Slack OAuth keys live on the same `services.slack` entry as the
    | notifications bot token (below under social providers).
    |
    */

    'google' => [
        'client_id' => env('GOOGLE_CLIENT_ID'),
        'client_secret' => env('GOOGLE_CLIENT_SECRET'),
        'redirect' => env('GOOGLE_REDIRECT_URI', '/auth/google/callback'),
    ],

    'github' => [
        'client_id' => env('GITHUB_CLIENT_ID'),
        'client_secret' => env('GITHUB_CLIENT_SECRET'),
        'redirect' => env('GITHUB_REDIRECT_URI', '/auth/github/callback'),
    ],

    'microsoft' => [
        'client_id' => env('MICROSOFT_CLIENT_ID'),
        'client_secret' => env('MICROSOFT_CLIENT_SECRET'),
        'redirect' => env('MICROSOFT_REDIRECT_URI', '/auth/microsoft/callback'),
    ],

    'apple' => [
        'client_id' => env('APPLE_CLIENT_ID'),
        'client_secret' => env('APPLE_CLIENT_SECRET'),
        'redirect' => env('APPLE_REDIRECT_URI', '/auth/apple/callback'),
    ],

    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'redirect' => env('FACEBOOK_REDIRECT_URI', '/auth/facebook/callback'),
    ],

    'gitlab' => [
        'client_id' => env('GITLAB_CLIENT_ID'),
        'client_secret' => env('GITLAB_CLIENT_SECRET'),
        'redirect' => env('GITLAB_REDIRECT_URI', '/auth/gitlab/callback'),
    ],

    'bitbucket' => [
        'client_id' => env('BITBUCKET_CLIENT_ID'),
        'client_secret' => env('BITBUCKET_CLIENT_SECRET'),
        'redirect' => env('BITBUCKET_REDIRECT_URI', '/auth/bitbucket/callback'),
    ],

    'linkedin' => [
        'client_id' => env('LINKEDIN_CLIENT_ID'),
        'client_secret' => env('LINKEDIN_CLIENT_SECRET'),
        'redirect' => env('LINKEDIN_REDIRECT_URI', '/auth/linkedin/callback'),
    ],

    'linkedin-openid' => [
        'client_id' => env('LINKEDIN_OPENID_CLIENT_ID', env('LINKEDIN_CLIENT_ID')),
        'client_secret' => env('LINKEDIN_OPENID_CLIENT_SECRET', env('LINKEDIN_CLIENT_SECRET')),
        'redirect' => env('LINKEDIN_OPENID_REDIRECT_URI', '/auth/linkedin-openid/callback'),
    ],

    'twitter' => [
        'client_id' => env('TWITTER_CLIENT_ID'),
        'client_secret' => env('TWITTER_CLIENT_SECRET'),
        'redirect' => env('TWITTER_REDIRECT_URI', '/auth/twitter/callback'),
    ],

    'x' => [
        'client_id' => env('X_CLIENT_ID', env('TWITTER_CLIENT_ID')),
        'client_secret' => env('X_CLIENT_SECRET', env('TWITTER_CLIENT_SECRET')),
        'redirect' => env('X_REDIRECT_URI', '/auth/x/callback'),
    ],

    'discord' => [
        'client_id' => env('DISCORD_CLIENT_ID'),
        'client_secret' => env('DISCORD_CLIENT_SECRET'),
        'redirect' => env('DISCORD_REDIRECT_URI', '/auth/discord/callback'),
    ],

    /*
     * Sign-in OAuth and notification bot share this key. client_id / secret
     * enable the Slack button; notifications.* is the outbound channel.
     */
    'slack' => [
        'client_id' => env('SLACK_CLIENT_ID'),
        'client_secret' => env('SLACK_CLIENT_SECRET'),
        'redirect' => env('SLACK_REDIRECT_URI', '/auth/slack/callback'),
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'twitch' => [
        'client_id' => env('TWITCH_CLIENT_ID'),
        'client_secret' => env('TWITCH_CLIENT_SECRET'),
        'redirect' => env('TWITCH_REDIRECT_URI', '/auth/twitch/callback'),
    ],

];
