import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  computed
} from '@vue/composition-api'

export const Support = defineComponent({
  setup(_, { root }) {
    return () => {
      return (
        <v-card height={'100%'}>
          <h2 class={'text-center'}>Support</h2>

          <h4 class={'text-center'}>
            This is an application that uses the GitHub API (graphql), in which
            the frontend is kept in the
            <a
              href="https://github.com/joaomede/github-manager-explore"
              target={'_blank'}
            >
              {' '}
              Repository{' '}
            </a>
            in an OpenSource and non-profit way, found a bug? help us solve it (
            <a
              href={
                'https://github.com/joaomede/github-manager-explore/issues/new'
              }
              target={'_blank'}
            >
              Open new issues
            </a>
            )
          </h4>
        </v-card>
      )
    }
  }
})
