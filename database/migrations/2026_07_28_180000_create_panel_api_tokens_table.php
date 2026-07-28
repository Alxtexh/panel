<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tokens for the public API.
 *
 * NOT SANCTUM, AND THE OMISSION IS DELIBERATE. Sanctum is a fine package and
 * most of it is for something else: SPA cookie authentication, which this panel
 * already does through the session. What is needed here is a hashed bearer token
 * with a tenant, an owner and a list of abilities - about a hundred lines,
 * against a dependency to keep updated, audit and explain. The panel has made
 * the same call before, for the Telegram channel.
 *
 * THE TOKEN IS STORED AS A HASH, NEVER AS ITSELF. A tokens table in plain text
 * is a table whose disclosure is indistinguishable from disclosure of every
 * account it belongs to - and it is exactly the table that ends up in a backup,
 * a log, a support export. The plaintext exists for the length of one response
 * and then only on the caller's machine.
 *
 * `tenant_id` IS REQUIRED AND IS THE WHOLE ISOLATION STORY. An API request has
 * no session and no host to resolve a tenant from, so the token IS the tenant
 * context. A nullable column here would mean a token that resolves to no
 * organisation, and "no organisation" must never be readable as "all of them".
 *
 * ABILITIES ARE THE PANEL'S OWN NAMES. `view_any_clients`, not a second
 * vocabulary invented for the API - a token that grants something no screen
 * grants is a permission model nobody can reason about.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_api_tokens', function (Blueprint $table): void {
            $table->id();

            // Required. See the class note: the token is the tenant context.
            $table->unsignedBigInteger('tenant_id')->index();

            /*
             * THE OWNER, so a token can be traced to a person and dies with
             * them. An API key belonging to nobody is one nobody revokes when
             * they leave.
             */
            $table->unsignedBigInteger('user_id')->index();

            $table->string('name');

            /*
             * A SHA-256 OF THE TOKEN, unique so a lookup is one indexed read.
             * Not bcrypt: this is verified on every API request and a
             * deliberately slow hash would be a self-inflicted rate limit. It is
             * safe here because the token is 40 random bytes rather than a
             * password - there is no dictionary to attack.
             */
            $table->string('token_hash', 64)->unique();

            /*
             * The first characters, shown in the panel so somebody can tell two
             * tokens apart without being shown either.
             */
            $table->string('prefix', 12);

            $table->json('abilities');

            $table->timestamp('last_used_at')->nullable();

            /*
             * NULLABLE MEANS FOREVER, and that is the honest default rather than
             * a silent 30 days: a token that expires without warning breaks an
             * integration at a moment nobody chose.
             */
            $table->timestamp('expires_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_api_tokens');
    }
};
