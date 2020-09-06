import Vue from 'vue'

export default Vue.extend({
  computed: {
    notify() {
      return this.$store.getters.getNotify
    },
    confirm() {
      return this.$store.getters.getConfirm
    },
    cProfile() {
      return this.$store.getters.getProfile
    },
    cLoading() {
      return this.$store.getters.getLoading
    }
  }
})
