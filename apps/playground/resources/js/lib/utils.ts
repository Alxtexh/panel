/**
 * `cn` and `toUrl`, re-exported from the package that owns them.
 *
 * THEY WERE REIMPLEMENTED HERE. `packages/ui/src/lib/cn.ts` says in its own
 * docblock that both were MOVED from this file - and this file kept its copies,
 * so the move added a second implementation rather than relocating one. Six
 * files here import `@/lib/utils`, so the path stays and only the bodies go.
 *
 * THE PACKAGE'S `toUrl` IS THE BETTER OF THE TWO. This copy returned
 * `href?.url`, which is `string | undefined`; the packaged one falls back to
 * `''`, so a caller comparing a link against the current path gets a string
 * either way rather than an `undefined` that silently never matches.
 */
export { cn, toUrl } from '@alxtexh-enterprise/panel';
