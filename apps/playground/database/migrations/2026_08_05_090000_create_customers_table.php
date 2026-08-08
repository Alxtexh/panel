<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * A SECOND AUTHENTICATABLE, ON PURPOSE.
 *
 * WHY THIS TABLE EXISTS AND WHAT IT IS FOR. `Panel::guard()` has been wired
 * since multi-panel shipped - the login attempt, the logout, social login,
 * shared props and the blueprint all read `$panel->getGuard()` - and every
 * panel in this application, and every test in the suite, ran on `web`. The
 * option was supported by design and unproven by use, which is the exact shape
 * of every defect this codebase has found: A SEAM WITH NOTHING BEHIND IT.
 *
 * A customer portal is the ordinary reason somebody needs a second guard. The
 * people who buy the service are not the people who operate it: they belong in
 * a different table, hold no operator permissions, and must not be able to
 * reach an operator screen by knowing its URL. Modelling them as `users` with
 * a flag is the alternative, and it is the one that leaks - one missing scope
 * and a customer is an operator.
 *
 * DELIBERATELY MINIMAL. This is a fixture for proving guard isolation, not a
 * customer-management feature. It carries what an authenticatable needs and a
 * tenant, and nothing else.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table): void {
            $table->id();

            /*
             * A CUSTOMER BELONGS TO A TENANT, like everything else here. The
             * client panel runs in the tenant context, so the middleware
             * resolves tenancy from the signed-in customer exactly as it does
             * from an operator - which is the other half of what this fixture
             * is proving.
             */
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            $table->string('name');
            $table->string('email');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();

            /*
             * UNIQUE PER TENANT, NOT GLOBALLY. Two providers may both have a
             * customer at the same address, and a global unique index would
             * mean whichever signed up first owned that email everywhere.
             */
            $table->unique(['tenant_id', 'email']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
