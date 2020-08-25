import Vue from 'vue'
import Vuetify from 'vuetify'
import pt from 'vuetify/es5/locale/pt'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2196f3',
        secondary: '#3f51b5',
        accent: '#03a9f4',
        error: '#f44336',
        warning: '#ff5722',
        info: '#ff9800',
        success: '#4caf50'
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  }
})
