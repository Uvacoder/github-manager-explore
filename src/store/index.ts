import Vue from 'vue'
import Vuex from 'vuex'
import { StateInterface } from './module/state'
import module from './module/index'

Vue.use(Vuex)

export interface StoreInterface {
  module: StateInterface
}

export default new Vuex.Store({
  modules: {
    module
  },
  strict: !!process.env.DEV
})
