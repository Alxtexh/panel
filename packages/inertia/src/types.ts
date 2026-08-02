/**
 * Payload shapes the server sends that MORE THAN ONE component reads.
 *
 * Every other type in this package is declared in the single file that uses it,
 * which is right: a shape used once is documentation for that file and moving
 * it away costs a jump. This module is for the exception - `announcements`
 * arrives on `PanelDashboard` and is handed to `AnnouncementBanners`, so the
 * shape is spelled in two places, and two copies of a server payload drift in
 * the direction nothing catches. The server adds a field, one copy learns about
 * it, and the other keeps compiling.
 */

/**
 * A notice addressed to everybody in an organisation, as `Announcement::
 * toBanner()` serialises it.
 *
 * `display` IS THE AUTHOR'S CHOICE AND NOT A DETAIL. A toast is gone in
 * seconds, so anyone who was making coffee never saw it - right for "the new
 * export format is live" and wrong for "billing is down".
 */
export interface Announcement {
    id: number
    title: string
    body: string | null
    severity: 'info' | 'success' | 'warning' | 'danger'
    display: 'banner' | 'toast'
    actionLabel: string | null
    actionUrl: string | null
}
