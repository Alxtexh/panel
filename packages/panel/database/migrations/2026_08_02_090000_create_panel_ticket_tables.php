<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use PanelKit\Panel\Support\TicketTables;

/**
 * Tickets: a conversation with two ends, and the schema both ends read.
 *
 * ONE MIGRATION FOR WHAT WAS FOUR. The reference app grew this table over four
 * separate migrations as the feature was built - replies, read marks,
 * departments. A consumer installing today has no interest in that sequence;
 * they want the table the code expects. The app that already ran the four keeps
 * its own and points the config at them, so nothing moves.
 *
 * THE TABLE NAMES ARE CONFIGURABLE, AND THE DEFAULTS ARE PREFIXED. `tickets` is
 * a name an application might already be using for something of its own, and a
 * package that claims it in somebody else's database has taken a decision that
 * was not its to take. Every other table this package ships is `panel_*` for the
 * same reason; these follow.
 *
 * IT SKIPS WHAT ALREADY EXISTS rather than failing. An installation that
 * predates the packaged version points at its own tables, and a migration that
 * threw on finding them would make upgrading mean editing a vendored file.
 */
return new class extends Migration
{
    public function up(): void
    {
        $tickets = TicketTables::tickets();
        $replies = TicketTables::replies();

        if (! Schema::hasTable($tickets)) {
            Schema::create($tickets, function (Blueprint $table): void {
                $table->id();

                /*
                 * THE TWO COLUMNS THAT MATTER ARE `tenant_id` AND `opened_by`,
                 * because they are the two halves of the policy. The tenant
                 * column is the boundary every record in a panel has;
                 * `opened_by` is what makes a ticket different from every other
                 * record - the opener may read THEIR OWN even where they may
                 * not read the organisation's, and the operator reads the
                 * organisation's without having opened any of them.
                 */
                $table->unsignedBigInteger('tenant_id')->nullable()->index();

                /*
                 * NOT NULLABLE. A ticket with no opener is one the "read your
                 * own" half of the policy cannot evaluate - it would fall
                 * through to the operator rule and be visible to more people
                 * than intended, silently.
                 *
                 * NO FOREIGN KEY TO `users`, because the package does not own
                 * that table's name: `auth.providers.users.model` decides it,
                 * and a constraint naming `users` breaks any installation that
                 * calls it something else.
                 */
                $table->unsignedBigInteger('opened_by')->index();

                /*
                 * NULLABLE, because an unassigned ticket is the normal state of
                 * a new one, and a queue with no concept of unassigned is a
                 * queue that lies about its backlog.
                 */
                $table->unsignedBigInteger('assigned_to')->nullable()->index();

                $table->string('subject', 160);
                $table->string('status', 20)->default('open');
                $table->string('priority', 20)->default('normal');
                $table->string('department', 40)->nullable();

                $table->timestamp('resolved_at')->nullable();

                // First response and last activity, for the SLA the desk reads.
                $table->timestamp('first_response_at')->nullable();
                $table->timestamp('last_reply_at')->nullable();

                // Unread is per SIDE: the desk having read it says nothing
                // about whether the person who opened it has.
                $table->timestamp('desk_read_at')->nullable();
                $table->timestamp('opener_read_at')->nullable();

                $table->timestamps();

                /*
                 * THE TWO SHAPES THE QUEUES ACTUALLY READ - the operator's
                 * "this organisation's open tickets, newest first", and the
                 * opener's "mine". Covered here rather than discovered as a
                 * table scan on the day somebody has a thousand.
                 */
                $table->index(['tenant_id', 'status', 'created_at']);
                $table->index(['tenant_id', 'opened_by', 'created_at']);
                $table->index(['tenant_id', 'department', 'status']);
            });
        }

        if (! Schema::hasTable($replies)) {
            Schema::create($replies, function (Blueprint $table) use ($tickets): void {
                $table->id();

                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->foreignId('ticket_id')->constrained($tickets)->cascadeOnDelete();
                $table->unsignedBigInteger('author_id')->index();

                /*
                 * INTERNAL BY DEFAULT, and that default is the safety.
                 * A note written into the wrong box is a note the customer
                 * reads; defaulting to internal means the mistake is a colleague
                 * missing context, not the customer seeing the desk's opinion of
                 * them.
                 */
                $table->string('visibility', 10)->default('internal');

                $table->text('body');
                $table->json('attachments')->nullable();
                $table->timestamps();

                $table->index(['ticket_id', 'created_at']);
            });
        }
    }

    public function down(): void
    {
        /*
         * NOTHING IS DROPPED. These may be the application's own pre-existing
         * tables that this migration deliberately skipped, and a `down()` that
         * could not tell the difference would delete real support history on a
         * rollback somebody expected to be reversible.
         */
    }
};
