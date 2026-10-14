# spicetify-site

Source for [spicetify.yusufaf.dev](https://spicetify.yusufaf.dev/), the docs hub for my
[Spicetify](https://spicetify.app/) extensions. Built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/), deployed to GitHub Pages.

## How it builds

Each extension lives in its own repository, and its README is the single source of truth: the
same file is the Spicetify Marketplace listing and the page on this site.

- `scripts/sync-extensions.mjs` runs before every `dev` and `build`. For each extension listed
  in `src/data/extensions.mjs`, it fetches `manifest.json`, `README.md`, `CHANGELOG.md` and
  `.release-please-manifest.json` from the repo's default branch (the ref Marketplace reads)
  and writes `src/content/docs/<slug>/index.md`, `changelog.md`, and
  `src/data/extensions.generated.json` for the landing-page shelf. All of it is gitignored.
- `src/lib/transformReadme.mjs` turns a README into a page: it drops the leading H1,
  strips `<!-- site:skip-start -->` … `<!-- site:skip-end -->` blocks (content meant for
  GitHub and Marketplace only), and makes relative links and images absolute.
- A missing manifest or README fails the build, so a broken extension repo never ships an
  empty page.
- Hand-written pages (landing page, getting started, troubleshooting, developers) live in
  `src/content/docs/`.

To change an extension's page, edit its README in the extension repo. Each extension repo's
`notify-docs.yml` sends a `repository_dispatch` here when its README, changelog, manifest or
root images change on `main`, and `docs.yml` rebuilds and deploys. A weekly scheduled build
catches anything missed.

## Development

Uses pnpm.

```bash
pnpm install
pnpm dev         # sync extension pages, then start the dev server
pnpm build       # sync, then build to dist/
pnpm preview     # serve the built site
pnpm sync        # re-fetch extension pages without building
pnpm test        # vitest (transformReadme)
pnpm typecheck   # astro check
```

## Adding an extension

Add an entry to `EXTENSIONS` in `src/data/extensions.mjs` (`slug` becomes the URL path), and
add `notify-docs.yml` to the extension repo so its changes trigger a rebuild.

## License

MIT
