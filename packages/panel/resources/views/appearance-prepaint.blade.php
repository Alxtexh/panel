{{--
    Blocking appearance bootstrap for the document head.

    Include this BEFORE any stylesheet or Vite/kit script tag:

        @include('panel::appearance-prepaint')

    Order matters: `__panelAppearance` JSON, then PHP-computed CSS vars as
    JSON, then a synchronous script that writes them onto <html> via
    style.setProperty (inline styles beat later :root rules in app.css).
    Without this, the stylesheet's hsl defaults paint first and the Vue
    bundle swaps to the account theme afterwards (FOUC).
--}}
@php
    $panelAppearance = auth()->user()?->appearance;
    $panelAppearancePayload = is_array($panelAppearance)
        ? \Alxtexh\Panel\Support\AppearancePrepaint::payload($panelAppearance)
        : null;
    $panelAppearanceDefaults = \Alxtexh\Panel\Support\AppearancePrepaint::defaults();
@endphp
<script>
    window.__panelAppearance = @json($panelAppearance);
    window.__panelAppearanceServerVars = @json($panelAppearancePayload);
    window.__panelAppearanceDefaultVars = @json($panelAppearanceDefaults);
</script>
<script>
    (function () {
        var root = document.documentElement;

        function apply(payload) {
            if (!payload || !payload.vars) {
                return;
            }

            root.classList.toggle('dark', !!payload.dark);

            for (var name in payload.vars) {
                if (Object.prototype.hasOwnProperty.call(payload.vars, name)) {
                    root.style.setProperty(name, payload.vars[name]);
                }
            }

            if (payload.sidebar) {
                root.dataset.sidebar = payload.sidebar;
            }

            if (payload.contentLayout) {
                root.dataset.contentLayout = payload.contentLayout;
            }

            window.__panelAppearanceApplied = true;
        }

        try {
            /*
             * Signed-in: the account value from PHP wins. Never replay a
             * localStorage cache here; a theme changed in another browser
             * would flash the stale accent until the bundle corrected it.
             */
            if (window.__panelAppearanceServerVars) {
                apply(window.__panelAppearanceServerVars);

                return;
            }

            var raw = localStorage.getItem('alxtexhpanel.appearance.vars');

            if (raw) {
                var cached = JSON.parse(raw);

                apply({
                    dark: !!cached.dark,
                    theme: cached.theme || 'light',
                    vars: cached.vars || {},
                    sidebar: cached.sidebar || null,
                    contentLayout: cached.contentLayout || null,
                });

                return;
            }
        } catch (e) {
            // Fall through to panel defaults.
        }

        /*
         * Guests with an empty cache, and any parse failure: apply the same
         * oklch defaults the client uses so app.css hsl tokens never paint.
         */
        apply(window.__panelAppearanceDefaultVars);
    })();
</script>
<style>
    html {
        background-color: oklch(1 0 0);
    }

    html.dark {
        background-color: oklch(0.145 0 0);
    }
</style>
