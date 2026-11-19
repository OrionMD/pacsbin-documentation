# Changelog

User-facing changes to Pacsbin, newest first.

## 2.4.0 — 2026-11-19

### New
- The home page shows live Pacsbin numbers (cases viewed, images served), for the last 24 hours or 30 days.

### Improved
- Cases and playlists open faster: the case, its first series and images, and the image decoder start loading as soon as the page does, and image access is quicker when many people open the same case.

### Fixed
- When the database is briefly overloaded, pages now fail quickly with a "temporarily unavailable" error instead of hanging or showing a Cloudflare error page, and recover sooner.

## 2.3.1 — 2026-11-12

### Fixed
- PET series on liteVNA now load instead of staying on an empty, endlessly loading viewport.
- If a series fails to load, the viewport now shows an error. You can click it or drop a series on it to retry.
- Passwords must now be at least 8 characters.

## 2.3.0 — 2026-10-30

### New
- "Report slow loading": tap the quality dot in a viewport's corner to send your view's loading measurements with a note. The viewer also offers this if nothing has drawn after 10 seconds.

### Improved
- Cases open faster, with fewer sequential database round trips and automatic retry of stalled reads.
- Restyled pricing page to match the new home page.

### Fixed
- Partial multipart responses are now handled correctly by the image loader.
- Fixed the error page.

## 2.2.0 — 2026-10-16

### New
- Redesigned home page, with demo videos for the viewer, uploader and quiz, updated device mockups, and a layout that works on phones.
- The embeddable viewer client is now published at a stable, versioned URL (`pacsbin-client.v1.js`); the old URL keeps working.

### Improved
- Embedded viewer reliably detects the viewer's address even when pacsbin.com redirects from www.
- Setting a viewport from the embed client now supports bookmark query strings.

### Fixed
- Images without a Modality tag, such as stripped specimen photos, now display instead of failing to render.
- The www.pacsbin.com address now resolves correctly.

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
