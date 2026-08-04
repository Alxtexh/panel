# Built tarballs of `@alxtexh-enterprise/panel`

**Why binaries are committed here.** The npm half is private — it is not on
npmjs.com, and `packages/ui/package.json` carries `"private": true` so
`npm publish` refuses. That leaves it with no distribution channel at all, and
the failure is total rather than partial: the Composer package contains zero
`.vue` files, so a machine without this tarball can install `panelkit/panel`
perfectly and render nothing.

That happened. A consuming project reported "not on npm (404), no `.tgz` on
disk, npm cache empty" — correct in every particular, and unfixable from their
side.

So the tarball ships here, one per release, ~600 KB each. Committing a build
artifact is normally wrong; it is right when it is the only copy that exists
outside one laptop.

## Using one

```bash
npm install /path/to/alxtexh-enterprise-panel-0.9.0.tgz @vitejs/plugin-vue
```

Or commit it into your own application for a reproducible `npm ci`:

```json
"dependencies": { "@alxtexh-enterprise/panel": "file:vendor-js/alxtexh-enterprise-panel-0.9.0.tgz" }
```

## Rebuilding one

```bash
cd packages/ui && npm pack --pack-destination ../../dist
```

`prepack` runs the build first, so a tarball can never carry a stale `dist/`.

## Verify what you have

Each release's checksum is in `CHECKSUMS.txt`. A tarball is the one artifact
here that nothing else can vouch for, so check it rather than assuming.

```bash
sha256sum -c CHECKSUMS.txt
```
