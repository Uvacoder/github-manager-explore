import { defineComponent } from '@vue/composition-api'
// import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'

export const Home = defineComponent({
  setup(_, { root }) {
    return () => {
      return (
        <div class={'ma-2'}>
          <v-btn attrs={{ small: true }}>
            <span>Normal</span>
          </v-btn>
        </div>
      )
    }
  }
})
