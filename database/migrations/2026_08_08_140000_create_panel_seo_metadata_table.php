<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * What a record tells search engines about itself.
 *
 * ONE POLYMORPHIC TABLE, NOT COLUMNS ON EVERY MODEL. Adding six SEO columns to
 * `clients`, `plans` and `routers` means three migrations for one feature, and a
 * fourth the day somebody adds a resource - and every one of those columns is
 * null on the overwhelming majority of rows, because most records are not public
 * pages. A morph target costs one join on the screens that ask for it and
 * nothing at all everywhere else.
 *
 * `settings_key` IS THE HALF A MORPH CANNOT REACH, and leaving it out is the
 * mistake worth naming. Not every public URL is a record: a landing page, an
 * "about" page, the panel's own front door. Those have no model to hang a
 * relationship off, so a purely polymorphic table can describe every product
 * page on a site and not its home page - which is the single most important URL
 * it has. A row therefore carries EITHER a morph pair OR a key, and the
 * application decides which shape a given URL is.
 *
 * TITLE AND DESCRIPTION ARE PLAIN STRINGS, DELIBERATELY. Every plugin that
 * inspired this stores them as per-locale JSON maps, which is correct for a site
 * that publishes in several languages and is a tax on every site that does not:
 * every read becomes a locale lookup with a fallback chain, and the value in the
 * database stops being greppable. A panel that needs per-locale metadata has a
 * translation layer already; this stores what the current locale wrote, and the
 * upgrade path is a `json` cast on these two columns rather than a new table.
 *
 * `noindex` IS A BOOLEAN AND NOT A STRING OF DIRECTIVES. "noindex,nofollow" as
 * free text is a field somebody eventually types `noindex, nofollow` into, with
 * a space, and robots parsers differ on whether that is one directive or two.
 * The one decision that actually matters - should this URL be in the index -
 * gets a column that cannot be spelled wrong, and it is the same column
 * `Sitemap` reads to decide whether to emit the URL at all.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_seo_metadata', function (Blueprint $table): void {
            $table->id();

            /*
             * NULLABLE, BECAUSE A ROW MAY BE KEYED INSTEAD - see the note above.
             * `nullableMorphs` rather than `morphs`, and the two are not
             * interchangeable: `morphs` is NOT NULL, which would make every
             * settings-key row impossible to insert.
             */
            $table->nullableMorphs('seoable');

            /*
             * The other shape: a URL with no record behind it. Unique, because
             * two rows describing the same page is not a state with a correct
             * answer - the last writer would win silently.
             */
            $table->string('settings_key')->nullable()->unique();

            $table->string('title')->nullable();
            $table->text('description')->nullable();

            /*
             * A LIST, STORED AS JSON. Keywords carry almost no ranking weight
             * with Google any more and real weight with several other engines,
             * so they are offered and never required. A json array rather than a
             * comma-joined string because splitting a string is where "a, b" and
             * "a,b" become different data.
             */
            $table->json('keywords')->nullable();

            /* The social card image. A URL rather than an upload relationship:
             * the image may well already live on a CDN, and a column that can
             * hold either is more useful than one that can only hold an upload. */
            $table->string('og_image')->nullable();

            /*
             * WHERE THIS PAGE SAYS THE CANONICAL VERSION LIVES. Absent from all
             * three plugins this was drawn from, and the omission is a real one:
             * a filtered or paginated list URL that does not point at its
             * canonical is how a site competes with itself for its own ranking.
             */
            $table->string('canonical')->nullable();

            $table->boolean('noindex')->default(false);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_seo_metadata');
    }
};
