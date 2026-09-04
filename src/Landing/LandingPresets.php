<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Landing;

/**
 * The shipped landing pages, as BLOCKS rather than as files.
 *
 * Aurora, Editorial, Console, Studio, Product, Agency, Hospitality and
 * Portfolio are ordered lists of sections from one library.
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
        return [
            'aurora', 'editorial', 'console', 'studio',
            'product', 'agency', 'restaurant', 'hotel', 'portfolio', 'dashboard',
        ];
    }

    /**
     * Resolve a host-facing alias to a shipped preset name.
     *
     * `composed` keeps the historical "default composed landing" wording.
     */
    public static function resolve(string $name): string
    {
        $aliases = [
            'composed' => 'aurora',
        ];

        $resolved = $aliases[$name] ?? $name;

        return in_array($resolved, self::names(), true) ? $resolved : 'aurora';
    }

    /**
     * @return list<array{type: string, data: array<string, mixed>}>
     */
    public static function get(string $name): array
    {
        return match (self::resolve($name)) {
            'editorial' => self::editorial(),
            'console' => self::console(),
            'studio' => self::studio(),
            'product' => self::product(),
            'agency' => self::agency(),
            'restaurant' => self::restaurant(),
            'hotel' => self::hotel(),
            'portfolio' => self::portfolio(),
            'dashboard' => self::dashboard(),
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
                'body' => 'Alxtexhpanel puts it in PHP, next to the model, where it can be tested - and leaves the browser to draw.',
                'primaryLabel' => 'Read the thinking',
                'primaryHref' => '/about',
                'secondaryLabel' => 'Get started',
                'secondaryHref' => '/register',
            ]],
            self::featureGrid(),
            ['type' => 'steps', 'data' => [
                'title' => 'Three commands',
                'items' => [
                    ['title' => 'Install', 'body' => 'composer require alxtexh-enterprise/panel, then panel:install.'],
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
                'eyebrow' => 'alxtexh-enterprise/panel',
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

    /** The brand-first workshop page: precise, warm graphite, operator product. */
    private static function studio(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Precision tooling for operators',
                'title' => 'The workshop where panels are made',
                'body' => 'A studio for building operator screens. Declare the schema in PHP, and the interface assembles itself: tables, forms, navigation and permissions from one source of truth.',
                'primaryLabel' => 'Open the studio',
                'primaryHref' => '/register',
                'secondaryLabel' => 'See how it works',
                'secondaryHref' => '/about',
            ]],
            ['type' => 'steps', 'data' => [
                'title' => 'From blank file to running screen',
                'items' => [
                    ['title' => 'Describe the record', 'body' => 'One PHP class names the table columns, the form fields and the access rules.'],
                    ['title' => 'Let the framework build', 'body' => 'Routes, navigation, search, export and the API endpoint arrive with no wiring.'],
                    ['title' => 'Ship to your operators', 'body' => 'Every screen is tenant-scoped, permission-gated and fast at scale from the start.'],
                ],
            ]],
            self::featureGrid(),
            $by('showcase'),
            $by('stats'),
            $by('testimonials'),
            $by('pricing'),
            $by('faq'),
            ['type' => 'cta', 'data' => [
                'title' => 'Open the workshop',
                'body' => 'Install the package, point it at a model, and visit the screen it made.',
                'label' => 'Get started',
                'href' => '/register',
            ]],
        ]));
    }

    /** Product-led SaaS composition inspired by the supplied dashboard starters. */
    private static function product(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'A calmer way to run your business',
                'title' => 'Everything your team needs, in one clear workspace',
                'body' => 'Turn operational work into a focused, measurable workflow with a panel that grows with your product.',
                'primaryLabel' => 'Start building', 'primaryHref' => '/register',
                'secondaryLabel' => 'Explore the platform', 'secondaryHref' => '/about',
            ]],
            $by('logos'), ['type' => 'marquee', 'data' => [
                'title' => 'A workspace that keeps moving',
                'items' => [['name' => 'Fast navigation'], ['name' => 'Reusable blocks'], ['name' => 'Accessible by default'], ['name' => 'Ready for Laravel']],
            ]], $by('showcase'), $by('bento'), $by('steps'), $by('pricing'), $by('faq'), $by('cta'),
        ]));
    }

    /** Studio/agency composition: visual proof, process, team and contact. */
    private static function agency(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Independent digital studio',
                'title' => 'Work that makes complex products feel simple',
                'body' => 'A flexible, editorial landing system for studios, agencies and teams with something worth showing.',
                'primaryLabel' => 'Start a conversation', 'primaryHref' => '/help',
                'secondaryLabel' => 'See our work', 'secondaryHref' => '#work',
            ]],
            $by('showcase'), ['type' => 'marquee', 'data' => [
                'title' => 'Selected capabilities',
                'items' => [['name' => 'Strategy'], ['name' => 'Design'], ['name' => 'Systems'], ['name' => 'Delivery']],
            ]], $by('features'), $by('steps'), $by('team'), $by('testimonials'), $by('contact'), $by('cta'),
        ]));
    }

    /** Hospitality composition with warm storytelling and conversion points. */
    private static function restaurant(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Good food, thoughtfully served',
                'title' => 'A table worth making time for',
                'body' => 'A reusable hospitality landing composition for restaurants, cafés and food brands.',
                'primaryLabel' => 'Book a table', 'primaryHref' => '/register',
                'secondaryLabel' => 'View the menu', 'secondaryHref' => '/about',
            ]],
            ['type' => 'features', 'data' => [
                'title' => 'Made for the moments between meals',
                'body' => 'Menus, reservations, private dining and the story behind every plate.',
                'items' => [
                    ['title' => 'Seasonal ingredients', 'body' => 'Menus shaped by what is best right now.'],
                    ['title' => 'A room with a feeling', 'body' => 'Warm hospitality from the first hello to the last course.'],
                    ['title' => 'Gather together', 'body' => 'Private dining and celebrations made effortless.'],
                ],
            ]],
            $by('showcase'), $by('testimonials'), $by('contact'), $by('faq'), $by('cta'),
        ]));
    }

    /** Hotel/resort composition with room, experience and booking sections. */
    private static function hotel(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Stay somewhere memorable',
                'title' => 'A slower place to arrive',
                'body' => 'An immersive, image-ready composition for hotels, retreats and destination experiences.',
                'primaryLabel' => 'Check availability', 'primaryHref' => '/register',
                'secondaryLabel' => 'Discover the stay', 'secondaryHref' => '#experiences',
            ]],
            $by('showcase'), ['type' => 'marquee', 'data' => [
                'title' => 'The stay, at your pace',
                'items' => [['name' => 'Rooms'], ['name' => 'Dining'], ['name' => 'Wellness'], ['name' => 'Experiences']],
            ]], $by('features'), $by('steps'), $by('testimonials'), $by('contact'), $by('cta'),
        ]));
    }

    /** Portfolio composition with proof-first case studies and contact. */
    private static function portfolio(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Selected work',
                'title' => 'Ideas with a point of view',
                'body' => 'A portfolio-ready composition for designers, makers and product teams.',
                'primaryLabel' => 'View selected work', 'primaryHref' => '#work',
                'secondaryLabel' => 'Get in touch', 'secondaryHref' => '#contact',
            ]],
            $by('showcase'), $by('bento'), $by('stats'), $by('testimonials'), $by('contact'), $by('cta'),
        ]));
    }

    /** Dashboard/product hybrid composition for developer tools and platforms. */
    private static function dashboard(): array
    {
        $aurora = self::aurora();
        $by = static fn (string $type): array => collect($aurora)->firstWhere('type', $type) ?? [];

        return array_values(array_filter([
            ['type' => 'hero', 'data' => [
                'eyebrow' => 'Your operational command centre',
                'title' => 'See the signal. Move with confidence.',
                'body' => 'A dashboard-first landing composition for SaaS products, internal platforms and data-rich teams.',
                'primaryLabel' => 'Open the dashboard', 'primaryHref' => '/register',
                'secondaryLabel' => 'Read the docs', 'secondaryHref' => '/about',
            ]],
            $by('stats'), $by('showcase'), $by('features'), $by('bento'), $by('pricing'), $by('cta'),
        ]));
    }
}
