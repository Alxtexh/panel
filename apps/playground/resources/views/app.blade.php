<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'light') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--
            APPEARANCE, APPLIED BEFORE THE FIRST PAINT.

            This is the same approach Filament takes: read the stored preference
            in the document head and set it on <html> before anything renders.
            Waiting for the JavaScript bundle means the page paints in the
            default theme and then changes, which is the flash everyone notices
            on a dark-mode site.

            It replays a CACHE OF COMPUTED CSS VARIABLES rather than
            recalculating them. The palette lives in one TypeScript file; copying
            the oklch tables into Blade would be a second copy that drifts the
            first time either is edited. The cache is written by the same code
            that applies them at runtime, so it cannot disagree.

            Everything is guarded: a browser with no stored preference, private
            mode, or corrupt JSON all fall through to the server-rendered
            default rather than throwing in the head and blocking the page.
        --}}
        {{--
            The ACCOUNT's saved appearance, if there is one.

            Rendered by the server so a browser that has never seen this user
            still applies their theme on the very first paint - localStorage
            alone cannot do that, because it belongs to whichever browser
            happened to set it.
        --}}
        <script>
            window.__panelAppearance = @json(auth()->user()?->appearance);
        </script>

        <script>
            (function () {
                try {
                    var server = window.__panelAppearance;
                    var raw = localStorage.getItem('panelkit.appearance.vars');

                    if (raw) {
                        var cached = JSON.parse(raw);
                        var root = document.documentElement;

                        /*
                         * The cached variables were computed from THIS browser's
                         * preference. When the account says something different
                         * - a theme set in another browser - the cache is stale,
                         * so only the parts that can be derived without the
                         * colour palette are applied here and the script hands
                         * over to the bundle for the rest.
                         *
                         * Dark mode and text size are what cause a visible jump;
                         * an accent settling a moment later is not worth
                         * duplicating the palette into Blade to avoid.
                         */
                        var stale = server && server.theme && cached.theme && server.theme !== cached.theme;

                        if (stale) {
                            root.classList.toggle('dark', server.theme === 'dark');

                            if (server.fontSize) {
                                root.style.setProperty('--pk-font-size', server.fontSize + 'px');
                            }

                            return;
                        }

                        if (cached.dark) root.classList.add('dark');
                        else root.classList.remove('dark');

                        for (var name in cached.vars) {
                            root.style.setProperty(name, cached.vars[name]);
                        }

                        return;
                    }

                    // No cache, but the account has a preference: apply what can
                    // be applied without the palette.
                    if (server && server.theme) {
                        document.documentElement.classList.toggle('dark', server.theme === 'dark');

                        if (server.fontSize) {
                            document.documentElement.style.setProperty('--pk-font-size', server.fontSize + 'px');
                        }

                        return;
                    }
                } catch (e) {
                    // Fall through to the server default below.
                }

                /*
                 * THE LAST RESORT IS LIGHT, and it consults nothing.
                 *
                 * This used to read `prefers-color-scheme` when the stored
                 * theme was `system` - which was the default - so a first visit
                 * on a dark-mode laptop rendered a dark panel nobody had asked
                 * for, and the pre-paint script was where that decision was
                 * actually made. Dark now happens only when somebody chose it.
                 */
                var appearance = '{{ $appearance ?? "light" }}';

                document.documentElement.classList.toggle('dark', appearance === 'dark');
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        {{--
            THE PORTAL'S OWN TAB ICON, if it declared one - see
            `Panel::favicon()`.

            THIS WAS THE LAST PLACE BRANDING LEAKED BETWEEN PORTALS. The
            sign-in screen, the colours and the brand name are all per-panel;
            every browser tab still looked identical. That matters most for the
            portal you are least likely to have open on purpose - a superadmin
            tab indistinguishable from a tenant tab is the one you type into by
            mistake.

            IN BLADE RATHER THAN AS AN INERTIA PROP because it belongs in
            `<head>` on the FIRST paint. Setting it from JavaScript after mount
            means the wrong icon is what somebody sees while the page loads,
            which is the moment they are looking at the tab strip.
        --}}
        @php($panelFavicon = app(\PanelKit\Panel\PanelManager::class)->currentPanel()?->getFavicon())

        @if ($panelFavicon)
            <link rel="icon" href="{{ $panelFavicon }}">
        @else
            <link rel="icon" href="/favicon.ico" sizes="any">
            <link rel="icon" href="/favicon.svg" type="image/svg+xml">
            <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        @endif

        @fonts

        @vite(['resources/css/app.css', 'resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
