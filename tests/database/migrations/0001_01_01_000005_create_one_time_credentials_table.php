<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * THE HOST OWNS THIS TABLE, not the package.
     *
     * `OneTimeCredential` is constructed with a table name, because an
     * application may want OTP codes and magic-link tokens in separate stores -
     * the reference app does exactly that. So the package ships the mechanism
     * and the consumer ships the table; this is the fixture's copy of it.
     */
    public function up(): void
    {
        Schema::create('one_time_credentials', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->nullable();
            $table->string('email');
            $table->string('token');
            $table->timestamp('created_at')->nullable();

            $table->unique(['tenant_id', 'email']);
        });
    }
};
