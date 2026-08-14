# 9. Authentication

The panel does not require a particular auth stack. Breeze, Jetstream, Fortify
or your own are all ordinary consumers, and every feature below answers honestly
when its dependency is absent — a security screen renders without the passkey
section rather than failing to render.

## Sign-in

```bash
php artisan panel:install --auth              # the default panel
php artisan make:panel reseller --auth        # a generated portal
```

Routes go under the panel's prefix (`/reseller/login`), never at `/login`, so a
generated portal and a starter kit coexist rather than fighting for the URI.

Sign-in is throttled by **address and IP together**: keying on the address alone
lets anybody lock a colleague out, and on the IP alone lets one office share a
budget with an attacker behind the same NAT. The message is identical for a
wrong password and an unknown address, or the form becomes an account-existence
oracle.

## Auth layout

Two sign-in layouts are available. Set one on the panel:

```php
Panel::make('admin')
    ->authLayout('split')   // or 'centered' (default)
```

| Layout | Description |
|---|---|
| `centered` | Form centred on a plain background. The default. |
| `split` | Neutral left panel with a brand name and image slot; form on the right. |

The layout applies to every auth screen on that panel — sign-in, register,
forgot password, reset password, OTP, lock screen — so one call covers all of
them.

The `split` layout provides a named `#image` slot in its left panel for placing
a logo, illustration, or photo. Without it a placeholder is shown.

## Shared sign-in

Two panels can share one login URL where the credential decides the destination:

```php
// app/Providers/Panels/AdminPanelProvider.php
Panel::make('admin')
    ->guard('web')
    ->sharedLogin('login');   // participates in /login

// app/Providers/Panels/ClientPanelProvider.php
Panel::make('client')
    ->guard('customers')
    ->sharedLogin('login');   // same path — one route is registered
```

`POST /login` tries each panel's guard in registration order. The first that
accepts the credentials owns the session and provides the redirect target.
If every guard rejects, a generic `auth.failed` error is returned — the same
message regardless of which guard failed, so it cannot name which table a user
is or is not in.

**Registration order is priority order.** If an account exists in both guards,
the panel registered first wins. That is an explicit choice by whoever declared
the registration order, not a silent default.

**`url.intended` is cross-panel safe.** After a successful sign-in the intended
URL is only honoured when it belongs to the matched panel's path prefix. A session
carrying `/admin/dashboard` as the intended destination will not redirect a client
to the admin panel after they sign in.

**No password reset at the shared endpoint.** Reset is broker-specific; each
guard has its own token table and mail template. Each panel's own
`/prefix/forgot-password` handles resets. The shared sign-in page omits the link.

**Rate limiting covers all guards in one budget**, keyed on address and IP.
Exhausting the budget against one guard does not grant a free pass to the others.

If the path is already claimed — by Fortify, Breeze, or your own `web.php` — the
shared route stands down and the declaration is silently held until the conflict
is resolved. The path is never replaced.

## What ships

| Feature | Needs | Notes |
|---|---|---|
| Password sign-in | — | Throttled, generic errors |
| Password reset | A `passwords.{guard}` broker | Cycles the remember token |
| **Passkeys** | `laravel/passkeys` or Fortify | Sign-in and enrolment |
| **Two-factor** | Fortify | TOTP with recovery codes |
| **Social sign-in** | `laravel/socialite` | Per provider credentials |
| **Devices** | `database` session driver | List and revoke sessions |
| **Impersonation** | `impersonate_users` | Audited, cannot reach upward |
| **Turnstile** | A site key | Bot check on sign-in |
| **Password policy** | — | Reuse history, maximum age |
| **Session lifetime** | — | Absolute ceiling, not just idle |
| **One-time credentials** | — | Magic links, OTP |

## Social sign-in

```env
GITHUB_CLIENT_ID=…
GITHUB_CLIENT_SECRET=…
```

**Credentials are the switch.** A provider with none is not offered and its
routes are not registered — the button and the endpoint appear together.

Two conditions must both hold before an address matches an account: the provider
must have verified it, *and* the panel account must have verified its own.
Either alone would let an attacker register with an administrator's address and
become them, with nothing in the log looking unusual.

**No account is ever created** by a social callback. Operators are invited,
carrying a tenant and a role, and neither is knowable from a provider.

Accounts are recorded per guard, so a link made on a customer portal cannot
answer a sign-in on the operator panel — two guards mean two id spaces, and
`user_id` alone names no table.

## Two-factor and passkeys

Both appear on one Security screen, alongside password, devices and connected
accounts — they are one question, "who can get into this account", and somebody
who reaches for any of them is already worried. Splitting them across tabs means
half of it gets audited.

Passkeys work with `laravel/passkeys` alone; Fortify's feature flag is also
honoured, and an explicit "off" wins over an available implementation.

## Sensitive actions

Changing a password requires the current one — every other control on the
Security screen is reachable by whoever is sitting at an unlocked laptop.
Viewing the screen requires password confirmation, because it lists devices,
connected accounts and whether a second factor exists: a map of how to reach
the account.

Wrong answers are budgeted separately from the request rate. Signing in is
throttled; asking the same question from inside an authenticated session would
otherwise be an unmetered guessing machine.

Changing or resetting a password **cycles the remember token** and signs other
devices out. Without that, an attacker holding a stolen recaller cookie loses
their session row and is transparently signed back in on the next request.

## Impersonation

A dedicated ability, separate from managing users — support needs the first and
often should not have the second. It cannot nest, cannot target yourself, cannot
cross tenants, and cannot reach a target holding anything the actor lacks. Both
transitions regenerate the session and are audited.
