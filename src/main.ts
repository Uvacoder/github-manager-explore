import Vue from 'vue'
import { App } from './App'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api'
import './plugins/components'
import Mixin from './views/Mixin'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.mixin(Mixin)

moment.locale('pt-BR')
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
