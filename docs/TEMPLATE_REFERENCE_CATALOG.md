# Template reference catalog

This catalog records the external references reviewed for PanelKit's reusable
landing and dashboard system. The repositories were cloned into an isolated
temporary directory for inspection; their source is not copied into PanelKit.

## Compatibility rule

The references are React/Next.js or React/Vite applications. Their JSX,
Next-specific routing, server components, and React state cannot be imported
unchanged into a Laravel/Inertia/Vue package. PanelKit therefore ports the
visual language and interaction patterns into Vue components and PHP section
data, keeping the server contract reusable and the resulting design native to
Laravel.

Only repositories with an explicit MIT license are candidates for studying
implementation details. Repositories with no license file are inspiration-only
unless their owners grant written permission.

## Reviewed references

| Reference | Stack | Strong ideas to port | License signal |
| --- | --- | --- | --- |
| arhamkhnz/next-shadcn-admin-dashboard | Next, shadcn, Recharts | Dense admin shell, dashboard families, data-heavy screens | MIT |
| Kiranism/next-shadcn-dashboard-starter | Next, shadcn, Motion, Recharts | Theme presets, RBAC navigation, skeletons, top-loader, query-driven tables | MIT |
| chanseek/shadcn-dashboard | Next/Vite variants | Framework-neutral dashboard components, theme customizer, chart/data-table docs | MIT-style file present |
| aman-sinha-dev/Shadcn-Nextjs-Dashboard | Next, shadcn, Framer Motion, Lenis | Smooth landing scroll, projects/inventory/staff views, polished dashboard cards | MIT |
| Qualiora/shadboard | Next, shadcn | Full/starter kits, i18n, RTL, docs, many page families | MIT |
| satnaing/shadcn-admin | Vite, React, TanStack Router | Navigation progress, test coverage, responsive shell, task/user workflows | MIT |
| benlhachemi/next-saas-lp | Next, shadcn, Framer Motion, Lenis | SaaS hero, animated testimonials, text reveal, feature/pricing rhythm | No license file: inspiration-only |
| magicuidesign/app-template | Next, Magic UI, Motion, Recharts | Marquees, device mockups, animated testimonials, rich primitive catalog | No license file: inspiration-only |
| Bilal-EZ-ZAIM/Saas-landing-page | Next, shadcn, Framer Motion, Recharts | Complete SaaS conversion flow, pricing, FAQ, image slider | No license file: inspiration-only |
| studiomeyer-ai/restaurant-template | Next, Tailwind | Hospitality editorial structure and content hierarchy | MIT |
| studiomeyer-ai/hotel-template | Next, Tailwind, Motion, Lenis | Preloader, cursor effects, smooth scroll, rooms/experiences/booking flow | MIT |
| studiomeyer-ai/free-landing-template | Next, Tailwind, Lenis, next-intl | Agency portfolio, marquee, process, work, testimonials, i18n | MIT |
| studiomeyer-ai/design-template | Next, Tailwind, Motion, next-intl | Noise/cursor effects, integrations, pricing, team, FAQ, SEO routes | MIT |

## PanelKit implementation map

The reusable implementation is deliberately split into three layers:

1. **PHP presets** compose ordered section data. They are safe fallbacks and
   can be replaced by the landing editor without a deploy.
2. **Vue landing blocks** own rendering and animation. A block never knows
   which preset selected it, so blocks remain reusable for SaaS, ISP,
   hospitality, agency, portfolio, and internal-product sites.
3. **Application chrome and content** arrive through props/configuration. Brand,
   links, prices, testimonials, images, locale, and calls to action are not
   hardcoded reference-app content.

The first reusable catalog now includes: `aurora`, `editorial`, `console`,
`studio`, `product`, `agency`, `restaurant`, `hotel`, `portfolio`, and
`dashboard`. The original four remain backward compatible. Dashboard pages
also expose reusable visual families: `operations`, `analytics`, `commerce`,
`minimal`, and `executive`; the PHP widget declarations and deferred data do
not change when a skin changes.

## Interaction patterns to standardize next

- Inertia page progress with reduced-motion fallback and view transitions.
- Deferred dashboard widgets with skeletons, independent error boundaries,
  retry controls, and layout persistence.
- A dashboard skin registry so the same PHP widgets can render in compact,
  analytical, commerce, CRM, or operations layouts.
- A visual template gallery with live previews and a one-click “use this
  design” action in the landing editor.
- Image/video fields with lazy loading, responsive sources, alt text validation,
  and a safe remote-asset policy.
- Locale/RTL-aware spacing and navigation from the start.
