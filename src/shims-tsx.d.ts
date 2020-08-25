import Vue, { VNode } from 'vue'
import { VueCookies } from 'vue-cookies'
declare global {
  namespace JSX {
    type Element = VNode
    type ElementClass = Vue
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    $cookies: VueCookies
  }
}
