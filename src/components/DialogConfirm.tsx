import { defineComponent, reactive, computed } from '@vue/composition-api'

/**
 * Dialog Confirm
 */
export const DialogConfirm = defineComponent({
  template: `
    <v-dialog
      v-model="dialogComponent"
      width="500"
    >
      <v-card>
        <v-card-title :class="state.color">
          {{state.title}}
        </v-card-title>

        <v-card-text>
          {{state.subtitle}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="reject"
          >
            No
          </v-btn>
          <v-btn
            color="green white--text"
            @click="resolve"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  `,
  setup() {
    const state = reactive({
      dialog: false,
      title: '',
      subtitle: '',
      color: 'headline primary white--text',
      response: {} as {
        resolve: (value?: unknown) => void
        reject: (reason?: any) => void
      }
    })

    async function confirm(title: string, subtitle?: string, color?: string) {
      state.title = title === undefined ? '' : title
      state.subtitle = subtitle === undefined ? '' : subtitle
      state.color =
        color === undefined
          ? 'headline primary white--text'
          : 'headline ' + color
      state.dialog = true

      return new Promise((resolve, reject) => {
        state.response = { resolve, reject }
      })
    }

    const resolve = () => {
      state.dialog = false
      state.response.resolve()
    }

    const reject = () => {
      state.dialog = false
      state.response.reject()
    }

    const dialogComponent = computed({
      get() {
        return state.dialog
      },
      set() {
        reject()
      }
    })

    return {
      dialogComponent,
      confirm,
      state,
      resolve,
      reject
    }
  }
})
