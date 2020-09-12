import { defineComponent, reactive } from '@vue/composition-api'
// import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'

export const Home = defineComponent({
  setup() {
    const menu = reactive([
      {
        color: 'blue white--text',
        icon: 'fas fa-shield-alt',
        name: 'Vulnerability Alerts',
        router: 'vulnerabilityalerts'
      }
    ])
    return () => {
      return (
        <div>
          <v-card>
            <h2 class="text-center">Menu</h2>
            <v-row justify={'center'} align={'center'} class={'mx-0'}>
              {menu.map((e) => {
                return (
                  <buttonMenu
                    color={e.color}
                    name={e.name}
                    router={e.router}
                    icon={e.icon}
                  />
                )
              })}
            </v-row>
          </v-card>
        </div>
      )
    }
  }
})
