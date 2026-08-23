# Laravel Admin Panel Research & Inspiration

> Purpose: A reference sheet for studying existing Laravel admin panels and borrowing UI/UX, architecture, CRUD, navigation, form, table, permission, dashboard, and developer-experience ideas when building your own admin-panel framework.

## 1. MoonShine

**What to study**
- Resource-based admin architecture
- CRUD resources
- Form and table builders
- Flexible layouts and navigation
- Theme/customization system
- Multi-panel concepts
- Reusable UI components
- Dashboard widgets
- Permissions and authentication
- Marketplace/extension approach
- Developer experience and code organization

**Official resources**
- Website: https://getmoonshine.app/
- GitHub: https://github.com/moonshine-software/moonshine
- Documentation: https://moonshine-laravel.com/en/docs
- Organization/repositories: https://github.com/moonshine-software
- Multi-panels: https://github.com/moonshine-software/multi-panels
- MoonVibe: https://github.com/moonshine-software/moon-vibe

**Why it is useful to study**

MoonShine is particularly useful for understanding how a modern Laravel admin framework can separate resources, UI, layout, and reusable functionality. Its current project also explores multi-panel administration and AI-assisted generation.

---

## 2. Backpack for Laravel

**What to study**
- CRUD Controller architecture
- CRUD operations
- Fields
- Columns
- Filters
- Buttons/actions
- Relationships
- Search
- Bulk actions
- Custom pages
- Dashboard components
- Bootstrap-based UI architecture
- How to keep generated CRUD code customizable

**Official resources**
- Website: https://backpackforlaravel.com/
- Documentation: https://backpackforlaravel.com/docs
- GitHub: https://github.com/Laravel-Backpack
- Live demo: https://backpackforlaravel.com/products/crud

**Why it is useful to study**

Backpack is valuable if you want your own panel to remain close to normal Laravel MVC development instead of hiding too much behind an abstraction. Its CRUD Controller approach is especially worth studying.

---

## 3. Laravel Nova

**What to study**
- Resource architecture
- Fields
- Filters
- Lenses
- Actions
- Relationships
- Metrics
- Authorization
- Search
- Custom tools
- Cards
- Tabs/panels
- Inertia-based frontend integration
- How Laravel-native functionality can be presented as an admin platform

**Official resources**
- Website: https://nova.laravel.com/
- Documentation: https://nova.laravel.com/docs/
- Releases: https://nova.laravel.com/releases
- GitHub organization: https://github.com/laravel

**Why it is useful to study**

Nova is worth studying for its polished resource-oriented developer experience and tight integration with Laravel. It is also useful as a reference for how a commercial Laravel admin product structures advanced functionality.

---

## 4. Laravel Orchid

**What to study**
- Screen architecture
- Layouts
- Form builders
- Table layouts
- Permission system
- Navigation
- Charts
- Notifications
- Filters
- Command/action patterns
- Dashboard composition
- Separation between data logic and screen presentation

**Official resources**
- Website: https://orchid.software/
- Documentation: https://orchid.software/en/docs/
- Installation: https://orchid.software/en/docs/installation/
- GitHub: https://github.com/orchidsoftware/platform

**Why it is useful to study**

Orchid is particularly useful for studying a screen-based architecture rather than relying entirely on automatic CRUD generation. This can inspire a panel that handles both standard CRUD and highly customized business screens.

---

## 5. LaraAdmin

**What to study**
- Automatic CRUD generation
- Module manager
- Schema management
- Role permissions
- File/upload management
- Workflow concepts
- Generated Models/Controllers/Views
- AdminLTE integration
- Data-management-oriented architecture

**Official resources**
- Website: https://laraadmin.com/
- Documentation: https://laraadmin.com/docs/
- Installation: https://laraadmin.com/docs/1.0/installation
- GitHub: https://github.com/dwijitsolutions/laraadmin

**Why it is useful to study**

LaraAdmin is useful for understanding a generator-first philosophy: create modules and CRUD functionality quickly, then modify the generated Laravel code. The project is older, so use it primarily for architectural and UX ideas rather than copying its current implementation directly.

---

## 6. Voyager

**What to study**
- BREAD / CRUD concept
- Database manager
- Menu builder
- Media manager
- Role and permission management
- Settings management
- Admin UI
- Database-driven administration
- Rapid backend generation

**Official resources**
- GitHub: https://github.com/thedevdojo/voyager
- Website: https://voyager.devdojo.com/

**Why it is useful to study**

Voyager is a good reference for the idea of making common administrative functionality configurable through the panel itself instead of requiring developers to manually code every operation.

---

## 7. Mary UI

**What to study**
- Tailwind-based components
- Livewire integration
- Form components
- Tables
- Modals
- Drawers
- Dropdowns
- Notifications
- Navigation components
- Responsive UI
- Reusable component architecture
- Minimal developer API

**Official resources**
- Website: https://mary-ui.com/
- Documentation: https://mary-ui.com/docs
- GitHub: https://github.com/robsontenorio/mary

**Why it is useful to study**

Mary UI is useful if your own panel is intended to use Laravel + Livewire + Tailwind. Rather than copying a complete admin framework, you can study its component API and build your own higher-level admin abstractions.

---

## 8. WireUI

**What to study**
- Livewire component patterns
- Inputs
- Selects
- Dialogs
- Notifications
- Dropdowns
- Modals
- Date/time controls
- Component APIs
- Validation states
- Reusable UI primitives

**Official resources**
- Website: https://wireui.dev/
- GitHub: https://github.com/wireui/wireui

**Why it is useful to study**

WireUI is more of a UI/component foundation than a complete admin panel. It is useful when designing your own panel because it demonstrates how reusable Livewire components can provide a consistent API across an application.

---

# What I Would Borrow for My Own Admin Panel

Instead of copying one framework, combine the strongest ideas from each.

## 1. Resource Architecture

Study:

- Filament
- Nova
- MoonShine
- Backpack

Possible architecture:

```text
AdminPanel
├── Resources
│   ├── CustomerResource
│   ├── InvoiceResource
│   ├── PaymentResource
│   └── UserResource
│
├── Pages
│   ├── Dashboard
│   ├── Reports
│   └── Settings
│
├── Widgets
│   ├── RevenueWidget
│   └── CustomerStatsWidget
│
└── Components
    ├── DataTable
    ├── Form
    ├── Modal
    └── Notification
```

## 2. Use a Declarative API

A good target is something conceptually similar to:

```php
CustomerResource::make()
    ->label('Customers')
    ->icon('users')
    ->fields([
        Text::make('name')->required(),
        Email::make('email')->required(),
        Select::make('status')
            ->options([
                'active' => 'Active',
                'inactive' => 'Inactive',
            ]),
    ])
    ->columns([
        TextColumn::make('name')->searchable(),
        TextColumn::make('email')->searchable(),
        BadgeColumn::make('status'),
    ]);
```

The important idea is that developers describe **what the admin interface should contain**, rather than manually writing repetitive HTML.

---

# Features Worth Combining

| Feature | Best projects to study |
|---|---|
| Resource architecture | Filament, Nova, MoonShine |
| CRUD generation | Backpack, LaraAdmin, Voyager |
| Screens/pages | Orchid |
| Forms | Filament, Nova, MoonShine, Mary UI |
| Data tables | Filament, Nova, Backpack |
| Filters | Filament, Nova, Backpack |
| Actions | Filament, Nova, Backpack |
| Dashboard widgets | Filament, Nova, Orchid |
| Permissions | Filament, Nova, Orchid, LaraAdmin |
| Navigation | Filament, Orchid, Voyager |
| Theme system | MoonShine, Filament |
| Tailwind components | Filament, Mary UI |
| Livewire components | Filament, Mary UI, WireUI |
| Bootstrap admin UI | Backpack, LaraAdmin |
| Database-driven admin | Voyager, LaraAdmin |
| Multi-panel architecture | MoonShine |
| Extension ecosystem | Filament, MoonShine, Nova |
| Developer API | Filament, Nova, MoonShine |
| Custom business screens | Orchid |
| Rapid CRUD development | Backpack, Filament |

---

# Architecture I Would Consider

If the goal is to build a **new Laravel admin framework**, don't make it only a CRUD generator.

Build it in layers:

```text
Your Admin Framework
│
├── Core
│   ├── Panel
│   ├── Resource
│   ├── Page
│   ├── Widget
│   ├── Action
│   └── Navigation
│
├── Forms
│   ├── TextInput
│   ├── Select
│   ├── DatePicker
│   ├── FileUpload
│   ├── Repeater
│   └── RichEditor
│
├── Tables
│   ├── TextColumn
│   ├── BadgeColumn
│   ├── ImageColumn
│   ├── BooleanColumn
│   ├── Actions
│   ├── Filters
│   └── BulkActions
│
├── UI
│   ├── Modal
│   ├── Drawer
│   ├── Dropdown
│   ├── Notification
│   ├── Tabs
│   └── Cards
│
├── Security
│   ├── Roles
│   ├── Permissions
│   ├── Policies
│   └── Authentication
│
├── Dashboard
│   ├── Stats
│   ├── Charts
│   ├── Tables
│   └── CustomWidgets
│
└── Extensions
    ├── Import
    ├── Export
    ├── Media
    ├── Notifications
    └── AuditLog
```

# Important Design Principle

Don't make developers depend on your framework for everything.

A strong Laravel admin framework should allow:

```text
Automatic CRUD
       ↓
Customize
       ↓
Override
       ↓
Write normal Laravel code
```

rather than:

```text
Framework abstraction
       ↓
Everything must be done its way
```

That is one of the biggest things worth studying when comparing **Filament, Backpack, MoonShine, Nova and Orchid**.

---

# Recommended Research Order

If you're building your own panel, I would study them in this order:

1. **Filament** — resource/form/table architecture
2. **MoonShine** — modern architecture and customization
3. **Backpack** — Laravel/MVC-friendly CRUD architecture
4. **Nova** — polished resource/developer experience
5. **Orchid** — complex custom screens
6. **Mary UI** — Tailwind + Livewire components
7. **WireUI** — reusable Livewire UI primitives
8. **Voyager** — database-driven administration
9. **LaraAdmin** — CRUD/module generation

## Core Goal

Don't build a **Filament clone**.

Build a Laravel admin framework that takes:

**Filament's developer experience + Backpack's simplicity + Nova's polish + Orchid's flexibility + Mary UI's component approach + your own better architecture.**

That gives you a much stronger direction for a panel intended to power systems such as billing, ERP, ISP management, CRM and SaaS applications.
