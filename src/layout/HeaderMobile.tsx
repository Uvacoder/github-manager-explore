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
  setup(p, { emit, root }) {
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
          attrs={{
            absolute: true,
            dark: true,
            app: true,
            'clipped-left': true
          }}
          color={'primary'}
        >
          <v-app-bar-nav-icon
            onClick={() => {
              menu.value = !menu.value
            }}
          />
          <v-toolbar-title>{p.headertitle}</v-toolbar-title>
          <v-spacer></v-spacer>
          {root.cProfile.login !== undefined ? (
            <v-btn
              icon
              onClick={() => {
                logout()
              }}
            >
              <v-icon>fas fa-sign-out-alt</v-icon>
            </v-btn>
          ) : (
            <v-btn icon to={'/login'}>
              <v-icon>fas fa-sign-in-alt</v-icon>
            </v-btn>
          )}
        </v-app-bar>
      )
    }
  }
})
