<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Trash\TrashBin;

/**
 * One screen for everything that was deleted.
 *
 * WHY IT IS A SCREEN OF ITS OWN rather than a filter on each list: a delete has
 * to go somewhere a person can find it later WITHOUT remembering which resource
 * it was. "I deleted something yesterday and I need it back" is the actual
 * question, and answering it by asking somebody to guess the right table and
 * then open the right filter is not answering it.
 *
 * IT IS PER PORTAL, like every other panel screen. A reseller's trash contains
 * the reseller portal's resources, not the admin portal's - the bin cannot
 * become the one place where a panel's boundary stops applying.
 *
 * RESTORE AND DELETE-FOREVER ARE NOT HERE. They already exist on the record
 * routes, policy-checked per record, and duplicating them would mean two
 * endpoints that can disagree about who may resurrect something. This screen
 * lists; the existing endpoints act.
 */
final class TrashController extends Controller
{
    public function index(TrashBin $bin, PanelManager $panels): Response
    {
        $panel = $panels->currentPanel();

        return Inertia::render('Trash', [
            'groups' => $bin->groups($panel?->id),

            /*
             * THE PORTAL PREFIX TRAVELS WITH THE PAGE. Restore posts to
             * `{prefix}/{resource}/{id}/restore`, and a client that assembled
             * that itself would be right in the portal mounted at the root and
             * wrong in every other - the same bug the export download had.
             */
            'prefix' => '/'.trim((string) ($panel?->getPath() ?? ''), '/'),

            /*
             * THE DEADLINE IS STATED, not implied. A bin whose contents vanish
             * on a schedule nobody published is a bin people learn not to rely
             * on - and the number here is the one the pruner actually uses.
             */
            'retentionDays' => TrashBin::retentionDays(),
        ]);
    }
}
