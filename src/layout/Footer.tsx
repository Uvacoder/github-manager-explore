import { defineComponent } from '@vue/composition-api'

export const Footer = defineComponent({
  setup(_, { root }) {
    return () => {
      return (
        <v-footer attrs={{ app: true }}>
          <span>&copy; {new Date().getFullYear()}</span>
        </v-footer>
      )
    }
  }
})
