import { defineComponent, reactive } from '@vue/composition-api'

export const Notify = defineComponent({
  template: `
    <v-snackbar 
      v-model="state.show"
      :color="state.color"
      :timeout="state.time"
    >
      {{state.message}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="state.show = false"
        >
          Close
        </v-btn>
    </template>

    </v-snackbar>
  `,
  setup() {
    const state = reactive({
      show: false,
      color: 'green',
      message: '',
      time: 4000
    })

    function show(message: string, color: string, time: number) {
      state.time = time !== undefined ? time * 1000 : 5000
      state.message = message
      state.color = color !== undefined ? color : 'green'
      state.show = true
    }
    return {
      state,
      show
    }
  }
})
