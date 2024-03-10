import './paginator.scss';
import { FC, useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { Paginator_T } from './paginator.type';
import { limitLoadData } from '../../staticData/constants/paginator';
import { staticData } from '../../staticData/staticData';


export const Paginator: FC<Paginator_T> = ({
  elementCount,
  currentPage,
  choosePage,
  children }) => {
  /**
   * Список количества доступных страниц.
   */
  const [totalCountPagesArr, setTotalCountPagesArr] = useState([1]);
  /**
   * Выбранная кнопка в пагинаторе.
   */
  const [selectedButton, setSelectedButton] = useState(1);

  /**
  * Устанавливает количество доступных страниц.
  */
  const calcTotalCountPageArr = () => {
    const pagesCount = Math.ceil(elementCount / limitLoadData);

    const totalPagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);

    setTotalCountPagesArr(totalPagesArray);
  }
  /**
   * Устанавливает количество кнопок до/после той, на которую нажали.
   * 
   * @param totalCountPageArr список общего количества страниц.
   * @param selectedButton Выбранная кнопка в пагинаторе.
   */
  const setButtonsNumber = (totalCountPageArr: number[], selectedButton: number): number[] => {
    /**
     * Количество кнопок до/после той, на которую нажали.
     */
    const step = 1;
    /**
     * Количество кнопок в пагинаторе для отображения.
     */
    const countPaginatorElements = 5;
    /**
     * Список кнопок для отображения.
     */
    const buttonsNumber = [];
    /**
     * Показывает был ли совершен клик на первую кнопку.
     */
    const isClickFirstButton = selectedButton < 3;
    /**
     * Показывает был ли совершен клик на последнюю кнопку.
     */
    const isClickLastButton = selectedButton > totalCountPageArr.length - 2;

    /**
     * Заполняет массив номерами кнопок при выборе первой или последней кнопки.
     */
    const fillButtonsNumberForFirstOrLastButton = () => {
      if (elementCount) {
        /**
         * Количество номеров кнопок. Вычитается первый или последний номера кнопок.
         */
        const numberArray = Array.from(
          { length: countPaginatorElements - 1 },
          (_, i) => {
            if (isClickFirstButton) {
              return i + 1;
            }

            if (isClickLastButton) {
              return totalCountPageArr.length - i;
            }
          }
        );

        if (isClickLastButton) {
          numberArray.reverse();
        }

        if (isClickFirstButton || isClickLastButton) buttonsNumber.push(...numberArray);
      }
    }
    /**
     * Добавляет номера кнопок до той, на которую нажали.
     */
    const addButtonsNumberBeforeChoosen = () => {
      const arrNumber = [];

      for (let i = selectedButton; (i > selectedButton - step); i--) {
        if (i < 3) break;

        if (isClickLastButton) break;

        arrNumber.push(i - 1);
      }

      arrNumber.reverse();

      buttonsNumber.push(...arrNumber);
    }
    /**
     * Добавляет номера кнопок после той, на которую нажали.
     */
    const addButtonsNumberAfterChoosen = () => {
      for (
        let i = selectedButton;
        i <= selectedButton + step && i < totalCountPageArr.length;
        i++
      ) {
        if (isClickFirstButton) break;
        if (isClickLastButton) break;

        buttonsNumber.push(i)
      }
    }

    if (!isClickFirstButton) buttonsNumber.push(1);

    fillButtonsNumberForFirstOrLastButton();
    addButtonsNumberBeforeChoosen();
    addButtonsNumberAfterChoosen();

    if (!isClickLastButton) buttonsNumber.push(Number(totalCountPageArr.at(-1)));

    return buttonsNumber;
  }
  /**
    * Устанавливает текущий номер страницы.
    */
  const changePage = (buttonNumber: number) => {
    setSelectedButton(buttonNumber)
    choosePage(buttonNumber)
  }

  /**
   * Итоговый массив с количеством кнопок для отображения страниц.
   */
  const paginatorButtonsNumber = setButtonsNumber(totalCountPagesArr, selectedButton);
  /**
   * Перебранные кнопки для отображения.
   */
  const paginatorButtons =
    <div className="paginator-buttons">
      {paginatorButtonsNumber.map(buttonNumber =>
        <Button
          key={buttonNumber}
          className={(currentPage === buttonNumber) ? 'paginator-buttons__choose' : ''}
          buttonsName={String(buttonNumber)}
          onClick={() => changePage(buttonNumber)} />
      )}
    </div>

  /**
   * Запускает calcTotalCountPageArr при изменении общего количества элементов.
   */
  useEffect(() => {
    calcTotalCountPageArr();
  }, [elementCount])

  return (
    <div>
      <p>{staticData.paginatorTitle} {elementCount}</p>

      {paginatorButtons}

      {children}

      {paginatorButtons}
    </div>
  )
}