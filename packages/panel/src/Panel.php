<?php

declare(strict_types=1);

namespace PanelKit\Panel;

use Closure;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

/**
 * A panel: an id, a path, a guard, middleware, and a tenancy context.
 *
 * THE GUARD IS THE POINT. Spec §9 item 6: each panel declares its own guard and
 * users resolve through `Auth::guard($panel->guard())`, never a bare
 * `$request->user()`.
 *
 * antipatterns §2.1 is that failure in production: admin code called
 * `$request->user()` on a panel authenticated with a non-default guard, got
 * null, resolved a per-admin draft key to an empty string, and silently fell
 * back to saved settings. Every unsaved edit was discarded. The page returned
 * 200 and looked correct; only logging the resolved id exposed it.
 *
 * CONTEXT matters too (addendum Part A). A central panel - platform or super
 * admin - must never have tenant scoping applied, and a tenant panel must refuse
 * to boot without a resolved tenant. Conflating them is how a super admin ends
 * up seeing one tenant's data, or an operator sees everyone's.
 */
final class Panel
{
    public const CONTEXT_TENANT = 'tenant';

    public const CONTEXT_CENTRAL = 'central';

    private string $path = 'app';

    private string $guard = 'web';

    private string $context = self::CONTEXT_TENANT;

    private ?string $routeName = null;

    /** @var list<string> */
    private array $middleware = ['web'];

    /** @var list<string> */
    private array $authMiddleware = ['auth'];

    /**
     * Plugins named by THIS panel, on top of any registered globally.
     *
     * BOTH ROUTES EXIST BECAUSE THEY ANSWER DIFFERENT QUESTIONS. A package
     * registering itself (`PanelManager::plugin`) means "install wherever you
     * apply", which is what makes `composer require` sufficient. Naming one here
     * means "this portal, specifically" - the reseller portal getting a billing
     * screen the operator portal does not.
     *
     * @var list<Plugins\PanelPlugin>
     */
    private array $plugins = [];

    private ?Closure $brandName = null;

    private ?Closure $colors = null;

    private function __construct(public readonly string $id) {}

    public static function make(string $id): self
    {
        return new self($id);
    }

    /**
     * Install plugins into this panel.
     *
     * @param  list<Plugins\PanelPlugin>  $plugins
     */
    public function plugins(array $plugins): self
    {
        $this->plugins = [...$this->plugins, ...$plugins];

        return $this;
    }

    /** @return list<Plugins\PanelPlugin> */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    public function path(string $path): self
    {
        $this->path = trim($path, '/');

        return $this;
    }

    public function guard(string $guard): self
    {
        $this->guard = $guard;

        return $this;
    }

    /** @param list<string> $middleware */
    public function middleware(array $middleware): self
    {
        $this->middleware = $middleware;

        return $this;
    }

    /** @param list<string> $middleware */
    public function authMiddleware(array $middleware): self
    {
        $this->authMiddleware = $middleware;

        return $this;
    }

    public function context(string $context): self
    {
        if (! in_array($context, [self::CONTEXT_TENANT, self::CONTEXT_CENTRAL], true)) {
            throw new RuntimeException("Unknown panel context [{$context}].");
        }

        $this->context = $context;

        return $this;
    }

    /** Resolved lazily - branding is tenant data and must not be cached. */
    public function brandName(Closure $brandName): self
    {
        $this->brandName = $brandName;

        return $this;
    }

    /** @param Closure(): array<string, string> $colors */
    public function colors(Closure $colors): self
    {
        $this->colors = $colors;

        return $this;
    }

    /**
     * The prefix every route in this panel is named with.
     *
     * IT DEFAULTS TO THE PANEL ID AND IS OVERRIDABLE, because two panels both
     * naming a route `resource` would have the second silently overwrite the
     * first - and every generated URL in the first portal would then point into
     * the second. The override exists for a panel that was mounted before there
     * were panels: renaming its routes would break every link that already
     * names them.
     */
    public function routeName(string $prefix): self
    {
        $this->routeName = rtrim($prefix, '.').'.';

        return $this;
    }

    public function getRouteName(): string
    {
        return $this->routeName ?? $this->id.'.';
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getGuard(): string
    {
        return $this->guard;
    }

    public function getContext(): string
    {
        return $this->context;
    }

    public function isCentral(): bool
    {
        return $this->context === self::CONTEXT_CENTRAL;
    }

    /** @return list<string> */
    public function getMiddleware(): array
    {
        return [...$this->middleware, ...$this->authMiddleware];
    }

    /**
     * The acting user, resolved through THIS panel's guard.
     *
     * Never `auth()->user()` or `$request->user()`. Both read the default guard,
     * which returns null under a non-default one and fails open in confusing
     * ways - see the class docblock.
     */
    public function user(): ?Authenticatable
    {
        return Auth::guard($this->guard)->user();
    }

    public function resolveBrandName(): ?string
    {
        return $this->brandName === null ? null : ($this->brandName)();
    }

    /** @return array<string, string> */
    public function resolveColors(): array
    {
        return $this->colors === null ? [] : ($this->colors)();
    }
}
