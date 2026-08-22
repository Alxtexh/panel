# Resource comments and @mentions

Opt-in threaded comments on any resource record page. Off by default: no routes,
no Vue, no table writes until you declare `comments()` on the resource class.

## Enable on a resource

```php
use Alxtexh\Panel\Comments\Comments;
use Alxtexh\Panel\Resources\Resource;

final class InvoiceResource extends Resource
{
    public static function comments(): ?Comments
    {
        return Comments::make()->label('Discussion');
    }
}
```

`hasComments()` is a convenience check (`comments() !== null`).

When enabled:

- A **Comments** section appears on the record view page (below relations and
  plugin hooks, above audit history).
- `GET {resource}/{id}/record-comments` lists comments (author + timestamp).
- `POST {resource}/{id}/record-comments` creates a comment (`body` required).

The segment is `record-comments` rather than `comments` so the URL does not
collide with a nested resource keyed `comments` (for example
`/articles/5/comments` as a related list).

Nested resources use the same URLs under the parent prefix, for example
`/clients/5/invoices/12/record-comments`.

## Authorization

| Action | Ability |
|--------|---------|
| View thread | `view` on the record |
| Post comment | `update` **or** `comment` on the record |

To require a dedicated permission instead of `update`, chain
`commentAbilityOnly()`:

```php
return Comments::make()->commentAbilityOnly();
```

Add a `comment` method to your policy (and sync permissions) when you use the
dedicated ability. The package does not add `comment` to every resource's
permission matrix by default.

## @mentions

The composer parses `@username` or `@email` in the body:

- `@person@company.test` matches that email.
- `@jamie` matches the email local part or a slug of the user's name.

Mentioned users receive a **bell** notification (`BellText`, category
`mentions`). Email delivery is not wired in v1; listen for
`Alxtexh\Panel\Events\CommentCreated` if you need mail or webhooks.

Mentioned user ids are stored in the `mentions` JSON column on each row.

## Database

Migration: `panel_comments` (configurable via `panel.comments.table` or
`PANEL_COMMENTS_TABLE`).

Columns: polymorphic `commentable`, `user_id`, `body`, optional `mentions`
json, optional `tenant_id`, timestamps.

## Configuration

```php
// config/panel.php
'comments' => [
    'table' => env('PANEL_COMMENTS_TABLE', 'panel_comments'),
],
```

## Deferred in v1

Real-time updates, edit/delete, reactions, and rich text (plain textarea only).
Email for mentions (event hook is provided).

## Demo

`TicketResource` enables comments as **Internal notes** when ticketing is
registered on a panel. Open any ticket record on the playground to try it.
