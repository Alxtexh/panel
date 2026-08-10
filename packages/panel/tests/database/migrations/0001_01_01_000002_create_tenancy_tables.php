<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->timestamps();
        });

        Schema::create('articles', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('status')->default('draft');
            $table->string('attachment')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['tenant_id', 'title']);
        });

        // The column `TenantContext::fromAuth()` reads. Absent, it resolves
        // null - which the panel treats as DENY rather than "every tenant".
        Schema::table('users', function (Blueprint $table): void {
            $table->foreignId('tenant_id')->nullable()->after('id')->constrained()->nullOnDelete();
        });
    }
};
