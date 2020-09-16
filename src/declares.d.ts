import { Moment } from 'moment'
import { Profile } from './plugins/types/interfaces'
import { Workbox } from 'workbox-window'

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * Show Snackbar Notification
     *
     * @param {string} message Message
     * @param {string} color Color Message
     * @param {number} time Time (second)
     * @memberof Vue
     */
    notify(message: string, color: string, time: number): void
    /**
     * Moment Lib
     *
     * @type {Moment}
     * @memberof Vue
     */
    $moment: Moment
    /**
     * Show Dialog Confirmation
     * @param title Titulo (Questionario)
     * @param subtitle Subtitulo (Questionario)
     * @param color (Cor do Background)
     */
    confirm(
      title: string,
      subtitle?: string | undefined,
      color?: string | undefined
    ): Promise<unknown>

    /**
     * Set Loading On/Off
     *
     * @type {{
     *       on(): void
     *       off(): void
     *     }}
     * @memberof Vue
     */
    cLoading: {
      /**
       * Enable Loading
       *
       */
      on(): void
      /**
       * Disable Loading
       *
       */
      off(): void
    }

    /**
     * Profile Object
     *
     * @type {Profile}
     * @memberof Vue
     */
    cProfile: Profile

    $workbox: Workbox
  }
}
