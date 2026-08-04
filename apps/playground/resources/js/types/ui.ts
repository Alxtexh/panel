/** Light or dark. `system` was removed - see @panelkit/panel's Theme. */
export type Appearance = 'light' | 'dark';
export type ResolvedAppearance = 'light' | 'dark';

export type AppVariant = 'header' | 'sidebar';

export type FlashToast = {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
};
