import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import theme from '@freshinup/core-ui/src/theme'
import '@freshinup/core-ui/src/styles/stylus/main.styl'
import PageStoryInstances from '../tests/PageStoryInstances'

const { Vue, axios } = PageStoryInstances

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: 'fa',
  theme
})

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(Vuex)
