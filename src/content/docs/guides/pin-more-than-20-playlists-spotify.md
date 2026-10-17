---
title: Pin more than 20 playlists in Spotify
description: Spotify's own pins stop at 20. How to pin as many playlists, albums and podcasts as you want in the Spotify desktop app, sort them, and keep them out of your library list.
---

Spotify lets you pin up to 20 items at the top of Your Library. To pin more than that on the desktop app, or to keep pinned items in their own section instead of inside the library list, you can add the free [Enhanced Pins](/enhanced-pins/) extension through Spicetify. This guide covers when Spotify's own pins are enough, and how to set up Enhanced Pins when they aren't.

## What Spotify's own pins do

Since July 8, 2026, Spotify lets every Free and Premium account pin up to **20** playlists, albums, artists, podcasts or audiobooks to the top of Your Library ([Spotify's announcement](https://x.com/Spotify/status/2074839915687203258)). It was 4 before that.

Native pins have real advantages: they sync across your phone, desktop and the web player, and they need nothing installed. **If 20 pins is enough for you and you use Spotify on more than one device, use Spotify's own pins.**

They stop short in a few ways:

- There's a hard cap of 20.
- Pinned items stay inside the library list, in the same scrolling column as everything else.
- They have one order, the one you drag them into. There's no sorting by name, type or date pinned.

## What Enhanced Pins adds

![The Enhanced Pins section at the top of the Spotify sidebar, showing six of ten pinned playlists and albums](https://raw.githubusercontent.com/yusufaf/spicetify-enhanced-pins/main/preview.png)

Enhanced Pins adds a separate section at the top of the desktop app's left sidebar:

- **No limit** on pinned playlists, albums, podcasts and audiobooks, plus Liked Songs, Your Episodes and Local Files.
- **Sorting:** your own order (drag and drop, or Move to top/bottom), alphabetical, by type, or most recently pinned.
- **Show more / show less:** show only the first few pins, with the rest behind an "N more" button.
- **No duplicates:** pinned items are hidden from the regular library list (on by default, and you can turn it off).
- **Icons:** mark pins with a preset icon or any emoji.
- **Backup:** export your pins and settings to a JSON file and import them on another computer.

It also keeps Spotify's right-click actions on each pin: Play, Shuffle, Add to Queue, Start a Jam, Download and the rest.

## Set it up

### 1. Install Spicetify

Enhanced Pins runs through [Spicetify](https://spicetify.app/docs/getting-started), a free command-line tool that customizes the Spotify desktop app. Follow [Install Spicetify and extensions](/getting-started/) first.

### 2. Install Enhanced Pins

With the [Spicetify Marketplace](https://spicetify.app/docs/customization/marketplace) installed:

1. In Spotify, open **Marketplace** (the shopping-cart icon at the top left) and stay on the **Extensions** tab.
2. Search for `Enhanced Pins`. If it doesn't show up, click **Load more** (» at the bottom of the list) until it does. Marketplace only searches the extensions it has loaded so far.
3. Hover the **Enhanced Pins** card, click its download button, then click **Reload now**.

To install it by hand instead, see [Enhanced Pins → Installation](/enhanced-pins/#installation).

### 3. Pin your playlists

Right-click any playlist, album, podcast or audiobook in Spotify, or Liked Songs, and choose **Enhanced Pin**. It appears in the **Enhanced Pins** section at the top of the sidebar. Click a pin to open it, or double-click to start playing it.

### 4. Organize them

Click the gear icon in the section header to open the settings:

- **Sort by:** Custom keeps the order you drag pins into, and is the only mode where dragging works. Alphabetical, Type and Recently pinned sort for you.
- **Max visible pins:** set it to, say, 8 to show the first eight, with the rest behind a "12 more" style button. The default, 0, shows them all.
- **Hide pinned items from library list:** on by default, so a pinned playlist doesn't also appear further down.

### 5. Back them up

Enhanced Pins stores your pins on this computer only, so they don't sync to your phone or other computers. To move them, open the settings, use **Export pins & config (JSON)**, then **Import from JSON…** on the other computer. An import replaces whatever pins and settings that computer already has, then reloads Spotify.

## Limits to know about

- **Desktop only.** Spicetify modifies the Windows, macOS and Linux desktop app. Enhanced Pins doesn't appear on your phone or in the web player, where Spotify's own pins still apply.
- **Spotify updates.** An update can undo Spicetify's changes. Run `spicetify backup apply` to restore them; see [Troubleshooting](/troubleshooting/) if something stays broken.
- **Both kinds of pin can coexist.** Items you pin with Spotify's own Pin stay where they are. You can also add an enhanced pin to Spotify's own pins from its right-click menu (**Pin playlist**, the label for every type).

## Remove it

Installed from Marketplace: open Marketplace's **Installed** tab, remove Enhanced Pins, and reload. Installed by hand: run `spicetify config extensions enhanced-pins.js-` (with the trailing `-`), then `spicetify apply`. Your pins stay in local storage, so they come back if you reinstall.
