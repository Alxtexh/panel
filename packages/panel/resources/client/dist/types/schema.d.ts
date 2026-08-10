/**
 * The schema envelope.
 *
 * Spec §5: "This JSON is the contract between PHP and Vue. Define it first,
 * freeze it, version it. Every other part of the system is downstream of this."
 *
 * Only the envelope exists in Phase 0. The resource schema body is defined in
 * Phase 4, once three hardcoded screens have shown what it actually needs to
 * carry. Defining the body now would be guessing.
 *
 * `v` and `kind` are here from the start for the reason the spec gives - a
 * frozen contract needs a version to evolve - and they are what will let a
 * second schema shape (landing-page blocks, deferred past Phase 9) be added
 * later without breaking consumers that only understand `kind: 'resource'`.
 */
export interface SchemaEnvelope<TBody = unknown> {
    /** Contract version. Bumped only on a breaking change to the body shape. */
    v: 1;
    /** Discriminator. `resource` is the only shape in v1. */
    kind: 'resource';
    /** Stable identifier, e.g. `clients`. Unique within a panel. */
    key: string;
    body: TBody;
}
