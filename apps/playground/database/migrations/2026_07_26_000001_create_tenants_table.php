<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('logo_url')->nullable();

            // Per-tenant branding, applied at runtime as CSS custom properties
            // from shared props. Spec §8: never compile a per-tenant CSS bundle.
            $table->json('theme_colors')->nullable();

            // Per-tenant feature flags. Spec §9 item 5: a disabled feature hides
            // the resource from navigation AND returns 404 from its routes.
            $table->json('features')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
