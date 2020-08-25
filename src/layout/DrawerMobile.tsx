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
  setup(p, { emit }) {
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
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      )
    }
  }
})
