# Capability modules

The Panel package remains a convenient meta-package, but its capability
boundaries are now explicit. Run:

```sh
php artisan panel:modules
php artisan panel:modules --json
```

The report identifies core, tables, forms, infolists, widgets, auth, tenancy,
notifications, Telegram, documents, billing, AI, and operations. Optional dependencies are
reported as unavailable when their probe classes are absent; the core package
does not require those dependencies merely to boot.

Telegram delivery is provided by `alxtexh-enterprise/panel-telegram`, and the
provider-backed AI integration by `alxtexh-enterprise/panel-ai`. Both are
standalone path-compatible Composer packages and are optional to core.

Document templates and renderers are provided by
`alxtexh-enterprise/panel-documents`; its models still use the core migration
and tenancy contracts, but the implementation is not loaded by core-only
hosts.

Provider-agnostic billing webhook adapters are provided by
`alxtexh-enterprise/panel-billing`. Core retains subscription state and access
gates, allowing hosts to use custom billing providers without importing one.

Queue operations are provided by `alxtexh-enterprise/panel-operations`. It owns
queued imports, exports, bulk actions, scheduled reports, import readers, report
mail, and completion notifications. Core retains status and storage contracts and
skips operation routes when the module is absent.

This manifest is the compatibility seam for the next physical Composer split:
module packages can take ownership of a manifest entry without changing the
host-facing registration APIs.
