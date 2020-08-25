import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { StateInterface } from './state'
import { User } from '@/src/plugins/types/interfaces'

const actions: ActionTree<StateInterface, StoreInterface> = {
  async boot({ commit }) {
    // const cookies = window.$cookies // otherwise we're on client
    // const user: User = cookies.get('user')
    // try {
    //   // await Chain(`${state.url}api/v2`, {
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //     ...user.headers?.headers,
    //   //   },
    //   // }).query({
    //   //   checkin: [
    //   //     { nothing: '' },
    //   //     {
    //   //       ok: true,
    //   //     },
    //   //   ],
    //   // })
    //   if (user.isAdmin !== null && user.isAdmin !== undefined) {
    //     // Admin ou Cliente
    //     commit('setUser', {
    //       id: user.id,
    //       nome: user.nome,
    //       email: user.email,
    //       headers: user.headers,
    //       isAdmin: user.isAdmin
    //     })
    //     commit('setClientCreate')
    //     // se for Cliente, carrega contrato
    //     if (user.isAdmin === false) {
    //       try {
    //         // const { getOneContrato } = await Chain(`${state.url}api/v2`, {
    //         //   headers: {
    //         //     'Content-Type': 'application/json',
    //         //     ...user.headers?.headers,
    //         //   },
    //         // }).query({
    //         //   getOneContrato: [
    //         //     {
    //         //       nothing: '',
    //         //     },
    //         //     {},
    //         //   ],
    //         // })
    //         // if (getOneContrato?.error) {
    //         //   commit('setContratoVencido', true)
    //         //   commit('setContrato', getOneContrato.contrato)
    //         // } else {
    //         //   commit('setContrato', getOneContrato?.contrato)
    //         // }
    //       } catch (error) {
    //         console.log(error.message)
    //       }
    //     }
    //   } else {
    //     // Colaborador
    //     commit('setUser', {
    //       id: user.id,
    //       nome: user.nome,
    //       username: user.username,
    //       email: user.email,
    //       headers: user.headers,
    //       isAdmin: null,
    //       contratoId: user.contratoIdFk,
    //       eventoId: user.eventoIdFk
    //     })
    //     commit('setClientCreate')
    //     await this.dispatch('setGrupoUsuarios') // se for colaborador, define permissoes
    //   }
    // } catch (error) {
    //   cookies.remove('user', '/')
    //   commit('setUser', {
    //     id: null,
    //     nome: 'Usuário Deslogado',
    //     email: null,
    //     headers: { headers: { authorization: '' } },
    //     isAdmin: false,
    //     contratoId: null
    //   })
    //   commit('setGrupoUsuarios', null) // se deslogado ou não for usuário, define permissoes null
    //   commit('createCleanClient')
    // }
  },
  setNotify({ commit }, payload) {
    commit('setNotify', payload)
  },
  setConfirmDialog({ commit }, payload) {
    commit('setConfirmDialog', payload)
  }
}

export default actions
