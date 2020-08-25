import { Moment } from 'moment'

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
    $moment: Moment
    ready: boolean
    /**
     * Contrato Computed - (Contrato & ConfigContrato & PlanoVenda)
     *
     */
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
  }
}
