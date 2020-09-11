import { defineComponent } from '@vue/composition-api'

export const Footer = defineComponent({
  setup() {
    return () => {
      return (
        <v-footer attrs={{ app: true }}>
          <span>
            &copy; {new Date().getFullYear()} - v{process.env.VERSION}
          </span>
        </v-footer>
      )
    }
  }
})
