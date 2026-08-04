<?php

declare(strict_types=1);

namespace PanelKit\Panel\Landing;

/**
 * The shipped landing pages, as BLOCKS rather than as files.
 *
 * THEY ARE THE PACKAGE'S NOW. All three lived in the reference application, so
 * `composer require panelkit/panel` gave you a component that draws landing
 * sections and nothing that used it - no designs, no route, no editor. The
 * README said the front page was editable from the panel; only one
 * installation in the world could do it.
 *
 * THIS IS WHAT CHANGED. Aurora, Editorial and Console used to be three
 * hand-written Vue pages, which made a fourth design a fourth file and made
 * editing a word a deploy. They are now three ORDERED LISTS OF SECTIONS drawn
 * from one library - so the difference between them is composition and copy,
 * which is what the difference between two landing pages actually is.
 *
 * A PRESET IS A STARTING POINT, NOT A TEMPLATE. It seeds the editable page; once
 * an installation has saved its own arrangement, that is what renders and these
 * are only the fallback. See `LandingController`.
 */
final class LandingPresets
{
    /** @return list<string> */
    public static function names(): array
    {
        return ['aurora', 'editorial', 'console'];
    }

    /**
     * @return list<array{type: string, data: array<string, mixed>}>
     */
    public static function get(string $name): array
    {
        return match ($name) {
            'editorial' => self::editorial(),
            'console' => self::console(),
            default => self::aurora(),
        };
    }

    /** The modern gradient SaaS page: proof-heavy, priced, closes hard. */
    private static function aurora(): array
    {
        return [
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Built on Laravel, Inertia and Vue',
                'title' => 'The operator screen your product deserves',
                'body' => 'Resources, tables, forms and tenancy in PHP. No Vue to write, and a panel that stays fast at a quarter of a million rows.',
                'primaryLabel' => 'Get started',
                'primaryHref' => '/register',
                'secondaryLabel' => 'Read the docs',
                'secondaryHref' => '/about',
                'note' => 'MIT licensed. No card required.',
            ]],
            ['type' => 'logos', 'data' => [
                'title' => 'Running operator screens at',
                /*
                 * PLACEHOLDER NAMES, and deliberately obvious ones. These were
                 * the reference application's customers - an ISP's - so every
                 * installation of this package would have shipped with a logo
                 * cloud naming four fibre operators it has never heard of.
                 * A name somebody must replace should look like one.
                 */
                'items' => [['name' => 'Your customer'], ['name' => 'Another customer'], ['name' => 'A third'], ['name' => 'And a fourth']],
            ]],
            /*
             * A BENTO RATHER THAN NINE EQUAL CARDS. Weighting the tiles is the
             * difference between a list of capabilities and a claim about which
             * ones matter - and the two that sell this product are the table
             * that stays fast and the tenancy that refuses.
             */
            ['type' => 'bento', 'data' => [
                'title' => 'One PHP class per screen',
                'body' => 'The schema travels once and is cached. The rows travel on every interaction. Nothing else has to.',
                'items' => [
                    ['title' => 'Tables that stay fast', 'span' => 'large', 'accent' => true, 'body' => 'Keyset pagination, deferred counts and no SELECT * - a list of a million rows costs what a list of ten does. Four queries a page, asserted on every commit.'],
                    ['title' => 'Tenancy that denies', 'span' => 'tall', 'body' => 'An unresolved tenant refuses rather than leaking. Enforced by an enumerated isolation matrix, not by remembering to add a where clause.'],
                    ['title' => 'Forms from the model', 'body' => 'Thirty field types, validation, conditional sections.'],
                    ['title' => 'Backups you have restored', 'body' => 'Proven by a restore test, not by a green tick.'],
                    ['title' => 'Roles and permissions', 'span' => 'wide', 'body' => 'Per-ability grants and prebuilt templates. The panel denies anything unticked, so an unreviewed policy grants nothing.'],
                    ['title' => 'Generated portals', 'body' => 'make:panel gives you a working portal with its own guard.'],
                ],
            ]],

            /*
             * THE PRODUCT, ASSEMBLING ITSELF as the reader scrolls past. It is
             * drawn rather than screenshotted - see `PkShowcase` - so it cannot
             * go stale and costs no request on the page that must be fastest.
             */
            ['type' => 'showcase', 'data' => [
                'title' => 'This is the screen you get',
                'body' => 'Declared in PHP, rendered by the packages, routed by discovery. No Vue was written to make it.',
                'caption' => 'yourpanel.example / records',
                'rows' => 6,
            ]],

            ['type' => 'stats', 'data' => [
                'title' => 'Measured, not asserted',
                'items' => [
                    ['value' => '250k', 'label' => 'Rows in the reference app'],
                    ['value' => '1,492', 'label' => 'Tests on every commit'],
                    ['value' => '4', 'label' => 'Queries per list page'],
                    ['value' => '3', 'label' => 'Databases supported'],
                ],
            ]],
            ['type' => 'testimonials', 'data' => [
                'title' => 'What operators say',
                'items' => [
                    // Attributed to nobody real. A shipped testimonial with a
                    // plausible name is a fabricated endorsement the moment an
                    // installation forgets to change it.
                    ['quote' => 'We replaced three internal dashboards with one panel and stopped writing Vue for admin screens entirely.', 'name' => 'A customer', 'role' => 'Head of Operations'],
                    ['quote' => 'The tenancy model refuses rather than guesses. That distinction has saved us twice.', 'name' => 'Another customer', 'role' => 'Platform Engineer'],
                    ['quote' => 'A record list that stays instant at 250,000 rows was the whole reason we moved.', 'name' => 'A third', 'role' => 'CTO'],
                ],
            ]],
            ['type' => 'pricing', 'data' => [
                'title' => 'Priced per panel, not per seat',
                'body' => 'Your operators should not cost you money to add.',
                'annualNote' => 'Two months free on annual',
                'items' => [
                    ['name' => 'Solo', 'price' => '$0', 'annualPrice' => '$0', 'period' => '/month', 'body' => 'The whole kit, one panel.', 'label' => 'Start free', 'href' => '/register', 'features' => [['title' => 'One panel'], ['title' => 'Unlimited operators'], ['title' => 'Community support']]],
                    ['name' => 'Team', 'price' => '$49', 'annualPrice' => '$490', 'period' => '/month', 'featured' => true, 'body' => 'Several portals and real backups.', 'label' => 'Start a trial', 'href' => '/register', 'features' => [['title' => 'Unlimited panels'], ['title' => 'Scheduled backups'], ['title' => 'Priority support']]],
                    ['name' => 'Scale', 'price' => 'Talk to us', 'period' => '', 'body' => 'Dedicated databases and SSO.', 'label' => 'Contact sales', 'href' => '/help', 'features' => [['title' => 'Database-per-tenant'], ['title' => 'SSO'], ['title' => 'A named engineer']]],
                ],
            ]],
            ['type' => 'faq', 'data' => [
                'title' => 'Questions people ask first',
                'items' => [
                    ['question' => 'Do I have to write any Vue?', 'answer' => 'No. A screen is one PHP class. The Vue that renders it ships in the packages.'],
                    ['question' => 'Which databases are supported?', 'answer' => 'MySQL, PostgreSQL and SQLite, and the matrix is enforced by tests rather than documented and hoped for.'],
                    ['question' => 'Is it multi-tenant?', 'answer' => 'Yes - column, database or hybrid. An unresolved tenant denies rather than falling back to everything.'],
                    ['question' => 'Can I change this page?', 'answer' => 'Yes. It is a list of sections you edit in the panel; this answer is one of them.'],
                ],
            ]],
            ['type' => 'cta', 'data' => [
                'title' => 'Build the operator screen this afternoon',
                'body' => 'Install the package, point it at a model, and visit the route it made.',
                'label' => 'Get started',
                'href' => '/register',
            ]],
        ];
    }

    /**
     * The flat feature grid, kept for the designs that should NOT have a bento.
     *
     * Editorial is a magazine and Console is a terminal; both want even weight
     * and a predictable rhythm, which is the opposite of what a bento is for.
     */
    private static function featureGrid(): array
    {
        return ['type' => 'features', 'data' => [
            'title' => 'One PHP class per screen',
            'body' => 'The schema travels once and is cached. The rows travel on every interaction.',
            'items' => [
                ['title' => 'Tables that scale', 'body' => 'Keyset pagination, deferred counts and no SELECT * - a list costs the same at a million rows as at ten.'],
                ['title' => 'Forms from the model', 'body' => 'Thirty field types, validation, conditional sections and repeaters as rows.'],
                ['title' => 'Tenancy that denies', 'body' => 'An unresolved tenant denies rather than leaks. Enforced by an enumerated isolation matrix.'],
                ['title' => 'Backups you have restored', 'body' => 'Scheduled, monitored, and proven by a restore test rather than by a green tick.'],
                ['title' => 'Roles and permissions', 'body' => 'Per-ability grants, prebuilt role templates, and a panel that denies anything unticked.'],
                ['title' => 'Generated portals', 'body' => 'make:panel produces a working portal with its own guard, routes and navigation.'],
            ],
        ]];
    }

    /** The quiet typographic page: fewer sections, more prose, no logos. */
    private static function editorial(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'title' => 'A panel is a decision about where complexity lives',
                'body' => 'PanelKit puts it in PHP, next to the model, where it can be tested - and leaves the browser to draw.',
                'primaryLabel' => 'Read the thinking',
                'primaryHref' => '/about',
                'secondaryLabel' => 'Get started',
                'secondaryHref' => '/register',
            ]],
            self::featureGrid(),
            ['type' => 'steps', 'data' => [
                'title' => 'Three commands',
                'items' => [
                    ['title' => 'Install', 'body' => 'composer require panelkit/panel, then panel:install.'],
                    ['title' => 'Point it at a model', 'body' => 'make:panel-resource Customer --generate reads the table.'],
                    ['title' => 'Open the route', 'body' => 'Discovery registered it. There was nothing to wire.'],
                ],
            ]],
            $by('testimonials'),
            $by('pricing'),
            $by('faq'),
            $by('cta'),
        ]));
    }

    /** The developer-tool page: shows the class, then the numbers. */
    private static function console(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'panelkit/panel',
                'title' => 'One class. A working screen.',
                'body' => 'A resource declares its table, its form and its policy. The routes, the pages and the API come with it.',
                'primaryLabel' => 'Install',
                'primaryHref' => '/register',
                'secondaryLabel' => 'API reference',
                'secondaryHref' => '/about',
                'note' => 'PHP 8.3+, Laravel 11+',
            ]],
            $by('stats'),
            self::featureGrid(),
            $by('pricing'),
            $by('faq'),
            $by('cta'),
        ]));
    }
}
