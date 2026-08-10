<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\Http\Controllers\OrganisationController;

/**
 * The organisation's name and logo - the SECOND shape, and the one that matters.
 *
 * A PAGE THAT DOES THINGS, not one that only shows them. Half the reference
 * app's page controllers are this shape, and a mechanism that handled only the
 * other half would have covered the easy pages and sent every screen with a
 * button back to hand-written routes. That is the failure mode this whole
 * exercise was meant to avoid, so it is proved here rather than assumed.
 *
 * THE URLS ARE UNCHANGED. `settings/organisation` is where operators and
 * bookmarks already go; a mechanism that renamed screens on adoption would be
 * one nobody adopts. `uri()` says so explicitly, and `actionUris()` puts the
 * save back on the page's own address rather than at an invented
 * `/organisation/update`.
 *
 * THE CONTROLLER KEEPS THE WORK. Logo promotion, expiry handling, deleting the
 * replaced file - that is this application's business logic and none of it
 * became more correct by moving. What moved is the DECLARATION: the route, the
 * navigation entry, the ability, and the fact that saving needs a different
 * grant from looking.
 */
class OrganisationPage extends Page
{
    protected static string $icon = 'building';

    /**
     * NOT IN THE SIDEBAR either - it is one entry in the settings index, which
     * is where every other settings screen is found. See `UserManagementPage`.
     */
    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function uri(): string
    {
        return 'settings/organisation';
    }

    /**
     * NULL, PRESERVING WHAT THIS SCREEN ALREADY DID.
     *
     * The controller this replaces had no ability check on the read path: any
     * authenticated operator could open it. The first version of this class
     * declared `manage_organisation`, which no role holds, and every one of them
     * was locked out of a screen they had yesterday - a policy change smuggled
     * into a refactor, which is the worst way to make one.
     *
     * Gating it is a real decision and a reasonable one. It is not this
     * migration's to take.
     */
    public static function ability(): ?string
    {
        return null;
    }

    /**
     * SEEING AND SAVING ARE DIFFERENT GRANTS, which is the reason each action
     * carries its own ability rather than inheriting the page's. Whoever may
     * read the organisation's details is not automatically whoever may rename
     * the company.
     */
    public static function actions(): array
    {
        /*
         * The writes were ungated too, and stay that way for the same reason.
         * The MECHANISM's point is that tightening this is now one line in one
         * file rather than four routes and a scattering of `abort_unless`.
         */
        return [
            'update' => null,
            'uploadLogo' => null,
            'logo' => null,
        ];
    }

    public static function actionMethods(): array
    {
        return ['update' => 'put', 'uploadLogo' => 'post', 'logo' => 'get'];
    }

    public static function actionUris(): array
    {
        // The save sits on the page's own address; the logo endpoints hang off it.
        /*
         * `logo/upload` RATHER THAN A SECOND VERB ON `logo`.
         *
         * `POST /settings/organisation/logo` and `GET` of the same path is legal
         * routing and unrepresentable in the generated client: Wayfinder keys
         * its action map by URI, so two routes at one address collide into a
         * duplicate object key and the file does not compile.
         *
         * Distinct paths are also simply clearer - one address does one thing.
         */
        return ['update' => '', 'uploadLogo' => 'logo/upload', 'logo' => 'logo'];
    }

    public static function component(): string
    {
        return 'settings/Organisation';
    }

    public static function data(Request $request): array
    {
        return app(OrganisationController::class)->props($request);
    }

    public static function update(Request $request): mixed
    {
        return app(OrganisationController::class)->update($request);
    }

    public static function uploadLogo(Request $request): mixed
    {
        return app(OrganisationController::class)->uploadLogo($request);
    }

    public static function logo(Request $request): mixed
    {
        return app(OrganisationController::class)->logo($request);
    }
}
