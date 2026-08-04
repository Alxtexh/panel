/**
 * This family lives in `@alxtexh-enterprise/panel` now.
 *
 * ALIASED BACK TO `Input`, because the package exports it as `ShadcnInput` to
 * avoid colliding with its own `PkTextInput` - and this application's screens
 * import `{ Input }` in a couple of dozen places.
 */
export { ShadcnInput as Input } from '@alxtexh-enterprise/panel';
