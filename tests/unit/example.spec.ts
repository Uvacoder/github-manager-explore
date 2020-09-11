import CompositionApi from '@vue/composition-api'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import { LoadingComponent } from '../../src/components/Loading'
import { DialogConfirm } from '../../src/components/DialogConfirm'

Vue.use(CompositionApi)
Vue.use(Vuetify)

describe('Test Unit', () => {
  it('Render Confirm Component and Open', () => {
    const wrapper = mount(DialogConfirm)
    wrapper.vm.confirm('Title Here', 'Subtitle Here', 'green')
    expect(wrapper.vm.state.title).toBe('Title Here')
    expect(wrapper.vm.state.subtitle).toBe('Subtitle Here')
    expect(wrapper.vm.state.color).toBe('headline green')
  })
})
