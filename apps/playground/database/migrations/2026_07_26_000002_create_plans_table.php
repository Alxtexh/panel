<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Plans, which are part of the STARTER rather than the demo.
 *
 * This file used to create `routers` as well. It was split when the ISP domain
 * was fenced into `app/Demo`: a plan is a generic thing any dashboard has, a
 * router is an ISP's equipment, and a migration creating both meant deleting
 * the demo required editing a file rather than removing one.
 *
 * `speed_mbps` STAYS FOR NOW and is the one field here that is not generic. It
 * is the seam a copy edits first - see the README's "replaces the data".
 */
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
    }

    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
