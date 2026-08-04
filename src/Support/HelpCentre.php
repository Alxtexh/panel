<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * The help centre's content, which the package cannot write for you.
 *
 * THE SCREEN IS GENERIC AND THE WORDS ARE NOT. A searchable help centre is
 * framework work - the search, the categories, the deep link to one article, the
 * empty state - and every panel needs it. What goes IN it is the application's:
 * the reference app explains fibre plans and routers, which is no use to a
 * veterinary practice, and shipping those articles would be shipping somebody
 * else's business as though it were a feature.
 *
 * SO THE PACKAGE SHIPS THE SHELF AND SOME BOOKS. The defaults below describe
 * only what the PANEL does - search, tables, filters, saved views, the trash,
 * roles, the account screens - because those are true of every installation and
 * a help centre that opens empty on a fresh install reads as broken rather than
 * as unconfigured. An application adds its own with `add()`, and may drop the
 * defaults entirely with `replace()`.
 *
 * HELD IN THE CONTAINER, NOT IN A STATIC, and that is not a style preference.
 * `PanelRoutes` learned this the expensive way: a static list is appended to
 * every time the application boots and never cleared, so across a suite that
 * boots a thousand times it grew a thousand copies. Nothing failed - the tests
 * just got slower, which reads as "the tests got slower" rather than as a leak.
 * A container binding is rebuilt with the application.
 */
final class HelpCentre
{
    private const KEY = 'panelkit.help';

    private const FAQ_KEY = 'panelkit.help.faq';

    /**
     * Add articles, keeping the packaged ones.
     *
     * @param  list<array<string, mixed>>  $articles
     */
    public static function add(array $articles): void
    {
        app()->instance(self::KEY, [...self::registered(), ...$articles]);
    }

    /**
     * Add articles, dropping the packaged ones.
     *
     * FOR THE APPLICATION THAT HAS WRITTEN ITS OWN VERSION of "how do I search",
     * in its own voice. Two answers to one question, one of them in the
     * package's words, is worse than either alone.
     *
     * @param  list<array<string, mixed>>  $articles
     */
    public static function replace(array $articles): void
    {
        app()->instance(self::KEY, $articles);
        app()->instance(self::KEY.'.replaced', true);
    }

    /**
     * Everything the help screen should show.
     *
     * @return list<array<string, mixed>>
     */
    public static function articles(): array
    {
        $replaced = app()->bound(self::KEY.'.replaced');

        return $replaced
            ? self::registered()
            : [...self::defaults(), ...self::registered()];
    }

    /**
     * The category tabs, derived from the articles that actually exist.
     *
     * DERIVED, NOT DECLARED, because a hardcoded list is the thing that made
     * this screen ISP-specific: the reference app's tabs read "Getting started,
     * Subscribers, Data & exports, The panel", and "Subscribers" is meaningless
     * to a veterinary practice and empty in every panel that has none. A tab
     * with nothing behind it is worse than a missing tab - somebody clicks it.
     *
     * LABELS COME FROM `panel.help.categories` where an application has named
     * them, and are otherwise title-cased from the key. Icons cannot travel in
     * JSON, so the screen maps the keys it knows and falls back to a generic
     * one; a category the package has never heard of still gets a tab.
     *
     * @return list<array{key: string, label: string}>
     */
    public static function categories(): array
    {
        $named = (array) config('panel.help.categories', []);

        $keys = [];

        foreach (self::articles() as $article) {
            $key = (string) ($article['category'] ?? 'panel');

            if (! in_array($key, $keys, true)) {
                $keys[] = $key;
            }
        }

        return array_map(static fn (string $key): array => [
            'key' => $key,
            'label' => $named[$key] ?? ucfirst(str_replace(['-', '_'], ' ', $key)),
        ], $keys);
    }

    /**
     * Add question groups to the FAQ.
     *
     * @param  list<array{title: string, items: list<array{q: string, a: string}>}>  $groups
     */
    public static function addQuestions(array $groups): void
    {
        app()->instance(self::FAQ_KEY, [...self::registeredQuestions(), ...$groups]);
    }

    /**
     * @return list<array{title: string, items: list<array{q: string, a: string}>}>
     */
    public static function questions(): array
    {
        return [...self::defaultQuestions(), ...self::registeredQuestions()];
    }

    /** @return list<array<string, mixed>> */
    private static function registered(): array
    {
        return app()->bound(self::KEY) ? (array) app(self::KEY) : [];
    }

    /** @return list<array{title: string, items: list<array{q: string, a: string}>}> */
    private static function registeredQuestions(): array
    {
        return app()->bound(self::FAQ_KEY) ? (array) app(self::FAQ_KEY) : [];
    }

    /**
     * What is true of every panel, whatever it administers.
     *
     * `keywords` EXISTS BECAUSE PEOPLE DO NOT SEARCH FOR THE TITLE. Somebody
     * looking for the command palette types "shortcut" or "ctrl k", never
     * "Finding anything quickly", and a search over titles and bodies alone
     * returns nothing and teaches them the help centre is useless.
     *
     * @return list<array<string, mixed>>
     */
    private static function defaults(): array
    {
        return [
            [
                'id' => 'panel-search',
                'category' => 'panel',
                'title' => 'Finding anything quickly',
                'keywords' => 'search command palette shortcut keyboard ctrl k cmd find lookup jump',
                'body' => [
                    'Press ⌘K (or Ctrl+K) anywhere in the panel to open the command palette.',
                    'It filters pages instantly with no request, because the navigation is already on the page. Typing longer also searches records - each list contributes the columns it marks as searchable, and anything you are not allowed to view is not searched at all.',
                ],
            ],
            [
                'id' => 'panel-tables',
                'category' => 'panel',
                'title' => 'Sorting, filtering and saving a view',
                'keywords' => 'table list filter sort column density saved view reset',
                'body' => [
                    'Click a column heading to sort by it. The filter button opens the filters that list offers; they combine, and the URL updates so a filtered list can be linked or bookmarked.',
                    'Save a combination you keep re-making as a view, and it appears as a tab above the table. Views are yours - saving one does not change what anybody else sees.',
                    'The density control trades row height for rows on screen, and is remembered per list.',
                ],
            ],
            [
                'id' => 'panel-trash',
                'category' => 'panel',
                'title' => 'Recovering something deleted',
                'keywords' => 'trash bin deleted restore recover undo permanently gone retention',
                'body' => [
                    'Deleting does not destroy immediately. Deleted records go to Trash, grouped by what they are, and can be restored from there.',
                    'Trash empties itself on a retention schedule set by an administrator. Once a record leaves Trash it is gone - restore is the only recovery, so act while it is still listed.',
                ],
            ],
            [
                'id' => 'panel-account',
                'category' => 'account',
                'title' => 'Your password, passkeys and signed-in devices',
                'keywords' => 'password change security passkey two factor 2fa mfa authenticator devices sessions sign out',
                'body' => [
                    'Open the account menu from your avatar. Profile changes your name and email address; Security is everything about getting in.',
                    'On Security you can change your password, add a passkey so you can sign in without typing one, and turn on two-factor authentication.',
                    'That screen also lists every browser currently signed in to your account. Sign out anything you do not recognise - it takes effect on that device\'s very next request.',
                ],
            ],
            [
                'id' => 'panel-permissions',
                'category' => 'account',
                'title' => 'Why a page says you cannot see it',
                'keywords' => 'permission denied forbidden 403 role access cannot see missing menu admin',
                'body' => [
                    'What you can open is decided by the role your account holds, and roles are managed per organisation.',
                    'A page you have no permission for is not merely hidden - it refuses to open if you type its address. If something you need is missing, an administrator can grant it on the Roles screen; there is nothing to reinstall or restart.',
                ],
            ],
        ];
    }

    /**
     * @return list<array{title: string, items: list<array{q: string, a: string}>}>
     */
    private static function defaultQuestions(): array
    {
        return [
            [
                'title' => 'Using the panel',
                'items' => [
                    [
                        'q' => 'Can I change where the navigation sits?',
                        'a' => 'Yes. The appearance controls let the menu sit on the left, on the right or across the top, and the rest of the interface mirrors to match. The choice is remembered for your account.',
                    ],
                    [
                        'q' => 'Do lists update on their own?',
                        'a' => 'They stay current without a full page reload. How that happens - polling or a push connection - is a configuration choice, and nothing in the interface changes when it is switched.',
                    ],
                    [
                        'q' => 'Can I export what I am looking at?',
                        'a' => 'Yes, and the export honours the filters currently applied rather than dumping the whole table. Large exports run in the background and arrive as a notification when they are ready.',
                    ],
                ],
            ],
            [
                'title' => 'Access and security',
                'items' => [
                    [
                        'q' => 'I have forgotten my password.',
                        'a' => 'Use the "forgot password" link on the sign-in screen. If your account has a passkey you can sign in with that instead and change the password afterwards from Security.',
                    ],
                    [
                        'q' => 'Somebody else has my password. What now?',
                        'a' => 'Change it from Security. Doing so signs out every other device automatically, so whoever is already signed in loses access at the same moment rather than keeping their session.',
                    ],
                ],
            ],
        ];
    }
}
