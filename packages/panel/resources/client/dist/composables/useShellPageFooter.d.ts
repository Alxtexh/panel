import type { ComputedRef, InjectionKey } from 'vue';
/**
 * Whether the shell will render AppPageFooter for this panel.
 *
 * PROVIDED so a page that also imports the component can skip its own copy.
 * The shell still renders at most one when `panel.pageFooter` is true.
 */
export declare const PAGE_FOOTER_FROM_SHELL: InjectionKey<ComputedRef<boolean>>;
export declare function useShellPageFooter(): ComputedRef<boolean>;
