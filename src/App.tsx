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
    const loadingRef = (ref(null) as unknown) as any
    const apolloClient = setupApollo(root.$store.getters.getUrl)
    provide(DefaultApolloClient, apolloClient)

    /**
     * State
     */
    const state = reactive({
      title: 'Github Manager Explore ',
      left: false,
      menuDesktop: false,
      login: null
    })

    onMounted(() => {
      root.$store.dispatch('boot')
      root.$store.dispatch('setNotify', notifyRef.value.show)
      root.$store.dispatch('setConfirmDialog', confirmRef.value.confirm)
      root.$store.dispatch('setLoading', {
        on: loadingRef.value.on_,
        off: loadingRef.value.off_
      })
    })

    function logout() {
      root.$cookies.remove('profile', '/')
      root.$store.dispatch('boot')
      root.$router.push('/login')
    }

    const layoutMobile = () => {
      return (
        <div>
          <headerMobile
            headertitle={state.title}
            left={state.left}
            onLogout={() => {
              logout()
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
          <loadingComponent ref={loadingRef} />
          <dialogConfirm ref={confirmRef} />
          <notifyComponent ref={notifyRef} />
          {layoutMobile()}
          <v-main class={'ma-4'}>
            <router-view />
          </v-main>
          <footerLayout />
        </v-app>
      )
    }
  }
})
