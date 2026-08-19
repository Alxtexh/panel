<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_notification_preferences', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->string('category');

            $table->boolean('toast_enabled')->default(true);
            $table->boolean('digest_enabled')->default(false);

            $table->timestamps();

            $table->unique(['user_id', 'category']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_notification_preferences');
    }
};

