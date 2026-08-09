<?php

declare(strict_types=1);

namespace App\Providers\Panels;

use App\Policies\ContentEntryPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use PanelKit\Panel\Models\ContentEntry;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

/**
 * The superadmin portal: the installation looking at itself.
 *
 * TWO JOBS, BOTH CENTRAL. It edits the content every other portal reads -
 * Help, FAQ, What's new, which were config arrays until `ContentEntry`
 * existed, so fixing a typo in an answer was a deploy - and it sees every
 * tenant's tickets in one list, which is what makes the two-portal support
 * story testable: raise a ticket in a tenant portal, answer it here.
 *
 * CENTRAL CONTEXT IS THE POINT, NOT A DEFAULT. Content is written once for
 * everybody, and a support desk that could only see one tenant's tickets
 * would be a desk per tenant. The same context in a tenant-facing portal
 * would be the leak the panel split exists to prevent - which is why this
 * portal gets its own guard gate rather than riding along in `platform`.
 */
final class SuperadminPanelProvider extends ServiceProvider
{
    public function boot(PanelManager $panels): void
    {
        $panels->registerPanel(
            Panel::make('superadmin')
                ->path('superadmin')
                ->guard('web')
                ->context(Panel::CONTEXT_CENTRAL)
                ->middleware(['web'])
                ->authMiddleware(['auth:web'])
                ->brandName(fn (): string => config('app.name').' — Superadmin')
                /*
                 * No operations here either - same reasoning as the platform
                 * portal: backups and logs belong to the panel that IS the
                 * installation's admin, and a second copy of a restore button
                 * is a second thing to secure.
                 */
                ->without(['operations', 'assistant-settings']),
        );

        /*
         * The packaged model needs its policy named - auto-discovery maps
         * `App\Models\X` to `App\Policies\XPolicy` and a vendor namespace is
         * outside that convention. Without this line the panel denies every
         * ability on the resource and logs why, which is the right failure
         * and still a locked screen.
         */
        Gate::policy(ContentEntry::class, ContentEntryPolicy::class);

        config([
            'panel.discover' => [
                ...(array) config('panel.discover', []),
                app_path('Panel/Superadmin/Resources') => 'App\\Panel\\Superadmin\\Resources',
            ],
        ]);
    }
}
