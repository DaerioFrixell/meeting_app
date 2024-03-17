export type Popup_T = {
  /**
   * Статус в ответе запроса.
   */
  status: number
  /**
   * Строка, которая передаётся для показа пользователю.
   */
  message: string
  /**
   * Метод для закрытия popup при нажатии на него.
   */
  toClose: () => void
}