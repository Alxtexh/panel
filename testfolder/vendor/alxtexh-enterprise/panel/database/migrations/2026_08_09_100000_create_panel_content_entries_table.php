<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Help, FAQ and What's-new stop being code.
 *
 * ALL FOUR OF THOSE SCREENS READ CONFIG ARRAYS AND HARDCODED DEFAULTS, so
 * fixing a typo in an answer was a deploy - the one kind of edit a panel
 * exists to make cheap. One table holds every kind of entry rather than a
 * table per screen, because they are the same shape wearing three labels:
 * a category, a title, a body, an order.
 *
 * `kind` says which screen an entry feeds:
 *   faq      category = the question group's title, title = Q, body = A
 *   article  category = the help-centre tab key,   title + body + meta.keywords
 *   release  title = the version, category = the date (free text - a release
 *            note is written for people), body = the highlight,
 *            meta.added / meta.changed / meta.fixed = the lists
 *
 * `tenant_id` IS NULLABLE AND NULL MEANS EVERYBODY. Per-tenant help is the
 * obvious next step and the column exists so adding it is a scope, not a
 * migration - but nothing filters on it yet, which is stated rather than
 * implied.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_content_entries', function (Blueprint $table): void {
            $table->id();
            $table->string('kind', 20)->index();
            $table->unsignedBigInteger('tenant_id')->nullable()->index();
            $table->string('category', 120)->nullable();
            $table->string('title', 200);
            $table->text('body')->nullable();
            $table->json('meta')->nullable();
            $table->integer('sort')->default(0);
            $table->boolean('published')->default(true);
            $table->timestamps();

            $table->index(['kind', 'published', 'sort']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_content_entries');
    }
};
