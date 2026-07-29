import { registerFieldControl } from '../../composables/useFieldControls'
import PkCheckboxList from './PkCheckboxList.vue'
import PkColourPicker from './PkColourPicker.vue'
import PkRadioGroup from './PkRadioGroup.vue'
import PkSlider from './PkSlider.vue'
import PkTagsInput from './PkTagsInput.vue'

/**
 * The field types this package ships THROUGH the registry rather than inside the
 * switch.
 *
 * WHY SOME AND NOT ALL. `text`, `select`, `toggle` and the other primitives
 * share one wrapper - label, error, help text - and splitting them into
 * twenty files would trade a readable switch for twenty copies of the same
 * markup. Everything here is a control with real behaviour of its own: a token
 * input, a colour swatch, a range with a readout. Those were always going to be
 * components, so they go through the same door an application's own field would.
 *
 * THAT IS THE POINT OF DOING IT THIS WAY. If the package's own fields did not
 * use the registry, the registry would be a code path nobody exercises - and the
 * first person to write a custom field would discover it does not work. These
 * five are the proof that it does.
 *
 * CALLED AUTOMATICALLY when `@panelkit/ui` is imported; exported so a test can
 * re-register after clearing the map.
 */
export function registerBuiltInFieldControls(): void {
    registerFieldControl('radio', PkRadioGroup)
    registerFieldControl('checkboxlist', PkCheckboxList)
    registerFieldControl('tags', PkTagsInput)
    registerFieldControl('colour', PkColourPicker)
    registerFieldControl('slider', PkSlider)
}
