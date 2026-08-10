<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Host-owned, like `audit_entries` - the package writes it, the app creates it. */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('metric_rollups', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id');
            $table->string('metric');
            $table->string('period');
            $table->string('bucket');
            $table->bigInteger('value')->default(0);
            $table->timestamp('computed_at')->nullable();

            $table->unique(['tenant_id', 'metric', 'period', 'bucket']);
        });
    }
};
