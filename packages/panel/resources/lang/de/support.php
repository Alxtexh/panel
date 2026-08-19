<?php

declare(strict_types=1);

return array_replace_recursive(
    require __DIR__ . '/../en/support.php',
    [
        'help' => [
            'title' => 'Hilfe',
            'heading' => 'Wie koennen wir helfen?',
            'search' => 'Hilfe suchen',
            'search_placeholder' => 'Hilfe suchen - versuchen Sie Export, Bulk oder Theme',
            'clear' => 'Suche loeschen',
            'all' => 'Alle',
            'no_match' => 'Nichts gefunden zu ":term"',
            'no_match_hint' => 'Versuchen Sie ein kuerzeres Wort, oder browse alles.',
            'show_all' => 'Alle Artikel anzeigen',
        ],
        'faq' => [
            'title' => 'FAQ',
            'heading' => 'Hauefig gestellte Fragen',
            'subtitle' => 'Die Themen, die Menschen in der ersten Woche nachfragen.',
        ],
        'about' => [
            'title' => 'Ueber uns',
            'empty' => 'Noch nichts geschrieben. Fuegen Sie panel.about in Ihrer Konfiguration hinzu, um diese Installation zu beschreiben, Links hinzuzufuegen und anzugeben, wen man kontaktieren kann.',
        ],
        'whats_new' => 'Was gibt es Neues',
    ],
);

