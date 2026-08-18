<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Billing;

use Closure;
use Illuminate\Http\Request;

/**
 * HMAC of the raw request body, compared to a named header.
 *
 * PROVIDER-AGNOSTIC. Any gateway that signs the payload and sends that digest
 * in a header can use this. The header name and the secret come from the host.
 * This is not a marketplace plugin and is not locked to one processor.
 *
 * FAIL CLOSED when the secret or the header is empty: an unsigned request is
 * refused rather than treated as verified.
 */
final class SignedHeaderWebhookVerifier
{
    /**
     * @return Closure(string, Request): bool
     */
    public static function using(
        string $secret,
        string $header = 'X-Webhook-Signature',
        string $algorithm = 'sha256',
    ): Closure {
        return static function (string $rawBody, Request $request) use ($secret, $header, $algorithm): bool {
            if ($secret === '' || $header === '') {
                return false;
            }

            $provided = trim((string) $request->header($header));

            if ($provided === '') {
                return false;
            }

            $provided = (string) preg_replace('/^[A-Za-z0-9_-]+=/', '', $provided);
            $expected = hash_hmac($algorithm, $rawBody, $secret);

            return hash_equals($expected, $provided);
        };
    }
}
