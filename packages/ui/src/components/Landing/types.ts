/**
 * The shape of one landing section, as stored and as rendered.
 *
 * ONE TYPE SERVES BOTH SIDES ON PURPOSE. A section is authored in the panel as a
 * builder block and rendered here as a component; if the two carried separate
 * shapes they would drift, and the symptom would be a section that saves
 * perfectly and renders empty. `type` selects the component, `data` is that
 * component's props, unvalidated here because the PHP block definition is what
 * decides which fields a block has.
 */
export interface LandingSection {
    type: string
    data: Record<string, unknown>
}

/** An item with an icon-ish label, used by several sections. */
export interface LandingItem {
    title?: string
    body?: string
    icon?: string
}
