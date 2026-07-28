{{--
    The body of a scheduled report.

    IT SAYS WHAT PRODUCED IT AND WHY IT ARRIVED. A CSV from an unattended system
    with no context is one nobody trusts and everybody forwards to ask about -
    naming the report and its schedule is what makes it actionable rather than
    suspicious.

    THE ZERO CASE IS SPELLED OUT. "No rows matched" is the answer somebody is
    waiting for, and an empty attachment with no explanation reads as a broken
    export rather than as a quiet week.
--}}
<x-mail::message>
# {{ $name }}

@if ($rows === 0)
Nothing matched this report today. The attached file has only its column
headings - that is the answer, not a failure.
@else
{{ number_format($rows) }} {{ Str::plural('row', $rows) }} from **{{ $resource }}**, attached as a CSV.
@endif

This report runs {{ Str::lcfirst($schedule) }}. If it should stop, or go
somewhere else, change it in the panel rather than filtering it in your inbox -
that way it stops being produced at all.

<x-mail::subcopy>
Sent by {{ config('app.name') }}. Nobody typed this; it ran on a schedule.
</x-mail::subcopy>
</x-mail::message>
