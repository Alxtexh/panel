import { registerFieldControl } from '../../composables/useFieldControls'
import { registerOptionPreview } from '../../composables/useOptionPreviews'
import PkColourModePreview from '../Document/PkColourModePreview.vue'
import PkVoucherCodeBoxPreview from '../Document/PkVoucherCodeBoxPreview.vue'
import PkCheckboxList from './PkCheckboxList.vue'
import PkCodeInput from './PkCodeInput.vue'
import PkColourPicker from './PkColourPicker.vue'
import PkMarkdownInput from './PkMarkdownInput.vue'
import PkRadioGroup from './PkRadioGroup.vue'
import PkSlider from './PkSlider.vue'
import PkSwatchPreview from './PkSwatchPreview.vue'
import PkTagsInput from './PkTagsInput.vue'
import PkVisualSelect from './PkVisualSelect.vue'

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
 * CALLED AUTOMATICALLY when `@alxtexh-enterprise/panel` is imported; exported so a test can
 * re-register after clearing the map.
 */
export function registerBuiltInFieldControls(): void {
    registerFieldControl('radio', PkRadioGroup)
    registerFieldControl('checkboxlist', PkCheckboxList)
    registerFieldControl('tags', PkTagsInput)
    registerFieldControl('colour', PkColourPicker)
    registerFieldControl('slider', PkSlider)
    registerFieldControl('visual-select', PkVisualSelect)
    /*
     * ROADMAP 4.5. Markdown stores the SOURCE (diffable, re-targetable)
     * rather than a rendering; code keeps whitespace exactly and makes Tab
     * indent. Both are controls with real behaviour, so both come through
     * the registry like everything else here.
     */
    registerFieldControl('markdown', PkMarkdownInput)
    registerFieldControl('code', PkCodeInput)

    /*
     * The option renderers, which are a second registry one level down: this one
     * says what draws a single option INSIDE a visual select. `swatch` is the
     * one that ships, for the same reason the five controls above go through the
     * registry rather than a switch - an extension point the package itself does
     * not use is one nobody has exercised.
     */
    registerOptionPreview('swatch', PkSwatchPreview)

    /*
     * The document designer's two pickers. `voucher-code-box` draws each framing
     * by rendering the SAME component the voucher prints - a picker that drew
     * its own approximation could be wrong, and the way you find that out is a
     * batch of two hundred vouchers.
     */
    registerOptionPreview('voucher-code-box', PkVoucherCodeBoxPreview)
    registerOptionPreview('document-colour-mode', PkColourModePreview)
}
