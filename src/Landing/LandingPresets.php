<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Landing;

/** Reference-verified landing compositions built from reusable kit sections. */
final class LandingPresets
{
    /** @return list<string> */
    public static function names(): array
    {
        return ['shadcn'];
    }

    public static function resolve(string $name): string
    {
        return in_array($name, self::names(), true) ? $name : '';
    }

    /** @return list<array{type: string, data: array<string, mixed>}> */
    public static function get(string $name): array
    {
        if (self::resolve($name) !== 'shadcn') {
            return [];
        }

        return [
            ['type' => 'hero', 'data' => [
                'brand' => 'ShadcnStore', 'eyebrow' => 'New: Premium Template Collection',
                'title' => 'Build Better Web Applications with Ready-Made Components',
                'body' => 'Accelerate development with curated blocks, templates, landing pages, and admin dashboards built for modern teams.',
                'primaryLabel' => 'Get Started Free', 'primaryHref' => '/register',
                'secondaryLabel' => 'Watch Demo', 'secondaryHref' => '#features', 'variant' => 'bleed',
            ]],
            ['type' => 'logos', 'data' => ['title' => 'Trusted by leading companies worldwide', 'items' => array_map(static fn (string $name): array => ['name' => $name], ['Shopify', 'Netflix', 'Spotify', 'Airbnb', 'Dropbox', 'Stripe', 'Google', 'Apple'])]],
            ['type' => 'stats', 'data' => ['items' => [
                ['value' => '500+', 'label' => 'Components'], ['value' => '25K+', 'label' => 'Downloads'],
                ['value' => '10K+', 'label' => 'Developers'], ['value' => '4.9', 'label' => 'Rating'],
            ]]],
            ['type' => 'features', 'data' => ['title' => 'Everything you need to build amazing web applications', 'body' => 'A consistent, accessible foundation for admin panels, SaaS products, and internal tools.', 'items' => [
                ['title' => 'Curated component library', 'body' => 'Hand-picked blocks and templates designed for quality and reliability.'],
                ['title' => 'Ready-to-use templates', 'body' => 'Copy, adapt, and ship polished pages without starting from scratch.'],
                ['title' => 'Responsive by default', 'body' => 'Mobile-first layouts that remain useful on every screen size.'],
                ['title' => 'Theme customization', 'body' => 'Change colors, surfaces, density, and appearance without rewriting components.'],
                ['title' => 'Developer first', 'body' => 'Typed, composable building blocks with clear integration boundaries.'],
                ['title' => 'Production ready', 'body' => 'Accessible interactions and dependable patterns for real applications.'],
            ]]],
            ['type' => 'showcase', 'data' => ['title' => 'Components that accelerate development', 'body' => 'Build consistent interfaces faster with a reusable design system.', 'caption' => 'dashboard.example.com', 'rows' => 7]],
            ['type' => 'pricing', 'data' => ['title' => 'Choose your plan', 'body' => 'Start free and upgrade when your product needs more.', 'annualNote' => 'Save 20% on annual billing', 'items' => [
                ['name' => 'Free', 'price' => '$0', 'annualPrice' => '$0', 'period' => '/ month', 'body' => 'Perfect for getting started.', 'label' => 'Get Started', 'href' => '/register', 'features' => [['title' => '50+ free components'], ['title' => 'Basic dashboard templates'], ['title' => 'Community support']]],
                ['name' => 'Pro', 'price' => '$19', 'annualPrice' => '$15', 'period' => '/ month', 'body' => 'For developers building serious products.', 'label' => 'Get Started', 'href' => '/register', 'featured' => true, 'features' => [['title' => 'Premium templates'], ['title' => 'Advanced layouts'], ['title' => 'Priority support']]],
                ['name' => 'Lifetime', 'price' => '$299', 'period' => 'one time', 'body' => 'Everything, with no recurring fees.', 'label' => 'Get Started', 'href' => '/register', 'features' => [['title' => 'Lifetime updates'], ['title' => 'Commercial license'], ['title' => 'VIP support']]],
            ]]],
            ['type' => 'testimonials', 'data' => ['title' => 'Empowering innovation worldwide', 'body' => 'Join teams building exceptional digital experiences.', 'items' => [
                ['quote' => 'The component system is so well-architected that complex applications feel simple to build.', 'name' => 'Alexandra Mitchell', 'role' => 'Senior Frontend Developer'],
                ['quote' => 'The design system is beautiful and consistent. We prototype ideas quickly and ship with confidence.', 'name' => 'Priya Sharma', 'role' => 'Product Designer'],
                ['quote' => 'The accessibility features are top-notch and the performance is stellar.', 'name' => 'Robert Kim', 'role' => 'Engineering Manager'],
            ]]],
            ['type' => 'faq', 'data' => ['title' => 'Frequently asked questions', 'body' => 'Everything you need to know about integrating the template.', 'items' => [
                ['question' => 'How do I integrate the components?', 'answer' => 'Install PanelKit, choose a landing preset, and edit its server-provided sections from the panel.'],
                ['question' => 'Can I use it for commercial projects?', 'answer' => 'Yes. Configure your own brand, content, routes, and licensing terms for your application.'],
                ['question' => 'Is the design responsive?', 'answer' => 'Yes. The sections use responsive Tailwind layouts and accessible native interactions.'],
                ['question' => 'Can I change the content later?', 'answer' => 'Yes. Content is represented as editable landing sections rather than hardcoded page markup.'],
            ]]],
            ['type' => 'cta', 'data' => ['title' => 'Supercharge your team’s performance today', 'body' => 'Stop building from scratch. Start with production-ready components that fit your workflow.', 'label' => 'Browse Components', 'href' => '#features']],
        ];
    }
}
