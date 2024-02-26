// TO DO: почему здесь тип? Вынести тип в соответствующий файл. Создать файл если такого нет.
export type requestPaginationSetting_T = {
  limit: number
  page: number
}

export const requestPaginationSetting: requestPaginationSetting_T = {
  limit: 15,
  page: 1
}