<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Alxtexh\Panel\Reports\ScheduledReport;

/**
 * The email a scheduled report arrives as.
 *
 * THE ROW COUNT IS IN THE SUBJECT, and it is the most useful thing there. The
 * recipient is usually deciding whether to open the attachment at all, and
 * "Overdue accounts - 43 rows" answers that without one. "Zero rows" answers it
 * even better.
 *
 * IT IS ATTACHED, NOT LINKED. A link needs a signed public URL, and the
 * recipient is deliberately somebody without a panel account - an external
 * accountant, a finance mailbox. A URL that works for them works for anybody who
 * receives a forward.
 *
 * THE BODY SAYS WHAT PRODUCED IT AND WHO TO ASK. A CSV arriving from an
 * unattended system with no context is one nobody trusts and everybody
 * forwards to ask about; naming the report, its schedule and its owner is what
 * makes it actionable.
 */
final class ScheduledReportMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        public readonly ScheduledReport $report,
        private readonly string $csv,
        public readonly int $rows,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->report->name.' - '.number_format($this->rows).' row'.($this->rows === 1 ? '' : 's'),
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'panel::mail.scheduled-report',
            with: [
                'name' => $this->report->name,
                'schedule' => $this->report->describe(),
                'rows' => $this->rows,
                'resource' => $this->report->resource,
            ],
        );
    }

    /** @return list<Attachment> */
    public function attachments(): array
    {
        /*
         * THE FILENAME CARRIES THE DATE. A mailbox holding twelve months of
         * `report.csv` is a mailbox where nobody can find last March, and
         * every download after the first is `report (7).csv`.
         */
        $name = str($this->report->name)->slug()->value().'-'.now()->format('Y-m-d').'.csv';

        return [
            Attachment::fromData(fn (): string => $this->csv, $name)
                ->withMime('text/csv'),
        ];
    }
}
