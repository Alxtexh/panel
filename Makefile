# PanelKit — run everything from the monorepo root.
#
# artisan lives in apps/playground, npm lives in three places. Rather than
# remember which directory each command belongs to, use these.

PLAYGROUND := apps/playground
ARTISAN    := cd $(PLAYGROUND) && php artisan

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@grep -hE '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

.PHONY: dev
dev: ## Start the playground (serve + vite) on http://localhost:8000
	@$(ARTISAN) dev

.PHONY: seed
seed: ## Seed demo data. Override scale: make seed SCALE=medium
	@$(ARTISAN) panel:seed-demo --scale=$(or $(SCALE),large) --fresh

.PHONY: migrate
migrate: ## Run migrations
	@$(ARTISAN) migrate

.PHONY: fresh
fresh: ## Drop everything, re-migrate, re-seed
	@$(ARTISAN) migrate:fresh
	@$(MAKE) seed

.PHONY: test
test: ## Run the playground test suite
	@$(ARTISAN) test

.PHONY: tinker
tinker: ## Open a REPL against the playground
	@$(ARTISAN) tinker

.PHONY: counts
counts: ## Print seeded row counts
	@$(ARTISAN) tinker --execute="\
		foreach (['tenants','plans','routers','clients','client_sessions'] as \$$t) \
			printf('%-18s %s'.PHP_EOL, \$$t, number_format(DB::table(\$$t)->count()));"

.PHONY: build
build: ## Production asset build
	@cd $(PLAYGROUND) && npm run build

.PHONY: install
install: ## Install PHP and JS dependencies
	@cd $(PLAYGROUND) && composer install && npm install
