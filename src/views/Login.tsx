import { defineComponent, reactive, ref } from '@vue/composition-api'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const Login = defineComponent({
  setup(_, { root }) {
    const state = reactive({
      token: ''
    })

    const enabled = ref(false)

    // result, loading, error, refetch
    const viewBio = useQuery(
      gql`
        query {
          viewer {
            login
            avatarUrl
            name
            status {
              id
              message
            }
          }
        }
      `,
      {},
      () => ({
        enabled: enabled.value
      })
    )

    async function login() {
      root.$cookies.set('token', state.token, '7d', '/')
      enabled.value = true

      try {
        const { data } = await viewBio.refetch()
        root.$cookies.set('profile', data.viewer, '7d', '/')
        root.$store.dispatch('boot')
        root.$router.push('/')
      } catch (error) {
        root.notify('Error: Invalid Token', 'red', 8)
      }
    }

    return () => {
      return (
        <v-card class={'ml-auto mr-auto mt-4'} max-width={400}>
          <v-card-title>Login</v-card-title>
          <v-text-field
            dense
            outlined
            v-model={state.token}
            label={'Personal Token'}
            class={'ma-2'}
          ></v-text-field>
          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color={'primary'}
              onClick={() => {
                login()
              }}
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      )
    }
  }
})
