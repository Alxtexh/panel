/**
 * What every landing design says - Part G.9.
 *
 * THE COPY IS NOT IN THE DESIGNS. Three landing pages that each hardcode the
 * feature list are three places to update when the product changes, and the
 * one nobody updates is the one a customer reads. The designs differ in how
 * they LOOK; what they claim comes from here.
 *
 * A CONSUMER OVERRIDES THIS, not the templates. Shipping several designs is
 * only useful if adopting one means editing content rather than markup.
 */

export interface Feature {
    title: string;
    body: string;
    /** Lucide icon name, resolved by the design that renders it. */
    icon: 'gauge' | 'shield' | 'layers' | 'plug' | 'sparkles' | 'users';
}

export interface Plan {
    name: string;
    price: string;
    cadence: string;
    blurb: string;
    features: string[];
    /** Exactly one plan may be featured; more than one is none. */
    featured?: boolean;
}

export const HERO = {
    eyebrow: 'Admin panels, without the admin',
    title: 'The operator screen your product deserves',
    subtitle:
        'Tables that stay fast at a quarter of a million rows, tenancy that fails closed, ' +
        'and permissions your customers can actually audit. Declare a class; get a screen.',
    primaryCta: 'Start free',
    secondaryCta: 'See it running',
};

export const FEATURES: Feature[] = [
    {
        icon: 'gauge',
        title: 'Fast at real scale',
        body: 'Keyset pagination, per-shape indexes and no blocking counts. Every screen is measured against a budget in CI.',
    },
    {
        icon: 'shield',
        title: 'Tenancy that fails closed',
        body: 'A null tenant denies rather than matching everything. Isolation is proven by a matrix that fails when a new resource forgets it.',
    },
    {
        icon: 'layers',
        title: 'A screen is a class',
        body: 'Declare columns, filters and a form. Routes, policies, abilities and navigation come with it - nothing to wire.',
    },
    {
        icon: 'users',
        title: 'Roles people can read',
        body: 'A permission matrix generated from the registry, with templates for the shapes every business actually has.',
    },
    {
        icon: 'plug',
        title: 'Optional everything',
        body: 'Redis, Reverb, Octane and a dedicated database per tenant are supported, never required. It runs on SQLite and a single process.',
    },
    {
        icon: 'sparkles',
        title: 'An assistant with limits',
        body: "Bring your own key. It answers with the asker's permissions, never reaches another organisation, and publishes what it may do.",
    },
];

export const PLANS: Plan[] = [
    {
        name: 'Starter',
        price: '$0',
        cadence: 'forever',
        blurb: 'For the first customer, and for proving it works.',
        features: ['One panel', 'Up to 3 operators', 'Community support'],
    },
    {
        name: 'Growth',
        price: '$49',
        cadence: 'per month',
        blurb: 'For a product with paying customers and a support rota.',
        features: [
            'Unlimited panels',
            'Unlimited operators',
            'Scheduled reports and backups',
            'Email support',
        ],
        featured: true,
    },
    {
        name: 'Enterprise',
        price: 'Talk to us',
        cadence: '',
        blurb: 'For contractual isolation, an SLA, and a security review.',
        features: [
            'Database per tenant',
            'SSO and audit export',
            'Priority support',
            'Deployment review',
        ],
    },
];

export const FAQS = [
    {
        q: 'Do I have to run Redis, or a queue, or Octane?',
        a: 'No. They are supported when you want them and never assumed. A single PHP process and SQLite is a valid production deployment for a small installation.',
    },
    {
        q: 'Which databases work?',
        a: 'SQLite, MySQL/MariaDB and PostgreSQL are all first-class, and a test asserts the generated SQL per driver so support does not quietly rot.',
    },
    {
        q: "How is one customer kept out of another customer's data?",
        a: 'Every query is scoped, a missing tenant denies rather than matching everything, and a cross-tenant matrix exercises every resource against every mutation path.',
    },
    {
        q: 'Can I change how it looks?',
        a: 'The components are yours - plain Vue files with Tailwind tokens. Your brand colour flows through everything, and no vendor release changes your screens.',
    },
];
