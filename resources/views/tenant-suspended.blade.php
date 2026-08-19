{{--
    The wall a suspended organisation sees.

    PLAIN BLADE, NOT AN INERTIA PAGE, and that follows from where the check runs.
    `DenySuspendedTenant` denies BEFORE the session loads, so there is no
    authenticated user, no shared props and no tenant branding to render with -
    an Inertia page here would either need the session it is designed to run in
    front of, or would render a shell with everything missing.

    IT SAYS WHY, AND WHO TO ASK. A wall reading only "suspended" produces a
    support call to find out what happened; one carrying the reason and an
    address produces the action that fixes it.

    NO NAVIGATION AND NO SIGN-IN LINK. Every route on this host answers this
    page, so offering a way "back" would be offering a loop.
--}}
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- The one page in the panel that must never be indexed or cached. --}}
    <meta name="robots" content="noindex, nofollow">
    <title>{{ __('panel::billing.wall.page_title') }}</title>
    <style>
        :root { color-scheme: light dark; }
        body {
            margin: 0; min-height: 100vh; display: grid; place-items: center;
            font: 15px/1.6 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
            background: #f8fafc; color: #0f172a; padding: 24px;
        }
        .card {
            max-width: 30rem; width: 100%; background: #fff; border: 1px solid #e2e8f0;
            border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgb(0 0 0 / .06);
        }
        h1 { font-size: 1.15rem; margin: 0 0 8px; }
        p { margin: 0 0 12px; color: #475569; }
        .reason {
            background: #fef2f2; border-left: 3px solid #ef4444; color: #7f1d1d;
            padding: 10px 12px; border-radius: 6px; margin: 16px 0;
        }
        a { color: #2563eb; }
        @media (prefers-color-scheme: dark) {
            body { background: #0b1120; color: #e2e8f0; }
            .card { background: #111827; border-color: #1f2937; }
            p { color: #94a3b8; }
            .reason { background: #2a1215; color: #fecaca; }
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>{{ __('panel::billing.wall.heading', ['name' => $name]) }}</h1>

        <p>{{ __('panel::billing.wall.body') }}</p>

        @if ($reason)
            <p class="reason">{{ $reason }}</p>
        @endif

        @if ($support)
            <p>{!! __('panel::billing.wall.contact_named', ['email' => '<a href="mailto:'.e($support).'">'.e($support).'</a>']) !!}</p>
        @else
            <p>{{ __('panel::billing.wall.contact_admin') }}</p>
        @endif
    </div>
</body>
</html>
