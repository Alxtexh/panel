# Working notes — kept for history, not for guidance

**Nothing in this directory is documentation.** These are the planning documents
PanelKit was built from: sequenced phases, design arguments, competitor notes,
lists of things to do. They were accurate when written and most of them describe
work that has since been done, changed, or deliberately abandoned.

They moved here from the repository root, where eight of them sat beside four
real documents. Together they were **6,650 lines** — five times the length of
the actual guide — and a reader arriving at the root had no way to tell which
files described the software and which described an intention from months ago.
A stale plan beside a current guide does not read as history; it reads as a
second, contradictory answer.

## What to read instead

| Question | Document |
| --- | --- |
| How do I install and build with it? | [PANELKIT.md](../../PANELKIT.md) |
| What is here, and what am I looking at? | [README.md](../../README.md) |
| I have a Filament panel to port | [FILAMENT_TO_PANELKIT.md](../../FILAMENT_TO_PANELKIT.md) |
| What changed between versions? | [CHANGELOG.md](../../CHANGELOG.md) |
| How do I upgrade? | [UPGRADING.md](../../UPGRADING.md) |
| How do I deploy it? | [DEPLOYMENT.md](../../DEPLOYMENT.md) |
| What exactly does it ship? | [FEATURES.md](../../FEATURES.md), [GAP_ANALYSIS.md](../../GAP_ANALYSIS.md) |

For what the installed version actually contains — every field, column, filter
and action with exact syntax — run `php artisan panel:blueprint`. It reads the
tree in front of you, so it cannot go stale the way a written list does. That is
the general reason these files are here rather than maintained: **a document
that has to be manually kept true will eventually not be.**

## Why they were kept at all

They carry the *reasoning* — why row reordering is a toolbar icon, why the
assistant is a drawer, why custom fields were nearly not built. When somebody
asks "why is it like this", the argument is usually in one of these. Read them
as minutes of a meeting, not as instructions.
