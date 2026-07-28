<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Feature requests and bug reports, raised from inside the panel.
 *
 * TENANT-SCOPED, like everything else a user creates. A bug report quotes the
 * page it was filed from and often the record on it, so it is tenant data with
 * the same sensitivity as the screen behind it - not a global suggestion box.
 * The column and the index are here from the first migration rather than added
 * once somebody notices, because retrofitting a tenant column onto a table that
 * has been collecting rows means deciding who owns the existing ones.
 *
 * THE CONTEXT COLUMNS ARE THE POINT OF FILING IN-APP. "It broke" from a support
 * inbox costs a round trip to establish which page, which browser and which
 * organisation. Captured automatically, that round trip never happens - so the
 * URL, the user agent and the viewport are recorded at submit time rather than
 * asked for.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('feedback', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            // Nullable so a report survives the reporter leaving. The report is
            // still true; deleting it with the account loses a real bug.
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();

            $table->string('kind');       // feature | bug
            $table->string('severity')->nullable();  // bugs only
            $table->string('subject');
            $table->text('body');

            // Captured, never typed.
            $table->string('page_url')->nullable();
            $table->text('user_agent')->nullable();
            $table->string('viewport')->nullable();

            $table->string('status')->default('open');

            $table->timestamps();

            // The list screen is "this tenant's open reports, newest first",
            // so the index leads with the tenant and carries the sort.
            $table->index(['tenant_id', 'status', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
