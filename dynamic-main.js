/* global AutoForm */
// the following imports are minimal required in order to preserve functionality
// with themes and extensions that require the AutoForm API at startup time
import './utility.js'
import './form-preserve.js'
import './autoform-hooks.js'
import './autoform-formdata.js'
import './autoform-arrays.js'
import './autoform.js'
import './autoform-helpers.js'
import './autoform-validation.js'
import './autoform-inputs.js'
import './autoform-api.js'

let initialized = false

AutoForm.initialize = async function () {
  if (!initialized) {
    await init()

    initialized = true
  }

  return initialized
}

function init () {
  return Promise.all([
    // form types
    import('./formTypes/insert.js'),
    import('./formTypes/update.js'),
    import('./formTypes/update-pushArray.js'),
    import('./formTypes/method.js'),
    import('./formTypes/method-update.js'),
    import('./formTypes/normal.js'),
    import('./formTypes/readonly.js'),
    import('./formTypes/disabled.js'),
    // input types
    import('./inputTypes/value-converters.js'),
    import('./inputTypes/boolean-checkbox/boolean-checkbox.html'),
    import('./inputTypes/boolean-checkbox/boolean-checkbox.js'),
    import('./inputTypes/boolean-radios/boolean-radios.html'),
    import('./inputTypes/boolean-radios/boolean-radios.js'),
    import('./inputTypes/boolean-select/boolean-select.html'),
    import('./inputTypes/boolean-select/boolean-select.js'),
    import('./inputTypes/button/button.html'),
    import('./inputTypes/button/button.js'),
    import('./inputTypes/color/color.html'),
    import('./inputTypes/color/color.js'),
    import('./inputTypes/contenteditable/contenteditable.html'),
    import('./inputTypes/contenteditable/contenteditable.js'),
    import('./inputTypes/date/date.html'),
    import('./inputTypes/date/date.js'),
    import('./inputTypes/datetime/datetime.html'),
    import('./inputTypes/datetime/datetime.js'),
    import('./inputTypes/datetime-local/datetime-local.html'),
    import('./inputTypes/datetime-local/datetime-local.js'),
    import('./inputTypes/email/email.html'),
    import('./inputTypes/email/email.js'),
    import('./inputTypes/file/file.html'),
    import('./inputTypes/file/file.js'),
    import('./inputTypes/hidden/hidden.html'),
    import('./inputTypes/hidden/hidden.js'),
    import('./inputTypes/image/image.html'),
    import('./inputTypes/image/image.js'),
    import('./inputTypes/month/month.html'),
    import('./inputTypes/month/month.js'),
    import('./inputTypes/number/number.html'),
    import('./inputTypes/number/number.js'),
    import('./inputTypes/password/password.html'),
    import('./inputTypes/password/password.js'),
    import('./inputTypes/radio/radio.html'),
    import('./inputTypes/radio/radio.js'),
    import('./inputTypes/range/range.html'),
    import('./inputTypes/range/range.js'),
    import('./inputTypes/reset/reset.html'),
    import('./inputTypes/reset/reset.js'),
    import('./inputTypes/search/search.html'),
    import('./inputTypes/search/search.js'),
    import('./inputTypes/select/select.html'),
    import('./inputTypes/select/select.js'),
    import('./inputTypes/select-checkbox/select-checkbox.html'),
    import('./inputTypes/select-checkbox/select-checkbox.js'),
    import('./inputTypes/select-checkbox-inline/select-checkbox-inline.html'),
    import('./inputTypes/select-checkbox-inline/select-checkbox-inline.js'),
    import('./inputTypes/select-multiple/select-multiple.html'),
    import('./inputTypes/select-multiple/select-multiple.js'),
    import('./inputTypes/select-radio/select-radio.html'),
    import('./inputTypes/select-radio/select-radio.js'),
    import('./inputTypes/select-radio-inline/select-radio-inline.html'),
    import('./inputTypes/select-radio-inline/select-radio-inline.js'),
    import('./inputTypes/submit/submit.html'),
    import('./inputTypes/submit/submit.js'),
    import('./inputTypes/tel/tel.html'),
    import('./inputTypes/tel/tel.js'),
    import('./inputTypes/text/text.html'),
    import('./inputTypes/text/text.js'),
    import('./inputTypes/textarea/textarea.html'),
    import('./inputTypes/textarea/textarea.js'),
    import('./inputTypes/time/time.html'),
    import('./inputTypes/time/time.js'),
    import('./inputTypes/url/url.html'),
    import('./inputTypes/url/url.js'),
    import('./inputTypes/week/week.html'),
    import('./inputTypes/week/week.js'),
    // components that render a form
    import('./components/autoForm/autoForm.html'),
    import('./components/autoForm/autoForm.js'),
    import('./components/quickForm/quickForm.html'),
    import('./components/quickForm/quickForm.js'),
    // components that render controls within a form
    import('./components/afArrayField/afArrayField.html'),
    import('./components/afArrayField/afArrayField.js'),
    import('./components/afEachArrayItem/afEachArrayItem.html'),
    import('./components/afEachArrayItem/afEachArrayItem.js'),
    import('./components/afFieldInput/afFieldInput.html'),
    import('./components/afFieldInput/afFieldInput.js'),
    import('./components/afFormGroup/afFormGroup.html'),
    import('./components/afFormGroup/afFormGroup.js'),
    import('./components/afObjectField/afObjectField.html'),
    import('./components/afObjectField/afObjectField.js'),
    import('./components/afQuickField/afQuickField.html'),
    import('./components/afQuickField/afQuickField.js'),
    import('./components/afQuickFields/afQuickFields.html'),
    import('./components/afQuickFields/afQuickFields.js'),
    // event handling
    import('./autoform-events.js')
  ])
}
