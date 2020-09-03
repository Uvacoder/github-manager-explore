import { defineComponent, computed } from '@vue/composition-api'

export const DrawerMobile = defineComponent({
  props: {
    width: {
      type: Number,
      default: 200
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
        <v-navigation-drawer
          color={'primary'}
          v-model={menu.value}
          attrs={{ dark: true, app: true, clipped: true }}
        >
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar>
                <img src={root.cProfile.avatarUrl} />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{root.cProfile.name}</v-list-item-title>
                <v-list-item-subtitle>
                  {root.cProfile.status?.message}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content
                onClick={() => {
                  console.log('teste')
                }}
              >
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      )
    }
  }
})
