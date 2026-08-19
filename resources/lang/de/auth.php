<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/auth.php',
    [
        'login' => [
            'title' => 'Anmelden',
            'heading' => 'Melden Sie sich bei Ihrem Konto an',
            'description' => 'Geben Sie unten Ihre E-Mail-Adresse und Ihr Passwort ein, um sich anzumelden',
            'email' => 'E-Mail-Adresse',
            'password' => 'Passwort',
            'forgot' => 'Passwort vergessen?',
            'remember' => 'Angemeldet bleiben',
            'submit' => 'Anmelden',
            'signing_in' => 'Anmeldung...',
            'or_email' => 'Oder mit E-Mail fortfahren',
            'or_provider' => 'oder fortfahren mit',
            'no_account' => 'Kein Konto?',
            'sign_up' => 'Registrieren',
        ],
        'lock' => [
            'title' => 'Gesperrt',
            'heading' => 'Gesperrt',
            'prompt' => 'Bestatigen Sie, dass es Sie sind, um dort weiterzumachen, wo Sie aufgehort haben.',
            'password' => 'Passwort',
            'unlock' => 'Entsperren',
            'passkey' => 'Mit Passkey entsperren',
            'unlocking' => 'Wird entsperrt...',
            'or_password' => 'Oder verwenden Sie Ihr Passwort',
            'not_you' => 'Nicht Sie?',
            'someone_else' => 'Als jemand anderes anmelden',
            'button' => 'Sperrbildschirm',
        ],
        'idle' => [
            'title' => 'Noch da?',
            'description' => 'Sie werden in :seconds Sekunden gesperrt.',
            'body' => 'Bewegen Sie die Maus oder drucken Sie eine Taste, um angemeldet zu bleiben. Wenn niemand das tut, sperrt das Panel und fragt nach Ihrem Passwort.',
            'stay' => 'Angemeldet bleiben',
        ],
    ],
);

