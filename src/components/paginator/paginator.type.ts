import { Dispatch, ReactNode } from "react";


export type Paginator_T = {
  /**
   * Количество элементов из которых получается общее количество страниц.
   */
  elementCount: number

  /**
   * Текущая выбранная страница.
   */
  currentPage: number

  /**
   * Вызывает рендер после смены выбранной страницы.
   */
  choosePage: Dispatch<React.SetStateAction<number>>

  children: ReactNode
}