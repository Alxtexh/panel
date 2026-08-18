<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_billing_states', function (Blueprint $table): void {
            $table->id();
            $table->string('billable_type', 20)->default('tenant');
            $table->string('billable_key');
            $table->string('status', 20)->default('active');
            $table->timestamp('period_end_at')->nullable();
            $table->timestamp('grace_ends_at')->nullable();
            $table->string('provider_ref')->nullable();
            $table->timestamps();

            $table->unique(['billable_type', 'billable_key'], 'panel_billing_states_billable_unique');
            $table->index(['status', 'grace_ends_at'], 'panel_billing_states_status_grace_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_billing_states');
    }
};

