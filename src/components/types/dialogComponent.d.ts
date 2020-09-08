/**
 * Interface Actions Dialog - (usado para dialog customizável)
 *
 * @export
 * @interface ActionsDialog
 */
interface ActionsDialog {
  /**
   * Nome que será exibido no botão
   */
  name: string
  /**
   * Cor do botão
   */
  color: string
  /**
   * Evento callback
   */
  event: string
}

/**
 * Config Dialog - (Configuração para Dialog Custom)
 *
 * @interface ConfigDialog
 */
interface ConfigDialog {
  /**
   * Proriedade boleana (para abrir ou fechar dialog)
   */
  dialog: boolean
  /**
   * Event Close "nome do evento padrão para fechamaento (callback)"
   */
  eventClose: string
  /**
   * Title - (titulo para o dialog)
   */
  title: string
  /**
   * Subtitle - (subtitulo para o dialog)
   */
  subtitle: string
  /**
   * Actions: Array de configuração para botões de ações
   */
  actions: ActionsDialog[]
}
