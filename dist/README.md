# Build artifacts

**There is no tarball here any more, and that is the fix.**

This directory used to hold a copy of the client half, one file per release,
because the npm half had no distribution channel anybody could reach. From
0.9.2 the client ships **inside the Composer package**:

```
packages/panel/client/panelkit-client.tgz
```

`composer require panelkit/panel` therefore delivers both halves, and the
install is:

```bash
composer require panelkit/panel
npm install ./vendor/panelkit/panel/client/panelkit-client.tgz @vitejs/plugin-vue
```

**Why the copies had to go.** Two committed copies of one artifact is two
things that can disagree, and one of them will - this directory was already a
release behind when it was deleted. `ClientTarballTest` keeps the remaining
copy in step with `packages/ui`; there is nothing to keep a second copy in step
with anything.

**If you want the tarball on its own** - a separate front-end build, an
air-gapped transfer - every tagged release attaches it:

    https://github.com/enterprisealxtexh/panelkit/releases

**To build a staging bundle** (the archive, the docs and an install guide, for
a machine with no Composer access at all):

```bash
./scripts/staging-bundle.sh
```

It writes into this directory, which is gitignored apart from this file.
