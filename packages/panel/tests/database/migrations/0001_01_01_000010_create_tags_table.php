<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tags', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->timestamps();

            $table->index(['tenant_id', 'name']);
        });

        Schema::create('article_tag', function (Blueprint $table): void {
            $table->foreignId('article_id')->constrained()->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained()->cascadeOnDelete();
            // Pivot column, for RelationManager pivot read/write coverage.
            $table->string('note')->nullable();
            $table->primary(['article_id', 'tag_id']);
        });
    }
};
