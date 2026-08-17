<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Models\ContentEntry;
use Alxtexh\Panel\Support\Changelog;
use Alxtexh\Panel\Support\HelpCentre;
use Alxtexh\Panel\Support\SupportEditing;

/**
 * The help centre: a searchable set of articles, a FAQ, and an About screen.
 *
 * THE SCREENS ARE THE PACKAGE'S AND THE WORDS ARE THE APPLICATION'S. Everything
 * here reads from `HelpCentre`, which ships articles describing only what the
 * PANEL does - search, tables, the trash, roles, the account screens - and lets
 * an application add its own or replace the lot. The reference application's
 * articles about fibre plans and routers stay in the reference application,
 * because a framework that shipped them would be shipping somebody else's
 * business.
 *
 * EVERY SCREEN IS OPT-OUTABLE per panel with `->without(['help'])`, and the
 * ROUTE goes rather than just the menu entry. A customer portal has no use for
 * an operator's help centre, and hiding the link while leaving the URL open is
 * how a screen ends up read by somebody it was never written for.
 *
 * ABOUT IS DRIVEN BY CONFIG, not by hardcoded copy. It answers "what is this
 * thing and who do I contact", and both answers belong to the installation.
 */
final class HelpController
{
    public function help(): Response
    {
        $articles = array_map(static function (array $article): array {
            $body = $article['body'] ?? [];

            $article['body'] = is_array($body)
                ? array_values(array_map(strval(...), $body))
                : (preg_split('/\n\s*\n/', trim((string) $body)) ?: [(string) $body]);

            return $article;
        }, HelpCentre::articles());

        return Inertia::render('support/Help', [
            'articles' => $articles,
            /*
             * DERIVED FROM THE ARTICLES, so a tab never appears with nothing
             * behind it - see HelpCentre::categories(). The reference app's
             * hardcoded "Subscribers" tab is exactly what this replaces.
             */
            'categories' => HelpCentre::categories(),
            'support' => SupportEditing::props(ContentEntry::KIND_ARTICLE),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('support/Faq', [
            'groups' => HelpCentre::questions(),
            'support' => SupportEditing::props(ContentEntry::KIND_FAQ),
        ]);
    }

    /**
     * What this installation is, and who to ask.
     *
     * READ FROM `panel.about`, WITH THE APP NAME AS THE FALLBACK. An About
     * screen naming the framework rather than the product is one that tells an
     * operator nothing and tells a customer something confusing.
     */
    public function about(Request $request): Response
    {
        $about = (array) config('panel.about', []);

        return Inertia::render('support/About', [
            'name' => $about['name'] ?? config('app.name'),
            'tagline' => $about['tagline'] ?? null,
            'description' => $about['description'] ?? null,
            'version' => $about['version'] ?? $this->installedPackageVersion(),
            /*
             * A LIST OF {label, href}, NOT FIXED FIELDS. Every installation has
             * a different set - a status page, a contract, an internal runbook -
             * and naming three of them in the shape would leave the fourth with
             * nowhere to go.
             */
            'links' => array_values((array) ($about['links'] ?? [])),
            'contact' => $about['contact'] ?? null,
            'extras' => SupportEditing::aboutExtras(),
            'support' => SupportEditing::props(ContentEntry::KIND_ABOUT),
        ]);
    }

    /**
     * What's new. Always routed with Help/FAQ/About so a stock install still
     * has the footer link. Empty until releases exist (config, GitHub sync, or
     * on-page editing).
     */
    public function whatsNew(): Response
    {
        return Inertia::render('Changelog', [
            'releases' => Changelog::releases(),
            'pageHeading' => "What's new",
            'support' => SupportEditing::props(ContentEntry::KIND_RELEASE),
        ]);
    }

    /**
     * Composer tag for this package, when config did not name one.
     *
     * PATH / BRANCH INSTALLS REPORT `dev-main` and similar. Those are not
     * product versions, so About stays quiet rather than printing a branch.
     */
    private function installedPackageVersion(): ?string
    {
        if (! class_exists(\Composer\InstalledVersions::class)) {
            return null;
        }

        if (! \Composer\InstalledVersions::isInstalled('alxtexh-enterprise/panel')) {
            return null;
        }

        $pretty = \Composer\InstalledVersions::getPrettyVersion('alxtexh-enterprise/panel');

        if (! is_string($pretty) || $pretty === '') {
            return null;
        }

        $pretty = ltrim($pretty, 'v');

        if (preg_match('/^\d+\.\d+/', $pretty) !== 1) {
            return null;
        }

        return $pretty;
    }
}
