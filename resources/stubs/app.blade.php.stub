{{--
    The root view every Inertia response renders into.

    PUBLISHED BY `panel:install` AND YOURS TO EDIT. It is here because a fresh
    application has none, and without one the first panel route answers with
    "View [app] not found" - an error about a file nobody told you to write.

    `@vite` COMPILES THE ASSETS. This is the one thing Alxtexhpanel needs that a
    server-rendered admin panel does not: the screens are Vue, so they are built
    rather than published. `npm run build` once, or `npm run dev` while you work.

    NO `@routes` DIRECTIVE. Ziggy and Wayfinder are both fine and neither is
    required: the packaged screens are given the URLs they need as props, so a
    route helper missing on the client is not a screen that breaks. Add one if
    your own pages want it.
--}}
<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    class="{{ request()->cookie('appearance') === 'dark' ? 'dark' : '' }}"
>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--
            THE THEME IS DECIDED BEFORE THE FIRST PAINT, from the cookie the
            appearance drawer sets. Applied by Vue after mount instead, somebody
            on dark gets a white flash on every full page load - the kind of
            detail nobody files a bug about and everybody notices.
        --}}
        <title inertia>{{ config('app.name', 'Panel') }}</title>

        @vite(['resources/js/app.ts'])
        @inertiaHead
    </head>

    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
