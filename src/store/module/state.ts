import { User } from '../../plugins/types/interfaces'

export interface StateInterface {
  url: string
  user: User
  graph: any
  confirm: null
  notify: null
}

const state: StateInterface = {
  url: 'https://api.github.com/graphql',
  user: {},
  graph: null,
  confirm: null,
  notify: null
}

export default state
