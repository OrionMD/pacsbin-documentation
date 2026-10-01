# Changelog

User-facing changes to Pacsbin, newest first.

## 2.1.0 — 2026-10-01

### New
- Mixed multiframe series (cine clips and still images) can be split into separate stacks from the series list, and merged back at any time.
- Redesigned case editor, with study reordering.
- Password reset, and switching your primary email to any confirmed address.
- Copy a shared case into your own cases or into a playlist.
- Email notifications when a case is shared with your organization.
- New "allow download" permission on cases.

### Improved
- Faster image prefetching that works with progressive loading; progressive loading now also applies to radiographs (DX).
- Assessment results load faster, and the results table and export now include start/end times and user email.
- More reliable embedded viewer client, with updated embedding docs.
- Pasted case notes no longer carry over outside formatting.
- Jumping to a bookmark in the current series no longer reloads the series.
- Refreshed case viewer styling.

### Fixed
- Black images on some Android browsers, and on studies with bad orientation metadata.
- Viewer failing when several tabs are open at once (lost WebGL context).
- White images caused by a broken default window/level, and window/level reset.
- Bookmarks from v1 that broke during migration.
- Email login being case-sensitive.
- Quiz answers being overwritten, the "allow review" option not being enforced, and tutor mode issues.
- Public playlist links and old v1 playlist and uploader URLs.
- Usage limits and plan display for organization members.

## 2.0.2 — 2026-04-29

The public launch of Pacsbin v2.

### New
- Billing through Stripe, with plan changes, cancellation and free trials.
- Admin panel for organizations, including DICOMweb (PACS) configuration.
- Progressive image loading: a lower-resolution image shows first, with a badge to load full resolution on demand.
- Multiframe image support.

### Fixed
- Series reordering not saving.
- Case duplication, the tag selector and custom link deletion.
- Zip downloads.
- Google sign-in.
- Embedding the viewer in external sites.

## 2.0.1 — 2025-10-20

First tagged release of Pacsbin v2, in beta: a rebuilt viewer (crosshairs, reference lines, bookmarks), a new case organizer, playlists, assessments, sharing, dark mode and PACS integration via DICOMweb.
