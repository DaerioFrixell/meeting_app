import './paginator.scss';
import { FC, useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { Paginator_T } from './paginator.type';


// TO DO: сделать вид пагинатора: <first btn, ...10 btns..., last btn>.
export const Paginator: FC<Paginator_T> = ({ elementCount, currentPage, choosePage, children }) => {
  /**
   * Количество доступных страниц.
   */
  const [totalPage, setTotalPage] = useState([1]);

  /**
   * Кнопки для переключения страницы.
   */
  const buttons =
    <div className="paginator-buttons">
      {totalPage.map(page =>
        <Button
          key={page}
          className={(currentPage === page) ? 'paginator-buttons__choose' : ''}
          buttonsName={String(page)}
          onClick={() => choosePage(page)} />
      )}
    </div>

  /**
   * Устанавливает количество доступных страниц.
   */
  const setPaginatorTotalPage = () => {
    const pagesCount = Math.ceil(elementCount / 15);
    const totalPagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);
    setTotalPage(totalPagesArray)
  }

  /**
   * Запускает setPaginatorTotalPage при изменении общего количества элементов.
   */
  useEffect(() => {
    setPaginatorTotalPage();
  }, [elementCount])

  return (
    <div>
      <p>всего: {elementCount}</p>

      {buttons}

      {children}

      {buttons}
    </div>
  )
}