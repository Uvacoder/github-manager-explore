import { defineComponent, onMounted } from '@vue/composition-api'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const Home = defineComponent({
  setup(_, { root }) {
    onMounted(async () => {
      const abc = a()
      console.log(abc.result)
    })

    const a = () => {
      const result = useQuery(gql`
        query {
          viewer {
            bio
          }
        }
      `)

      return result
    }

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
