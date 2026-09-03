# Panel Telegram module

Optional Telegram delivery for Panel alerts and notifications.

Install it when Telegram is needed:

```sh
composer require alxtexh-enterprise/panel-telegram
```

The core Panel package remains bootable without this module. When installed,
the module supplies the configured Telegram alert facade, notification text,
and fallback channel used by backup and operational alerts.
