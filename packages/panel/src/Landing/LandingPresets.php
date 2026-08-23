<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Landing;

/**
 * The shipped landing pages, as BLOCKS rather than as files.
 *
 * Aurora, Editorial and Console are ordered lists of sections from one library.
 * Marketing and Shadcn are the real Vue templates ported from the offered repos
 * (vue-js-landing-page and shadcn-vue-landing-page); their presets still seed
 * the editor, but public previews render the ported SFCs.
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
        return ['aurora', 'editorial', 'console', 'marketing', 'shadcn'];
    }

    /**
     * Resolve a host-facing alias to a shipped preset name.
     *
     * `composed` keeps the historical "default composed landing" wording.
     * `vue-marketing` / `vue-js` name the ported vue-js-landing-page template.
     * `shadcn-vue` names the ported shadcn-vue-landing-page template.
     */
    public static function resolve(string $name): string
    {
        $aliases = [
            'composed' => 'aurora',
            'vue-marketing' => 'marketing',
            'vue-js' => 'marketing',
            'shadcn-vue' => 'shadcn',
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
            'marketing' => self::marketing(),
            'shadcn' => self::shadcn(),
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

    /**
     * Marketing preset seeds for the ported younusaliakash/vue-js-landing-page
     * template (rendered by landing/VueJs, not Composed kit sections).
     *
     * Reimplemented as kit sections (no Bootstrap/jQuery/owl vendor). Hero is
     * brand-first and full-bleed; services, advantages, blog and contact map
     * onto features / showcase / articles / contact.
     */
    private static function marketing(): array
    {
        return [
            ['type' => 'hero', 'data' => [
                'brand' => 'Alxtexhpanel',
                'variant' => 'bleed',
                'title' => 'Promote the product your operators already run',
                'body' => 'A full marketing front door on the same kit that draws your panel: hero, services, pricing, proof, and a clear ask to start.',
                'primaryLabel' => 'Get started',
                'primaryHref' => '/register',
                'secondaryLabel' => 'Read the docs',
                'secondaryHref' => '/about',
                'note' => 'Shipped with the kit. Edit the sections in the panel.',
            ]],
            ['type' => 'features', 'data' => [
                'title' => 'Digital services that sell themselves',
                'body' => 'Four claims, even weight: the classic marketing rhythm without a carousel dependency.',
                'items' => [
                    ['title' => 'Grow your business', 'body' => 'One PHP class per screen so the admin surface stays shippable while marketing stays editable.'],
                    ['title' => 'Build products', 'body' => 'Resources, forms and tables in the kit; the landing is the public face of the same install.'],
                    ['title' => 'Succeed each day', 'body' => 'Keyset lists and deferred counts keep the operator screen fast while prospects read this page.'],
                    ['title' => 'Bring ideas to life', 'body' => 'Swap copy and section order in the landing editor without a deploy of Vue.'],
                ],
            ]],
            ['type' => 'showcase', 'data' => [
                'title' => 'The product, assembling itself',
                'body' => 'A drawn panel window rather than a stale screenshot, so the marketing page cannot lie about the UI.',
                'caption' => 'yourpanel.example / records',
                'rows' => 6,
            ]],
            ['type' => 'features', 'data' => [
                'title' => 'Advantages of shipping the kit',
                'body' => 'What the Colorlib-style advantage band becomes when every tile is a real claim.',
                'items' => [
                    ['title' => 'No Vue for admin screens', 'body' => 'Declare the resource in PHP; the Vue that draws it already ships.'],
                    ['title' => 'Tenancy that denies', 'body' => 'An unresolved tenant refuses rather than leaking across organisations.'],
                    ['title' => 'Backups you have restored', 'body' => 'Proven by a restore test, not by a green tick in a checklist.'],
                    ['title' => 'Roles that mean no', 'body' => 'Unticked abilities deny. An unreviewed policy grants nothing.'],
                ],
            ]],
            ['type' => 'pricing', 'data' => [
                'title' => 'Pricing',
                'body' => 'Pricing for everyone. Choose a plan, or start free.',
                'annualNote' => 'Two months free on annual',
                'items' => [
                    ['name' => 'Free', 'price' => '$0', 'annualPrice' => '$0', 'period' => '/month', 'body' => 'The whole kit, one panel.', 'label' => 'Get started', 'href' => '/register', 'features' => [['title' => 'One panel'], ['title' => 'Unlimited operators'], ['title' => 'Community support']]],
                    ['name' => 'Standard', 'price' => '$19', 'annualPrice' => '$190', 'period' => '/month', 'featured' => true, 'body' => 'Several portals and scheduled backups.', 'label' => 'Get started', 'href' => '/register', 'features' => [['title' => 'Unlimited panels'], ['title' => 'Scheduled backups'], ['title' => 'Email support']]],
                    ['name' => 'Premium', 'price' => '$79', 'annualPrice' => '$790', 'period' => '/month', 'body' => 'SSO and a named engineer.', 'label' => 'Contact sales', 'href' => '/help', 'features' => [['title' => 'SSO'], ['title' => 'Database-per-tenant'], ['title' => 'Priority support']]],
                ],
            ]],
            ['type' => 'testimonials', 'data' => [
                'title' => 'Testimonials',
                'body' => 'Attributed to nobody real until you replace them.',
                'items' => [
                    ['quote' => 'We replaced three internal dashboards with one panel and stopped writing Vue for admin screens.', 'name' => 'A customer', 'role' => 'Head of Operations'],
                    ['quote' => 'The landing and the panel share one install. That alone saved a week of glue.', 'name' => 'Another customer', 'role' => 'Product Lead'],
                    ['quote' => 'Pricing and FAQ are editable from the panel. Marketing stopped asking for deploys.', 'name' => 'A third', 'role' => 'CTO'],
                ],
            ]],
            ['type' => 'stats', 'data' => [
                'title' => 'About the numbers',
                'items' => [
                    ['value' => '5', 'label' => 'Shipped landing designs'],
                    ['value' => '14', 'label' => 'Section types in the library'],
                    ['value' => '1', 'label' => 'Inertia page for all of them'],
                    ['value' => '0', 'label' => 'Bootstrap or jQuery required'],
                ],
            ]],
            ['type' => 'articles', 'data' => [
                'title' => 'From the notes',
                'body' => 'Placeholder cards. Point each href at your own posts.',
                'items' => [
                    ['meta' => 'Guide', 'title' => 'Install the panel in one afternoon', 'body' => 'composer require, panel:install, point a resource at a model.', 'href' => '/about'],
                    ['meta' => 'Design', 'title' => 'Pick a landing without forking Vue', 'body' => 'Aurora, editorial, console, marketing, or shadcn via config or Panel::landing().', 'href' => '/about'],
                    ['meta' => 'Ops', 'title' => 'Backups you have actually restored', 'body' => 'Scheduled, monitored, and proven by a restore test.', 'href' => '/help'],
                ],
            ]],
            ['type' => 'contact', 'data' => [
                'title' => 'Contact',
                'body' => 'Display how to reach you. Wire a real form in your app when you need one.',
                'email' => 'hello@example.com',
                'phone' => '+1 555 0100',
                'address' => 'Replace this address in the landing editor.',
                'label' => 'Email us',
                'href' => 'mailto:hello@example.com',
            ]],
            ['type' => 'cta', 'data' => [
                'title' => 'Ready when your operators are',
                'body' => 'Install the package, open the front door, and edit the sections from the panel.',
                'label' => 'Get started',
                'href' => '/register',
            ]],
        ];
    }

    /**
     * Shadcn preset seeds for the ported leoMirandaa/shadcn-vue-landing-page
     * template (rendered by landing/ShadcnVue with copied SFCs and UI).
     * Sponsors, benefits, how-it-works, team, community, FAQ.
     */
    private static function shadcn(): array
    {
        return [
            ['type' => 'hero', 'data' => [
                'brand' => 'Alxtexhpanel',
                'variant' => 'bleed',
                'eyebrow' => 'Built-in landing',
                'title' => 'The operator kit with a product front door',
                'body' => 'Hero, sponsors, benefits, features, how it works, team, pricing and FAQ, composed from kit sections and edited in the panel.',
                'primaryLabel' => 'Get started',
                'primaryHref' => '/register',
                'secondaryLabel' => 'Read the docs',
                'secondaryHref' => '/about',
                'note' => 'MIT licensed. No card required.',
            ]],
            ['type' => 'logos', 'data' => [
                'title' => 'Trusted by teams that ship operator screens',
                'items' => [['name' => 'Your customer'], ['name' => 'Another customer'], ['name' => 'A third'], ['name' => 'And a fourth']],
            ]],
            ['type' => 'features', 'data' => [
                'title' => 'Benefits',
                'body' => 'Your shortcut to a public face that matches the panel behind it.',
                'items' => [
                    ['title' => 'Build brand trust', 'body' => 'One install serves the marketing page and the signed-in panel.'],
                    ['title' => 'More qualified leads', 'body' => 'Pricing, FAQ and proof sit on the same route guests already trust.'],
                    ['title' => 'Higher conversions', 'body' => 'Register and login links are the panel\'s own, not a parallel auth stack.'],
                    ['title' => 'Test marketing ideas', 'body' => 'Change sections in the editor; previews show every shipped design.'],
                ],
            ]],
            ['type' => 'bento', 'data' => [
                'title' => 'Features that carry weight',
                'body' => 'A bento when some capabilities deserve more space than others.',
                'items' => [
                    ['title' => 'Tables that stay fast', 'span' => 'large', 'accent' => true, 'body' => 'Keyset pagination and deferred counts: a million-row list costs what a ten-row list does.'],
                    ['title' => 'Forms from the model', 'span' => 'tall', 'body' => 'Thirty field types, validation, conditional sections.'],
                    ['title' => 'Tenancy that denies', 'body' => 'Unresolved tenant means refuse, never leak.'],
                    ['title' => 'Generated portals', 'body' => 'make:panel gives a working portal with its own guard.'],
                    ['title' => 'Roles and permissions', 'span' => 'wide', 'body' => 'Per-ability grants. Unticked means denied.'],
                ],
            ]],
            ['type' => 'steps', 'data' => [
                'title' => 'How it works',
                'body' => 'Three steps from empty repo to a live front door.',
                'items' => [
                    ['title' => 'Install', 'body' => 'composer require alxtexh-enterprise/panel, then panel:install.'],
                    ['title' => 'Pick a landing', 'body' => 'Panel::landing(\'shadcn\') or config panel.landing.design.'],
                    ['title' => 'Edit the sections', 'body' => 'Open Landing page in the panel and rearrange the blocks.'],
                ],
            ]],
            ['type' => 'testimonials', 'data' => [
                'title' => 'What operators say',
                'items' => [
                    ['quote' => 'We kept one design system for the panel and the marketing site. That was the whole win.', 'name' => 'A customer', 'role' => 'Design Lead'],
                    ['quote' => 'Switching aurora to shadcn was a config change, not a fork.', 'name' => 'Another customer', 'role' => 'Platform Engineer'],
                    ['quote' => 'The team section is honest: initials until we upload real faces.', 'name' => 'A third', 'role' => 'Founder'],
                ],
            ]],
            ['type' => 'team', 'data' => [
                'title' => 'The team',
                'body' => 'Placeholder people. Replace names and roles in the editor.',
                'items' => [
                    ['name' => 'A founder', 'role' => 'CEO', 'bio' => 'Owns the product story and the front door copy.'],
                    ['name' => 'An engineer', 'role' => 'Platform', 'bio' => 'Keeps resources fast and tenancy closed.'],
                    ['name' => 'A designer', 'role' => 'Product design', 'bio' => 'Keeps the landing and the panel on the same tokens.'],
                    ['name' => 'A support lead', 'role' => 'Customer success', 'bio' => 'Turns FAQ answers into articles operators can trust.'],
                ],
            ]],
            ['type' => 'cta', 'data' => [
                'title' => 'Join the operators already shipping',
                'body' => 'Community CTA without a Discord dependency. Point the button at your forum, Discord, or docs.',
                'label' => 'Open the docs',
                'href' => '/about',
            ]],
            ['type' => 'pricing', 'data' => [
                'title' => 'Transparent pricing',
                'body' => 'Per panel, not per seat.',
                'annualNote' => 'Two months free on annual',
                'items' => [
                    ['name' => 'Solo', 'price' => '$0', 'annualPrice' => '$0', 'period' => '/month', 'body' => 'The whole kit, one panel.', 'label' => 'Start free', 'href' => '/register', 'features' => [['title' => 'One panel'], ['title' => 'Unlimited operators'], ['title' => 'Community support']]],
                    ['name' => 'Team', 'price' => '$49', 'annualPrice' => '$490', 'period' => '/month', 'featured' => true, 'body' => 'Several portals and real backups.', 'label' => 'Start a trial', 'href' => '/register', 'features' => [['title' => 'Unlimited panels'], ['title' => 'Scheduled backups'], ['title' => 'Priority support']]],
                    ['name' => 'Scale', 'price' => 'Talk to us', 'period' => '', 'body' => 'Dedicated databases and SSO.', 'label' => 'Contact sales', 'href' => '/help', 'features' => [['title' => 'Database-per-tenant'], ['title' => 'SSO'], ['title' => 'A named engineer']]],
                ],
            ]],
            ['type' => 'contact', 'data' => [
                'title' => 'Contact',
                'body' => 'A quiet close before the FAQ. Replace the placeholders.',
                'email' => 'hello@example.com',
                'phone' => '+1 555 0100',
                'label' => 'Send a message',
                'href' => 'mailto:hello@example.com',
            ]],
            ['type' => 'faq', 'data' => [
                'title' => 'Frequently asked questions',
                'items' => [
                    ['question' => 'Do I clone the shadcn-vue landing repo?', 'answer' => 'No. The composition ships in the kit as sections. You pick shadcn via Panel::landing(\'shadcn\') or config.'],
                    ['question' => 'Can I keep aurora as the default?', 'answer' => 'Yes. panel.landing.design defaults to aurora, a full landing, not an empty page.'],
                    ['question' => 'Are these optional plugins?', 'answer' => 'No. Marketing and shadcn landings are pre-shipped offerings, like auth families.'],
                    ['question' => 'Can I edit the page after picking a design?', 'answer' => 'Yes. The Landing page editor stores your sections; presets are only the fallback.'],
                ],
            ]],
            ['type' => 'cta', 'data' => [
                'title' => 'Ship the front door with the panel',
                'body' => 'One package, five landing voices, one editor.',
                'label' => 'Get started',
                'href' => '/register',
            ]],
        ];
    }
}
