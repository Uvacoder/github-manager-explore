import { defineComponent, computed } from '@vue/composition-api'

export const HeaderMobile = defineComponent({
  props: {
    headertitle: {
      type: String,
      default: 'null'
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  setup(p, { emit }) {
    function update(status: boolean) {
      emit('update', status)
    }

    function logout() {
      emit('logout')
    }

    const menu = computed({
      get() {
        return p.left
      },
      set(status: boolean) {
        update(status)
      }
    })

    return () => {
      return (
        <v-app-bar
          attrs={{ dark: true, app: true, 'clipped-left': true }}
          color={'primary'}
        >
          <v-app-bar-nav-icon
            onClick={() => {
              menu.value = !menu.value
            }}
          ></v-app-bar-nav-icon>
          <v-toolbar-title>{p.headertitle}</v-toolbar-title>
        </v-app-bar>
      )
    }
  }
})
