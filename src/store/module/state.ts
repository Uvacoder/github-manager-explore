import { Profile } from '../../plugins/types/interfaces'

export interface StateInterface {
  url: string
  profile: Profile
  graph: any
  confirm: null
  notify: null
  loading: any
}

const state: StateInterface = {
  url: 'https://api.github.com/graphql',
  profile: {},
  graph: null,
  confirm: null,
  notify: null,
  loading: null
}

export default state
