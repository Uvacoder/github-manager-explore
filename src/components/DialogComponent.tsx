import { defineComponent, computed, PropType } from '@vue/composition-api'

/**
 * Dialog Component
 */
export const DialogComponent = defineComponent({
  props: {
    /**
     * Config Dialog
     */
    config: {
      type: Object as PropType<ConfigDialog>,
      default: () => {
        return {
          dialog: false,
          title: '',
          subtitle: '',
          eventClose: '',
          actions: [] as ActionsDialog[]
        } as ConfigDialog
      }
    }
  },
  setup(p, ctx) {
    const dialogComponent = computed({
      get() {
        return p.config.dialog
      },
      set() {
        ctx.emit(p.config.eventClose)
      }
    })

    /**
     * Render Actions
     * @param e Actions Params
     */
    const renderActions = (e: ActionsDialog) => {
      return (
        <v-btn
          class={e.color}
          onClick={() => {
            ctx.emit(e.event)
          }}
        >
          {e.name}
        </v-btn>
      )
    }

    return () => {
      return (
        <v-dialog max-width={1000} v-model={dialogComponent.value}>
          <v-card>
            <v-card-title class={'blue white--text'}>
              {p.config.title}
            </v-card-title>

            {p.config.subtitle ? (
              <v-card-text>{p.config.subtitle}</v-card-text>
            ) : (
              ''
            )}

            {ctx.slots.section ? ctx.slots.section() : ''}

            {p.config.actions.length > 0 ? (
              <div>
                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  {p.config.actions.map((e) => renderActions(e))}
                </v-card-actions>
              </div>
            ) : (
              ''
            )}
          </v-card>
        </v-dialog>
      )
    }
  }
})
