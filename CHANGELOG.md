# 1.57.0
## Store
- **ADD** CRUD operations on `navigation`, `navigationAdmin` store module.

# 1.56.1
## Components
- **MOD** add `readonly` props to `FBtnMenu` and `FBtnStatus`


# 1.56.0
## Store
- **ADD** allow store extension/customizations

# 1.55.1
## Components
`FDataTable`
- **ADD** `withoutPagination` & `withoutElevation` prop to give the ability to show/hide the pagination or remove box shadow.


# 1.55.0
## Components
`FDataTable`
- **ADD** `item-key` should be a prop. Same for `rows-per-page-items`
- **MOD** `headers` with `reactiveHeaders` to disable sorting when multiple items are selected

`Store`
- **ADD** getters (itemLoading, itemsLoading) for `state.pending.item` and `state.pending.items`

`FSimpleConfirm`
- **ADD** `isLoading` props

# 1.54.1
## Components
`FManageMultiple`
- **ADD** property: `label` to customize label. Default label remain "Manage multiple" for backwards compats

# 1.54.0
## Components
`FBtnStatus`
- **ADD** properties: `idProp`, `labelProp`, `colorProp` to customize data mapping

# 1.53.0
## State machine
`CurrentUser`
- **ADD** setter for current User

# 1.52.0
## State machine
`Pagination`
- **ADD** `rowsPerPageItems` to pagination store module.

# 1.51.0
## Components
`FInfoTooltip`
- **ADD** `v-scope:label` to further customize tooltip markup

# 1.50.2
## Router
`routes`
- **FIX** `router` to avoid `beforeRouteUpdate` be hit twice when using Vue Router.

# 1.50.1
## Components
`FDatePicker`
- **MOD** `use-vuetify` is now defaulted to `true`

# 1.50.0
## Components
`FInfoTooltip`
- **ADD** `color` as props to allow customization

`FTextField`
`FInfoInput`
- **MOD** prop `info` to accept object { label: <tooltip>, color: <color> }

# 1.49.0
## Mixins
`FormatDate`
- **ADD** timezone as param

# 1.48.0
`FExpansionPanel`
- **ADD** named slot `head` to allow title customization. See story Customer Header for usages.


# 1.47.0
## Components
`FSimplerCardList`
- **MOD** Each item in the `items` can override the default of the `value` font size by setting `valueClass` (see Storybook for details)

# 1.46.0
## Components
`FDatePicker`
- **ADD** `info` props to show tooltip on hover over the icon

# 1.45.0
# Components
`FTextField`
- **MOD** `disabled` has straight line (not dotted)

# 1.44.1
# Components
`FSwitch`
- **FIX** `v-model` works :)


# 1.44.0
# Mixin
`FieldMeta`
- **MOD** `readOnlyFields` to `readonlyFields` to be consistent with vuetify text-fields and other inputs https://v15.vuetifyjs.com/en/components/text-fields/

# 1.43.1
# Components
`FSimpleCard`
- **FIX** added `top` to `f-info-tooltip`  The Tooltip now appears above Card again.

# 1.43.0
# Mixin
`FieldMeta`
- **ADD** `validationRules` and `fieldLabels` methods

# 1.42.0
# Mixin
`FieldMeta`
- **ADD** `isFieldEnabled` and `isFieldReadOnly` methods

# 1.41.0
# Components
`FTextField` (**New**)
- **ADD** Wraps `v-text-field` and provides an Info Tooltip (`info=`) and `outline` is thinner. See stories for examples.

`FSwitch` (**New**)
- **ADD** Wraps `v-switch` and provides an Info Tooltip (`info=`). See stories for examples.

`FSwitch` (**New**)
- **ADD** Wraps `v-switch` and provides an Info Tooltip (`info=`). See stories for examples.

`FInfoInput` (**New**)
- **ADD** The core Info Tooltip wrapper for Inputs providing `info=`. See stories for examples.

`FInfoTooltip` (**New**)
- **ADD** Provides a standard molecule for Information tooltips. See stories for examples.

`FSimpleCardList`
- **MOD** Uses `FInfoTooltip`


# 1.40.1
# Components
`FSimpleCardList`
- **FIX** The Tooltip now appears next to the Info icon, instead of appearing at the top of the page.
See story "Multiple Cards" for examples.

# 1.40.0
# Components
`FSimpleCardList`
- **MODIFY** card format renders the same size. See storybook "Card with long title" to see the effect.
- **REMOVED** `text-truncate` from card header. Long titles will now wrap instead of truncate.
This fixes a bug for the `tooltip`.

# 1.39.0
# Components
`FSimpleCardList`
- **ADD** V-Tooltip to display optional information. See story book "Info" for examples.

`FFilterSorter`
- **ADD** Stories are available in parent project's storybook because it now uses the Component Story Format

`FTitleLink`
- **ADD** Stories are available in parent project's storybook because it now uses the Component Story Format

`FMultiSelect`
- **REMOVED** Stories due to component deprecation

# 1.38.0
# Components
`FDatePicker`
- **ADD** `use-vuetify` attribute will use `VDatePicker` internally instead of `Vue-CTK`. This is really important for situations where `Vue-CTK` is not compatible with situations where `VDataTable` and `VAutocomplete` are used at the same time.

# 1.37.2
# Components
`FSearchSimple`
- **ADD** `no-filter` attribute from v-autocomplete vuetify component

# 1.37.1
## Components
`FFilterLabel`
- **FIX** Just use `text-truncate` from Vuetify not custom css

# 1.37.0
## Components
`FAutocomplete`
- **FIX** with `value-fetch` the fetch will not take place if `value` is empty

`FSelect`
- **ADD** New component that wraps `VSelect` with some default visuals and behaviors for `multiple` selection.

`FMultiSelect`
- **DEPRECATION** This component is deprecated in favor of using `<f-select multiple/>`


# 1.36.0

## Components
`FAutocomplete`
- **ADD** New component that accomplishes the following
  1. Provides FreshinUp standard visual defaults for Autocomplete
  2. Provides internally managed state retrieved from the HTTP API on search changes
  3. Provides ability to set a reactive externally managed `value` (highly useful when the application state changes and the user can make adjustments)
  4. Provides passthrough same functionality and usage of `v-autocomplete`

- **MOD** Deprecated and Removed
  - `FSaveReport` Removed. Use `@freshinup/report-ui/src/components/SaveReport`

## Storybook

- **MOD** approved the following component stories by upgrading them to new syntax
  - `FSearchSimple`
  - `FNotificationMenu`
  - `FMultiSimple`
  - `FDatePicker`
  - `FClearBtn`
  - `FChipGroupBtn`
  - `FChipGroup`
  - `FChip`
  - `FBtnStatus`

- **MOD** Mark the following components as "Use With Caution" indicating they are not intended for wide usage. However, this is just due to us needing to reevaluate these components
  - `FImageUpload`
  - `FImageUploader`
  - `FManageMultiple`
  - `FDateRangePicker`
  - `FNavTitle`
  - `FExportData`
  - `FDoughnut`
  - `FDataVisibility`

- **FIX** Layout stories to use a single instance of Axios and Mock Axios Adapter

## Testing
- Temporarily adding a Test Until for Faking the HTTP API users list (i.e. `apiFilterList`)

# 1.35.0

## State machine
`Store/makeRestStore`
- **ADD** filters getters to avoid the use of mapState in components
- **ADD** method `unsetFilters` to remove only specified filters
`errorHandlers` & `authHandlers`
- **MOD** make `onNonRetryError` fault tolerant when `error.response` is not defined


# 1.34.0

## Components
`FSearchSimple`
- **ADD** Attribute `disable-mount-fetching` will prevent the fetching before component mounts as was the standard behavior
- **FIX** When `fetch-with-id-key` is `true`, the property `value` set to null must clear the existing search


# 1.33.0

## Components
`FSearchSimple`
- **ADD** Uses `$http` for axios referencing
- **ADD** Attribute `fetch-with-id-key` enables that when prop `value` changes the fetch occurs using the `resultsIdKey` as the `filter` parameter to the provided `url`

## Testing
- **FIX** how `axios` and `MockAdapter` were wired in especially for `FSearchSimple`

# 1.32.1
## State Machine
`currentUser`
- **MOD** `logout` action method should redirect to absolute path of `/admin`

# 1.32.0
## State Machine
`makeRestStore`
- **ADD** `patchFilters` action is available. This enables us to simply update some of the key-values without replacing the whole object each time; henc `PATCH`

# 1.31.0

## Components
`FDatePicker`
- **ADD** Introducing a central component for Selecting Dates. Currently this only supports one date selection but the intent is for this to have the property `range`. Thus it would replace the `FDateRangePicker`

`FDataTable`
- **MOD** Uses default styling for "No records" / empty lists
- **ADD** Story for Empty Lists
- **ADD** Story for FDatePicker being used
- **MOD** Stories upgraded to new format for consumption in other projects

## Stories
- **ADD** Via uses of the package name reference instead of relative, we can now include Core UI Stories into client projects

# 1.30.0

## Layouts
- **ADD** `admin` layouts have settings via state machine for the Loading Bar color and height (see below)

`State Machine`
```
 page: {
   loadingHeight: 45,
   loadingColor: 'secondary'
 }
```

### Note
Because this changes the layout you may need to update snapshots in other projects when you use this version or higher

## State Machine
`makeRestStore` util
- **FIX** The getter `itemAlways` is similar to `item` however `itemAlways` will always return an object


# 1.29.0

- **ADD** new `mapModelFields` utility for building computed properties based of the default model property (input by default)

Changes here will allow for easier development of stateless components and the ability to do v-model against complex bound values.
These utilities will dynamically create new computed properties based of a string of keys provided, much like vuex `mapState`, `mapGetters` and such using a similar interface:

This snippet will create two computed fields `id` and `name`, with both getters and setters. Setters will auto trigger a model change event (default `input`). These computeds can be v-model bound to any child component prop.
``` javascript
import mapModelFields from '@/utils/mapModelFields'

ComponentA:
... {
  props: {
    value: {
      type: Object, default: () => ({})
    }
  },
  computed: {
    ...mapModelFields(['id', 'name' ...])
  }
}

// this component can now be v-model bound like:

<component-a
  v-model="someParentModel"
/>

// any change inside ComponentA that changes any value of someParentField, will trigger an 'input' event
```

Vue expects for v-model to work that the prop to bind must be of name: `value` and the triggered event of name `input`, to change these to match yout naming conventions read: https://vuejs.org/v2/api/#model and specify this same configuration as a second to `mapModelFields` argument such as:

```javascript
import mapModelFields from '@/utils/mapModelFields'

ComponentA:
... {
  model: {
    prop: 'deal',
    event: 'change'
  },
  props: {
    value: {
      type: Object, default: () => ({})
    }
  },
  computed: {
    ...mapModelFields(['id', 'name' ...], { prop: 'deal', event: 'change' })
  }
}

// this component can now be v-model bound like:

<component-a
  v-model="someParentField"
/>

// any change inside ComponentA that changes any value of someParentField, will try and make a call to a method "emitChange" passing the current value of the field as a parameter
```

**Note:** The generated setter expects a method to exist which will actually trigger the model event, the method should have the following general template:

``` javascript
{
  ...
  methods: {
    ...
    emitChange(val) {
      this.$emit('input', { ...this.value, ...val })
    }
  }
}
```

Using the spread operator in the `emitChange` method above will trigger the event with a modified copy of the bound value.

# 1.28.1

## Components

`FCalendarEventsList`
- **FIX** dispatched events are simply `@edit` and `@delete`
- **FIX** removed and replace `activity`

# 1.28.0

## Components
Added two new components

`FCalendarEvent`
- **ADD** New component. See Storybook for usage

`FExpansionPanel`
- **ADD** New component. See Storybook for usage

`FResponsiveCard`
- **MOD** Using the new `FExpansionPanel` for the expansion panel and defaults to open now

## Layouts
- **FIX** The progress bar now displays for `admin-edit` and `admin-list`

# 1.27.2
- **FIX** errorHandler::errorInterceptor not passing arguments error & context

# 1.27.1
## Components
`FUserAvatar`
- **FIX** Initials font size scales with the `size` value (half)
- **MOD** Reduced template logic
- **FIX** Background color for no user and image loading. Always use a color

# 1.27.0
## Components
`FUserAvatar`
- **ADD** introducing `FUserAvatar` please see Stories and Tests for examples and details

`FSearchSimple`
- **FIX** error logging in the tests due to an unhandled situation where the response never has `data.data`

## Layout
- **MOD** `admin`,`admin-edit`, `admin-list` all implement the new FUserAvatar

# 1.26.2
- **FIX** updated `pdfExport` function in the `exportData.js`
- **FIX** updated `exportData.test.js` tests

# 1.26.1
## Permission Util
- **FIX** `permissionsHelper` methods (e.g. `readonlyFields`) is fault tolerant to state being fully populated (see tests for details)

# 1.26.0
- **ADD** FFilterLabel Component

# 1.25.0
## Github Issue Template
- **MOD** Adding _Blocked By_ and I/O sections along with updating document standards links

## Layouts
- **MOD** Reducing the amount of duplicate code, but more importantly `admin` is the basis for `admin-edit` and `admin-list`.
- **ADD** `admin` now has a `message` slot and thus the message handler is moved out from the default slot.
- **MOD** Further reducing code we're leveraging the updates for Vue testing from

# 1.24.0
## Layout and State
- **ADD** via `navigationAdmin { footerColor }` one of the theme colors can be set on Admin Layouts

## Components
`@freshinup/core-ui/src/components/FFooter`
- **ADD** `color` property colors added (see Stories)

# 1.23.0
- **ADD** FSimpleCardList Component

# 1.22.1
- **FIX** updated `exportData.js` and moved from `store/modules` to `store/utils`
- **FIX** updated `exportData.test.js` tests

# 1.22.0
- **ADD** Doughnut chart component
- **ADD** withLabels and withPercentage option

# 1.21.1
- **FIX** user permissions helpers

# 1.21.0
Introduces Layouts `@freshinup/core-ui/src/layouts/*`
Introduces Provider `@freshinup/core-ui/src/Provider`

## Layouts
- **ADD** layout `admin-edit`
- **ADD** layout `admin-list`
- **ADD** layout `admin`

## Components
New Components intended for Layouts
- **ADD** `FFooter`
- **ADD** `FNavigationDrawerList`

**Warning**
The following components are `beta` components. Do not use them directly. They are there for the layouts and may change without a semver `major` update

- `FNotificationMenu`
- `FUserMenu`

## Provider and App
- **FIX** App no longer automatically includes `exportData` as a module
- **MOD** Improved test coverage for App store module creation. It is not stricly enforcing which modules are defaulted. Instead please use the Core Provider
- **MOD** Forces all store modules to be `namespaced`


# 1.20.1
- **FIX** router error in `App.js`

# 1.20.0
- **FIX** Vuex Modules not loading causing new projects not to update. This was a direct result of [VAPI changing their default](https://github.com/christianmalek/vuex-rest-api/pull/99). This was throwing errors such as the following

```
console.error ../vue-cli-plugin-freshinup-ui/utils/testing/setup.js:51
   [vuex] unknown action type: users/setFilters
console.error ../vue-cli-plugin-freshinup-ui/utils/testing/setup.js:51
   [vuex] duplicate getter key: item
```

## Build
- **MOD** Using the `Vue Cli Plugin FreshinUp UI` we've locked the build dependencies

## Test
- **FIX** `FSearchSimple` Tests are faster

## Stories
- **MOD** `FSearchSimple` Stories are using the Permanent Link feature for the storeis

# 1.19.2
- **FIX** exportData module to the store

# 1.19.1
- **Fix** exportData module action

# 1.19.0
- **ADDED** FBtnGroup component and story

# 1.18.0
- **ADDED** FSaveReport `hideModifiers` property to save a report without modifiers but just name

# 1.17.0
- **ADDED** FExportData Component with storybook

# 1.16.0
- **ADDED** `ExportData` Component

# 1.15.0
- **ADDED** helper functions for permission-related store modules. `enabledFields`, `readonlyFields`, `validationRules` and `labels` should be used as getters on the module. They rely on a structure that must be respected on the API. `validationRules` also translates the Laravel validation syntax into VeeValidate syntax.

# 1.14.0
- **ADDED** Programatically exclude pages via `excludePage` option to `App` constructor, which accepts a method. If the method returns true the page will not be available to the UI router.

# 1.13.0
- **FIX** FFilterSorter using our CSS naming standards
- **ADDED** FFilterSorter has `flatContainer` mode now via the property setting of `flat-container`

# 1.12.1
- **FIX** modules pages overriding

# 1.12.0
- **ADDED** registrationType to store

# 1.11.0
- **ADDED** FOpenBtn component and story

# 1.10.0
- **ADDED** FDateRangePicker component
- **ADDED** FClearButton component
- **ADDED** FilterSorter component

# 1.9.0
- **ADDED** Validation mixin added

# 1.8.0
- **ADDED** FImageUploader and FImageUpload component

# 1.7.1
- **FIX** Dependencies are appropriately defined in `dependencies` and not in `devDependencies`.

# 1.7.0

## Introducing Core Framework
The App instantiation is now a part of Core UI; moved from Fresh BUS Forms and updated.

It now allows easier registration of other UI "Modules" (FreshinUp term) by giving the `modules` property the corresponding Provider from each Module.

> **THIS MEANS the Fresh BUS Forms App is deprecated.**

Please see the tests for usage.

### Providers
`Providers` allow
Note a good example of a Provider is the following which is from Fresh BUS

```javascript
import FreshBusProvider from 'fresh-bus/Provider'
import AppComponent from 'fresh-bus/App'
import ClientProvider from './Provider'
import App from '@freshinup/core-ui/src/App'
import theme from './theme'
import NotFoundPage from 'fresh-bus/pages/404.vue'
import axios from 'axios'
import Vue from 'vue'
import { install as installAuthRouter } from 'fresh-bus/router/auth'

const initialState = {
  loginSuccessRedirectPath: '/admin/dashboard',
  ...window.__INITIAL_STATE__
}

const appInstance = new App({
  modules: [
    FreshBusProvider,
    ClientProvider
  ],
  initialState,
  theme,
  redirectOnNotFound: false,
  NotFoundPage,
  axios,
  Vue,
  middleware: require.context('../../vendor/freshinup/fresh-bus-forms/resources/assets/js/middleware/', true, /\.js$/)
})
installAuthRouter(Vue)
appInstance.boot(AppComponent)
appInstance.addRoutes([{ path: '/', redirect: '/admin' }, { path: '', redirect: '/admin' }])

// We may consider only exposing the app when a certain key is set (true EXPOSE_APP=true)
window.__APP__ = appInstance
export default appInstance
```
# 1.6.0
- **ADDED** `FSaveModal` component
- `FBtnStatus` casts its value to `String`

# 1.5.0
Test Automation improvements and Upgrades of Yarn lock
- **ADDED** Gated Test Automation with CircleCI
- **MOD** Increased code coverage
- **MOD** Locked Babel versions
- **FIX** Snapshots

# 1.4.0
- **ADDED** `items` prop to `FBtnStatus`
- `FBtnStatus` casts its value to `String`

# 1.3.0
- **ADDED** `header-inner-{value}` slot to `FDataTable` to show a different content when multiple items are selected
- **FIXED** event sent by `FManageMultiple` when there's only one item

# 1.2.0
- **ADDED** Manage Multiple component and story
- **FIXED** snapshots and lint errors

# 1.1.0
- **ADDED** Data Visibility Component and story
- **FIXED** StoryBook Errors

# 1.0.0
Copied Core UI library from FreshBUS Forms project
