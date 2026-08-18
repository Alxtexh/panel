# Playground demo (not the kit)

This directory is an **ISP demo application** (Nairobi Fibre) used to exercise
the panel kit. It is **not** what `panel:install` writes into a fresh Laravel
app.

A real first visit is chrome plus an empty canvas: dashboard, user menu, and a
Get started card. Create and edit are dedicated pages. Reviewers should judge
the kit from that install, not from this demo.

The kit itself: `composer require alxtexh-enterprise/panel` then
`php artisan panel:install`. Docs: [../../docs/01-install.md](../../docs/01-install.md).

## Serve (ops, not a product feature)

Do **not** start `php artisan serve` from a Cursor agent terminal. Those
sessions abort the process when the agent turn ends, and the demo "dies".

Use a real terminal, or detach:

```bash
composer run serve
# or both PHP and Vite:
composer run dev
```

That binds `http://127.0.0.1:8899`. If you must leave it running across agent
turns:

```bash
nohup php artisan serve --host=127.0.0.1 --port=8899 > storage/logs/serve.log 2>&1 &
```

Do not systemd. Do not kill port 8899 if another process already owns it.

Then, in this directory, if assets are not built:

```bash
npm install && npm run build
```
