<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->unsignedInteger('speed_mbps');
            $table->unsignedInteger('price_cents');
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['tenant_id', 'is_active', 'name']);
        });

        Schema::create('routers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('ip_address');
            $table->string('model')->nullable();
            $table->string('status')->default('online'); // online|offline|degraded
            $table->timestamp('last_seen_at')->nullable();
            $table->timestamps();

            $table->index(['tenant_id', 'status', 'name']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('routers');
        Schema::dropIfExists('plans');
    }
};
