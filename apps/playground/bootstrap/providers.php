<?php

use App\Demo\DemoServiceProvider;
use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Providers\Panels\AdminPanelProvider;
use App\Providers\Panels\ClientPanelProvider;
use App\Providers\Panels\PlatformPanelProvider;
use App\Providers\Panels\ResellerPanelProvider;
use App\Providers\Panels\SuperadminPanelProvider;
use App\Providers\TenancyServiceProvider;

return [
    /*
     | PANEL PROVIDERS, ADMIN FIRST.
     |
     | Order decides which panel `make:panel-resource` defaults to when no
     | `--panel` is given, and the answer should be the portal somebody is most
     | likely working on.
     */
    AdminPanelProvider::class,
    PlatformPanelProvider::class,
    ResellerPanelProvider::class,
    SuperadminPanelProvider::class,
    AppServiceProvider::class,
    // Wires stancl's tenancy EVENTS to its bootstrappers. Without it tenancy
    // initialises - the tenant is bound in the container - and nothing else
    // happens: no connection switch, no cache tag, no filesystem root. The
    // failure is silent and looks exactly like working single-database tenancy.
    TenancyServiceProvider::class,
    FortifyServiceProvider::class,
    ClientPanelProvider::class,
    /*
     | THE ISP DEMONSTRATION, FENCED SO IT CAN BE REMOVED.
     |
     | Everything the demo owns lives under `app/Demo` and
     | `database/migrations/demo`. Deleting those two directories and this one
     | line leaves a working panel with Users, Plans and Tenants - which is
     | what the README means by "replaces the data".
     */
    DemoServiceProvider::class,
];
