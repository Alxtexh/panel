<?php

use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Providers\Panels\AdminPanelProvider;
use App\Providers\Panels\PlatformPanelProvider;
use App\Providers\Panels\ResellerPanelProvider;
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
    AppServiceProvider::class,
    // Wires stancl's tenancy EVENTS to its bootstrappers. Without it tenancy
    // initialises - the tenant is bound in the container - and nothing else
    // happens: no connection switch, no cache tag, no filesystem root. The
    // failure is silent and looks exactly like working single-database tenancy.
    TenancyServiceProvider::class,
    FortifyServiceProvider::class,
];
