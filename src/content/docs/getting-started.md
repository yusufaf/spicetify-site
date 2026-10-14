---
title: Install Spicetify and extensions
description: Install Spicetify, then add an extension through Marketplace or by copying the file by hand.
---

These extensions run inside the Spotify desktop client through [Spicetify](https://spicetify.app/docs/getting-started). Install Spicetify first.

## Install an extension from Marketplace

1. Install [Spicetify Marketplace](https://github.com/spicetify/marketplace) if you haven't already.
2. Open Marketplace in Spotify (the shopping-cart icon at the top left) and stay on the **Extensions** tab.
3. Type the extension's name into **Search Extensions…**.
4. If no card shows up, click **Load more** below the results until it does. Marketplace only searches the extensions it has already loaded, 100 repositories at a time, and these ones aren't in the first batch. Changing **Sort by** doesn't help, since it only reorders what's loaded.
5. Hover the card, click its download button, then click **Reload now**.

Once everything has loaded, searching `yusufaf` lists all of these extensions at once.

Marketplace finds extensions by their GitHub repository topic (`spicetify-extensions`) and shows each extension's README as its page.

## Install an extension by hand

1. Download the extension's `.js` file from its repository.
2. Copy it into your Spicetify `Extensions` folder:
   - Windows: `%APPDATA%\spicetify\Extensions`
   - macOS and Linux: `~/.config/spicetify/Extensions`
3. Enable it and apply:

   ```sh
   spicetify config extensions <file-name>.js
   spicetify apply
   ```

## After Spotify updates

A Spotify update can wipe the changes Spicetify made. Re-apply them with:

```sh
spicetify backup apply
```

If an extension stops working after an update, check its page here and its repository's issues. See [Troubleshooting](/troubleshooting/) for more.
