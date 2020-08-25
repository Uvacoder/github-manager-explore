import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  provide
} from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setupApollo } from './plugins/apollo'

export const App = defineComponent({
  setup(_, { root }) {
    const notifyRef = (ref(null) as unknown) as any
    const confirmRef = (ref(null) as unknown) as any
    const apolloClient = setupApollo(root.$store.getters.getUrl, {
      Authorization: `Bearer xxx`
    })
    provide(DefaultApolloClient, apolloClient)

    /**
     * State
     */
    const state = reactive({
      title: 'Git Feed',
      left: false,
      menuDesktop: false,
      login: null
    })

    onMounted(() => {
      root.$store.dispatch('setNotify', notifyRef.value.show)
      root.$store.dispatch('setConfirmDialog', confirmRef.value.confirm)
      // root.$store.dispatch('boot')
    })

    const layoutMobile = () => {
      return (
        <div>
          <headerMobile
            headertitle={state.title}
            left={state.left}
            onLogout={() => {
              //
            }}
            onUpdate={(e: any) => {
              state.left = e
            }}
          />
          <drawerMobile
            width={200}
            left={state.left}
            onUpdate={(e: any) => {
              state.left = e
            }}
          />
        </div>
      )
    }
    return () => {
      return (
        <v-app id={'app'}>
          {layoutMobile()}
          <v-main>
            <dialogConfirm ref={confirmRef} />
            <notifyComponent ref={notifyRef} />
            <router-view />
          </v-main>

          <v-footer attrs={{ app: true }}>
            <span>&copy; {new Date().getFullYear()}</span>
          </v-footer>
        </v-app>
      )
    }
  }
})
