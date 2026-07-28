<?php

use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Providers\TenancyServiceProvider;

return [
    /*
     | PANEL PROVIDERS, ADMIN FIRST.
     |
     | Order decides which panel `make:panel-resource` defaults to when no
     | `--panel` is given, and the answer should be the portal somebody is most
     | likely working on.
     */
    App\Providers\Panels\AdminPanelProvider::class,
    App\Providers\Panels\PlatformPanelProvider::class,
    App\Providers\Panels\ResellerPanelProvider::class,
    AppServiceProvider::class,
    // Wires stancl's tenancy EVENTS to its bootstrappers. Without it tenancy
    // initialises - the tenant is bound in the container - and nothing else
    // happens: no connection switch, no cache tag, no filesystem root. The
    // failure is silent and looks exactly like working single-database tenancy.
    TenancyServiceProvider::class,
    FortifyServiceProvider::class,
];
