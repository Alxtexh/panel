# Panel billing module

Optional provider-agnostic billing webhook integration for Panel.

```sh
composer require alxtexh-enterprise/panel-billing
```

This module supplies HMAC verification and payload mapping. Subscription state,
access gates, and tenant billing persistence remain in core so a host can use
its own billing provider without importing an external SDK.
