<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])>
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
        <script>
            (function () {
                try {
                    var raw = localStorage.getItem('panelkit.appearance.vars');

                    if (raw) {
                        var cached = JSON.parse(raw);
                        var root = document.documentElement;

                        if (cached.dark) root.classList.add('dark');
                        else root.classList.remove('dark');

                        for (var name in cached.vars) {
                            root.style.setProperty(name, cached.vars[name]);
                        }

                        return;
                    }
                } catch (e) {
                    // Fall through to the server default below.
                }

                var appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                }
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

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

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
