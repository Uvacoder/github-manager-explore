import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { StateInterface } from './state'
import { Profile } from '@/src/plugins/types/interfaces'

const actions: ActionTree<StateInterface, StoreInterface> = {
  async boot({ commit }) {
    const cookies = window.$cookies
    const profile: Profile = cookies.get('profile')

    if (profile !== null && profile !== undefined) {
      commit('setProfile', profile)
    } else {
      cookies.remove('token', '/')
      commit('setProfile', {})
    }
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
