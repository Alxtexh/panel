<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * How an organisation's printed documents look.
 *
 * A TEMPLATE, NOT A SETTING. It could have been rows in `panel_settings` - it is
 * configuration, after all - and that would have been wrong for two reasons.
 * A setting has one value; a template has VERSIONS, because a document that
 * already went out was produced by a particular one and "what did this look like
 * when we printed it" is a question somebody eventually asks. And a setting is
 * scalar, whereas this is a nested structure with its own defaults per kind.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_document_templates', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('tenant_id')->index();

            /*
             * WHICH KIND OF DOCUMENT - invoice, receipt, voucher, or whatever a
             * plugin registered. A string rather than an enum column: the set is
             * open by design, and an enum would mean a migration every time
             * somebody installs a package.
             */
            $table->string('kind', 64);

            $table->string('name');

            /*
             * THE WHOLE TEMPLATE, as JSON.
             *
             * Columns were the alternative and they do not survive the first
             * plugin: a kind declares its own form, so the settings' shape is
             * decided by code this package has never seen. A column per setting
             * would mean a migration per kind, which makes "a plugin can add a
             * document" false.
             *
             * The tradeoff is honest - nothing here is queryable, and nothing
             * needs to be. A template is read whole, by id, to render one
             * document.
             */
            $table->json('settings');

            /*
             * BUMPED ON EVERY SAVE, and stamped into each rendered document.
             *
             * Vouchers are printed in batches. Editing a template halfway
             * through a print run is a real hazard - half the batch has the old
             * expiry wording and nothing on either half says which is which.
             * A version on the document answers that after the fact, which is
             * the only time anybody asks.
             *
             * IT IS A COUNTER, NOT A HISTORY. Previous versions are not kept, so
             * this identifies a version rather than letting you read one back.
             * The full history is a second table and belongs with the first
             * feature that needs to render an OLD document, not before.
             */
            $table->unsignedInteger('version')->default(1);

            $table->unsignedBigInteger('updated_by')->nullable();

            $table->timestamps();

            /*
             * ONE TEMPLATE PER KIND PER TENANT, enforced here rather than in a
             * controller. Two invoice templates means every render has to pick
             * one, and "the most recent" is a coin toss that changes under you.
             * When multiple templates per kind become a real requirement, this
             * index is the thing that has to be dropped deliberately - which is
             * the point of it being here.
             */
            $table->unique(['tenant_id', 'kind']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_document_templates');
    }
};
