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
          <v-tooltip
            top
            scopedSlots={{
              activator: ({ on }) => {
                return (
                  <v-btn
                    {...{ on }}
                    icon
                    href={'https://github.com/joaomede/github-manager-explore'}
                    target={'_blank'}
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>
                )
              }
            }}
          >
            <span>GitHub Project</span>
          </v-tooltip>

          {root.cProfile.login !== undefined ? (
            <v-tooltip
              top
              scopedSlots={{
                activator: ({ on }) => {
                  return (
                    <v-btn
                      {...{ on }}
                      icon
                      onClick={() => {
                        logout()
                      }}
                    >
                      <v-icon>fas fa-sign-out-alt</v-icon>
                    </v-btn>
                  )
                }
              }}
            >
              <span>Logout</span>
            </v-tooltip>
          ) : (
            <v-tooltip
              top
              scopedSlots={{
                activator: ({ on }) => {
                  return (
                    <v-btn {...{ on }} icon to={'/login'}>
                      <v-icon>fas fa-sign-in-alt</v-icon>
                    </v-btn>
                  )
                }
              }}
            >
              <span>Logout</span>
            </v-tooltip>
          )}
        </v-app-bar>
      )
    }
  }
})
