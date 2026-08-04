/**
 * The screens PanelKit's PHP half renders.
 *
 * WHY THIS PACKAGE EXISTS. `panelkit/panel` answers five requests with
 * `Inertia::render('ResourceIndex')`, `'ResourceForm'`, `'ResourceView'`,
 * `'Trash'` and `'PanelHome'` - and shipped no Vue at all. So a fresh
 * `composer require panelkit/panel` produced routes that resolved to components
 * that did not exist: a white page and a console error naming a file the
 * developer had never heard of, on the very first screen they visited. The PHP
 * half was installable and the panel was not.
 *
 * WHY A PACKAGE RATHER THAN PUBLISHED STUBS. Publishing 3,000 lines of Vue into
 * an application makes every fix a manual re-publish, and re-publishing
 * overwrites whatever the application changed. A package upgrades with
 * `npm update`, and an application that wants to change a screen still can - it
 * owns the one-line page file that imports from here, so replacing a screen
 * means editing that file rather than forking a tree.
 *
 * WHY IT IS SEPARATE FROM `@panelkit/panel`. That package is deliberately
 * transport-agnostic: nothing in it imports Inertia, which is what lets its
 * table and form components run under Livewire, a plain SPA, or in a test with
 * no router at all. These pages are Inertia to their bones - `useForm`, `Link`,
 * `router.reload`, partial reloads by prop name - so putting them there would
 * have cost that property for every consumer.
 *
 * WHAT AN APPLICATION MUST STILL PROVIDE: a layout. These pages name none, so
 * the shell - sidebar, header, account menu - stays the application's. See the
 * README.
 */

export { default as ResourceIndex } from './pages/ResourceIndex.vue'
export { default as ResourceForm } from './pages/ResourceForm.vue'
export { default as ResourceView } from './pages/ResourceView.vue'
export { default as Trash } from './pages/Trash.vue'
export { default as PanelHome } from './pages/PanelHome.vue'
export { default as LandingPage } from './pages/landing/Composed.vue'
export { default as LandingNav } from './pages/landing/LandingNav.vue'
export { default as LandingFooter } from './pages/landing/LandingFooter.vue'
export { default as PanelDashboard } from './pages/PanelDashboard.vue'
export { default as Changelog } from './pages/Changelog.vue'
export { default as Environment } from './pages/Environment.vue'
export { default as Roles } from './pages/settings/Roles.vue'
export { default as Profile } from './pages/settings/Profile.vue'
export { default as Security } from './pages/settings/Security.vue'
export { default as DocumentTemplates } from './pages/documents/Templates.vue'
export { default as DocumentTemplateDesigner } from './pages/documents/TemplateDesigner.vue'
export { default as DocumentPrint } from './pages/documents/DocumentPrint.vue'

export { default as AuditTimeline } from './components/AuditTimeline.vue'

export { useListTable, type ListPageProps } from './composables/useListTable'
export { useBulkJob } from './composables/useBulkJob'
export { useUnsavedGuard } from './composables/useUnsavedGuard'

/*
 * THE SHELL, which the package did not ship until now.
 *
 * `panel:install` published a scaffold layout and the reference app built its
 * own sidebar, topbar and account menu - so a generated portal got the
 * packaged SCREENS inside a plainer frame, and read as a less finished product
 * than the demo it was supposed to look like. A sidebar is not
 * business-specific; every panel has one, and every consumer rebuilt it.
 *
 * The published `PanelLayout.vue` is now a thin wrapper over `PanelShell`, so
 * the frame arrives working and stays editable - the file is still yours.
 */
export { default as PanelShell } from './components/shell/PanelShell.vue'
export { default as PanelSidebar } from './components/shell/PanelSidebar.vue'
export { default as PanelAccountMenu } from './components/shell/PanelAccountMenu.vue'
export { default as PanelCommandPalette } from './components/shell/PanelCommandPalette.vue'
export { default as PanelNotificationBell } from './components/shell/PanelNotificationBell.vue'
export { default as PanelBreadcrumbs } from './components/shell/PanelBreadcrumbs.vue'
export { default as PanelImpersonationBanner } from './components/shell/PanelImpersonationBanner.vue'
export type { NavItem } from './components/shell/types'

/*
 * THE REFERENCE APP'S SHELL, MOVED WHOLE.
 *
 * `PanelShell` above is the thin frame written for consumers who had nothing;
 * this is the one the demo actually uses - 509 lines of sidebar with flyouts
 * when collapsed, collapsible groups, a mobile sheet and a horizontal mode.
 * Rebuilding that against a thinner primitive is exactly how a generated portal
 * ends up looking almost right, so it moved instead.
 *
 * `NavUser` TAKES ITS MENU AS A SLOT. The reference app links from there to its
 * settings centre, its operations screen and its lock screen - its routes,
 * which a package cannot name. The trigger, the avatar and the placement are
 * packaged; the items are passed in.
 */
export { default as AppSidebar } from './components/shell/AppSidebar.vue'
export { default as AppLogo } from './components/shell/AppLogo.vue'
export { default as AppLogoIcon } from './components/shell/AppLogoIcon.vue'
export { default as AppShell } from './components/shell/AppShell.vue'
export { default as AppContent } from './components/shell/AppContent.vue'
export { default as SessionExpired } from './components/SessionExpired.vue'
export { default as DeleteUser } from './components/DeleteUser.vue'

/*
 * THE ERROR SCREENS, moved from the reference app.
 *
 * `Error` is the one page every status renders through - five near-identical
 * page components drift, and the 500 is the one nobody revisits because it is
 * the hardest to trigger on purpose. The copy is deliberately unhelpful about
 * CAUSES: a 403 that names the missing permission tells whoever probed for it
 * what to ask for next.
 */
export { default as ErrorPage } from './pages/errors/Error.vue'
export { default as ErrorScreen } from './pages/errors/ErrorScreen.vue'
export { default as ErrorArt } from './pages/errors/ErrorArt.vue'

/*
 * THE INSTALLATION'S OWN HEALTH, moved from the reference app.
 *
 * The services behind these - `BackupStatus`, `BackupArchive`, `LogReader`,
 * `MonitorSampler` - were packaged long before the screens were, so an
 * installation had every piece of the machinery and nothing to reach it from.
 *
 * Their Wayfinder route helpers became a `routes` prop, which the packaged
 * `OperationsController` fills from the CURRENT PANEL'S path.
 */
export { default as Backups } from './pages/operations/Backups.vue'
export { default as BackupSettings } from './pages/operations/BackupSettings.vue'
export { default as Logs } from './pages/operations/Logs.vue'
export { default as Monitoring } from './pages/operations/Monitoring.vue'
export { default as AssistantSettings } from './pages/settings/Assistant.vue'
export {
    installSessionExpiryPreview,
    notifySessionExpired,
    sessionExpired,
    watchForSessionExpiry,
} from './lib/sessionExpired'
export { default as NavMain } from './components/shell/NavMain.vue'
export { default as NavFooter } from './components/shell/NavFooter.vue'
export { default as NavUser } from './components/shell/NavUser.vue'
export { default as UserInfo } from './components/shell/UserInfo.vue'
export { default as AppHeader } from './components/shell/AppHeader.vue'
export { default as AppTopNav } from './components/shell/AppTopNav.vue'
export { default as AppSidebarHeader } from './components/shell/AppSidebarHeader.vue'
export { default as AssistantDrawer } from './components/shell/AssistantDrawer.vue'
export { default as Breadcrumbs } from './components/shell/Breadcrumbs.vue'
export { default as TopNavUser } from './components/shell/TopNavUser.vue'
export { usePanelNav } from './composables/usePanelNav'
export { useCurrentUrl } from './composables/useCurrentUrl'
export { getInitials } from './composables/useInitials'
export { useSidebarOpener } from './lib/mobileNav'
export { useTranslations } from './composables/useTranslations'

/**
 * The page names the PHP half renders, and the component each one means.
 *
 * FOR AN APPLICATION THAT RESOLVES PAGES ITSELF. Inertia's Vite plugin globs
 * `resources/js/pages/**` and knows nothing about a package, so the supported
 * arrangement is a one-line page file per screen - which is what
 * `php artisan panel:install --js` writes. An application with a hand-written
 * `resolve` can use this map instead and skip the files entirely:
 *
 * ```ts
 * resolve: (name) => PANEL_PAGES[name] ?? resolvePageComponent(...)
 * ```
 *
 * KEYED BY THE NAME THE SERVER SENDS, not by file path, because the server is
 * the only side that decides it. A rename here without a rename in
 * `ResourceController` is a white page, so the panel's own test walks both.
 */
export const PANEL_PAGES = {
    ResourceIndex: () => import('./pages/ResourceIndex.vue'),
    ResourceForm: () => import('./pages/ResourceForm.vue'),
    ResourceView: () => import('./pages/ResourceView.vue'),
    Trash: () => import('./pages/Trash.vue'),
    PanelHome: () => import('./pages/PanelHome.vue'),
    'landing/Composed': () => import('./pages/landing/Composed.vue'),
    PanelDashboard: () => import('./pages/PanelDashboard.vue'),
    Changelog: () => import('./pages/Changelog.vue'),
    Environment: () => import('./pages/Environment.vue'),

    /*
     * The document designer. Nested names, because the server sends
     * `documents/TemplateDesigner` - a flat key here would not match and the
     * failure is a white page.
     */
    'documents/Templates': () => import('./pages/documents/Templates.vue'),
    'documents/TemplateDesigner': () => import('./pages/documents/TemplateDesigner.vue'),
    'documents/DocumentPrint': () => import('./pages/documents/DocumentPrint.vue'),

    // The permission matrix - the package owns the roles system now.
    'settings/Roles': () => import('./pages/settings/Roles.vue'),
    'settings/Profile': () => import('./pages/settings/Profile.vue'),
    'settings/Security': () => import('./pages/settings/Security.vue'),

    // Backups, logs and monitoring - the installation's own health.
    'operations/Backups': () => import('./pages/operations/Backups.vue'),
    'operations/BackupSettings': () => import('./pages/operations/BackupSettings.vue'),
    'operations/Logs': () => import('./pages/operations/Logs.vue'),
    'operations/Monitoring': () => import('./pages/operations/Monitoring.vue'),

    // The assistant's provider and key.
    'settings/Assistant': () => import('./pages/settings/Assistant.vue'),
} as const

/*
 | RENDER HOOKS - roadmap 4.4. `RenderHook` is dropped at named positions
 | inside the packaged pages; an application registers which components a
 | plugin is allowed to mount, because a name from the server that resolved
 | to any component in the bundle would be a plugin mounting anything
 | anywhere.
 */
export { default as RenderHook } from './components/RenderHook.vue'
export { default as TicketThread } from './components/TicketThread.vue'
export { default as AnnouncementBanners } from './components/AnnouncementBanners.vue'
export type { Announcement, Passkey, TwoFactorConfigContent } from './types'

/*
 * THE SIGN-IN SCREENS - v0.5.0.
 *
 * Exported like every other page, and routed like none of them: they belong to
 * a PANEL rather than to the application, so `make:panel --auth` writes the
 * routes and the page shims. See `PanelAuthController`.
 */
export { default as AuthLayout } from './pages/auth/AuthLayout.vue'
export { default as Login } from './pages/auth/Login.vue'
export { default as ForgotPassword } from './pages/auth/ForgotPassword.vue'
export { default as ResetPassword } from './pages/auth/ResetPassword.vue'

/*
 * THE REST OF THE DEMO'S AUTH, MOVED RATHER THAN REDRAWN.
 *
 * The reference app had ten of these and the package shipped three, which is
 * most of what "the design does not come with it" meant. Each file below is the
 * demo's markup with its `@/components/ui/*` imports swapped for this package's
 * primitives and its Wayfinder route helpers swapped for props - because a
 * package cannot know a consuming application's route names.
 */
export { default as Register } from './pages/auth/Register.vue'
export { default as VerifyEmail } from './pages/auth/VerifyEmail.vue'
export { default as TwoFactorChallenge } from './pages/auth/TwoFactorChallenge.vue'
export { default as ConfirmPassword } from './pages/auth/ConfirmPassword.vue'
export { default as RenewPassword } from './pages/auth/RenewPassword.vue'
export { default as LockScreen } from './pages/auth/LockScreen.vue'
export { default as VerifyOtp } from './pages/auth/VerifyOtp.vue'
export { default as AuthField } from './components/AuthField.vue'
export { default as AuthTurnstile } from './components/AuthTurnstile.vue'
export { default as AuthPasskeyButton } from './components/AuthPasskeyButton.vue'
export { default as AuthInputError } from './components/AuthInputError.vue'
export { default as AuthTextLink } from './components/AuthTextLink.vue'
export {
    registerRenderHookComponent,
    resolveRenderHookComponent,
} from './components/renderHookRegistry'

/*
 * THE ACCOUNT'S SECURITY CONTROLS, moved from the reference app.
 *
 * Passkeys and two-factor were a solved problem there and absent from a fresh
 * installation - so every consumer either rebuilt them or shipped a panel where
 * "manage your sign-in" meant a password field and nothing else.
 *
 * Every route defaults to what `laravel/fortify` and `laravel/passkeys`
 * register, so an installation that took those as they came passes nothing.
 */
export { default as ManagePasskeys } from './components/security/ManagePasskeys.vue'
export { default as PasskeyItem } from './components/security/PasskeyItem.vue'
export { default as ManageTwoFactor } from './components/security/ManageTwoFactor.vue'
export { default as TwoFactorRecoveryCodes } from './components/security/TwoFactorRecoveryCodes.vue'
export { default as TwoFactorSetupModal } from './components/security/TwoFactorSetupModal.vue'
export { useTwoFactorAuth } from './composables/useTwoFactorAuth'
export type { TwoFactorRoutes, UseTwoFactorAuthReturn } from './composables/useTwoFactorAuth'
