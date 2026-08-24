<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--
            APPEARANCE BEFORE FIRST PAINT.

            `@include('panel::appearance-prepaint')` embeds window.__panelAppearance
            and applies oklch CSS variables on <html> via a blocking script, so
            app.css hsl defaults never flash before the admin-saved theme.
            Must stay above @vite / stylesheets.
        --}}
        @include('panel::appearance-prepaint')

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
        @php($panelFavicon = app(\Alxtexh\Panel\PanelManager::class)->currentPanel()?->getFavicon())

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
