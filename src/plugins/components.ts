import Vue from 'vue'
import { Notify } from '../components/Notify'
import VueCookies from 'vue-cookies'
import { HeaderMobile } from '../layout/HeaderMobile'
import { DrawerMobile } from '../layout/DrawerMobile'
import { Footer } from '../layout/Footer'
import { DialogConfirm } from '../components/DialogConfirm'

Vue.use(VueCookies)
Vue.component('NotifyComponent', Notify)
Vue.component('HeaderMobile', HeaderMobile)
Vue.component('DrawerMobile', DrawerMobile)
Vue.component('FooterLayout', Footer)

Vue.component('DialogConfirm', DialogConfirm)
