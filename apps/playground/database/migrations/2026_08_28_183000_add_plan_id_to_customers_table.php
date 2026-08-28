<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Which internet plan a customer is on - separate from whether their
 * TENANT's own PanelKit subscription is current. `panel_billing_states`
 * (see `Alxtexh\Panel\Billing\BillingState`) already answers the second
 * question; this column answers the first, for the client portal's own
 * subscription page (`App\Panel\Client\Pages\PlanCatalogPage`).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table): void {
            $table->foreignId('plan_id')->nullable()->after('tenant_id')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('plan_id');
        });
    }
};
