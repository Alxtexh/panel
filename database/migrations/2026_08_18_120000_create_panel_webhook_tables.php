<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_webhook_endpoints', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->string('url');
            $table->text('secret');
            $table->json('events');
            $table->boolean('enabled')->default(true);
            $table->timestamps();
        });

        Schema::create('panel_webhook_deliveries', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->foreignId('endpoint_id')->constrained('panel_webhook_endpoints')->cascadeOnDelete();
            $table->string('event');
            $table->json('payload');
            $table->unsignedSmallInteger('status_code')->nullable();
            $table->text('response_body')->nullable();
            $table->string('error')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_webhook_deliveries');
        Schema::dropIfExists('panel_webhook_endpoints');
    }
};
