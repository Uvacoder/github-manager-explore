import { defineComponent } from '@vue/composition-api'

export const ButtonMenuComponent = defineComponent({
  props: {
    /**
     * Button Name
     */
    name: {
      type: String
    },
    /**
     * Router To
     */
    router: {
      type: String
    },
    /**
     * Button Color
     */
    color: {
      type: String
    },
    /**
     * Icon
     */
    icon: {
      type: String
    }
  },
  setup(_) {
    return () => {
      return (
        <v-col justify={'center'} align={'center'} class={'ma-2'}>
          <v-btn
            to={_.router}
            style={{
              'max-width': '150px',
              'min-height': '100px',
              'word-break': 'break-all'
            }}
            color={_.color}
            class={'pa-2'}
          >
            <v-row class={'ma-0 pa-0'} justify={'center'} align={'center'}>
              <v-col
                class={'ma-0 pa-0'}
                justify={'center'}
                align={'center'}
                cols={'12'}
              >
                <p
                  style={{
                    'word-break': 'break-all',
                    'font-size': '10px'
                  }}
                >
                  {_.name}
                </p>
              </v-col>
              <v-col
                justify={'center'}
                align={'center'}
                cols={'12'}
                class={'ma-0 pa-0'}
              >
                <v-icon class={'ma-2'} style={{ 'font-size': '50px' }}>
                  {_.icon}
                </v-icon>
              </v-col>
            </v-row>
          </v-btn>
        </v-col>
      )
    }
  }
})
