import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { StateInterface } from './state'
import { Profile } from '@/src/plugins/types/interfaces'

const actions: ActionTree<StateInterface, StoreInterface> = {
  async boot({ commit }) {
    const cookies = window.$cookies // otherwise we're on client
    const profile: Profile = cookies.get('profile')
    commit('setProfile', profile)
  },
  setProfile({ commit }, payload) {
    commit('setProfile', payload)
  },
  setNotify({ commit }, payload) {
    commit('setNotify', payload)
  },
  setConfirmDialog({ commit }, payload) {
    commit('setConfirmDialog', payload)
  }
}

export default actions
