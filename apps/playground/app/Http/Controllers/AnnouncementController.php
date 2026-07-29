<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\PanelManager;

/**
 * The screen `AnnouncementsPlugin` installs.
 *
 * IT IS DELIBERATELY THIN. What is being demonstrated is that a package can put
 * a working, authenticated, tenant-scoped screen into a portal without the
 * application wiring anything - not what the screen contains. A plugin's own
 * controller would query its own tables here.
 *
 * NOTE WHAT IT DOES NOT DO: no `auth` middleware, no tenancy call, no route
 * definition. All three come from the panel group the plugin's route was mounted
 * inside, which is the entire reason `PluginContext::routes()` exists rather
 * than telling package authors to register routes themselves.
 */
final class AnnouncementController extends Controller
{
    public function index(PanelManager $panels): Response
    {
        return Inertia::render('Announcements', [
            'portal' => $panels->currentPanel()?->id ?? 'unknown',
        ]);
    }
}
