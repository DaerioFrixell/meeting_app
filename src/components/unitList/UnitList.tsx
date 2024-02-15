import './units.scss';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewField } from '../UI/field/viewField/ViewField';
import { MainTitle } from '../UI/mainTitle/MainTitle';
import { useAction } from '../../hooks/useAction';
import { useSelector } from 'react-redux';
import { unitsCountSelector } from '../../model/user/user.selectors';
import { unitSelector } from '../../model/unit/unit.selectors';
import { Button } from '../buttons/Button';
import { SelectPeriod_E } from '../../types/V2/selectPeriodV2.type';


export const UnitList: FC = () => {
  const navigate = useNavigate();
  const { getUnitsPart, getUnitsCount } = useAction();

  // TO DO: сделать вид пагинатора: <first btn, ...10 btns..., last btn>.
  /**
   * Количество страниц, на которые можно переключиться.
   */
  const [totalPaginatorPages, setTotalPaginatorPages] = useState([1]);

  /**
   * Выбранная страница в пагинаторе. Загружается 1 страница по умолчанию.
   */
  const [currentPage, setCurrentPage] = useState(1);

  /** 
   * Часть юнитов, полученных в useEffect.
   */
  const unitsPart = useSelector(unitSelector);

  /** 
   * Количество Units за всё время.
   */
  const allUnitsCount: number = useSelector(unitsCountSelector);

  /**
   * Начальное число для нумерации Units на каждой странице.
   */
  let topUnitNumber: number = allUnitsCount - ((currentPage - 1) * 15);

  /**
   * Открывает детальный просмотр Unit по id.
   */
  const openDetailView = (id: number) => {
    navigate(`${id}`)
  };

  /**
   * Устанавливает общее количество страниц для открывания.
   */
  const setPaginatorTotalPage = () => {
    const pagesCount = Math.ceil(allUnitsCount / 15);
    const totalPagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);
    setTotalPaginatorPages(totalPagesArray)
  }

  /** 
   * Получает общее количество Units. 
   */
  useEffect(() => {
    getUnitsCount(SelectPeriod_E.ALL_TIME)
  }, [])

  /**
   * Запускает <setPaginatorTotalPage> при получении общего количества Units.
   */
  useEffect(() => {
    setPaginatorTotalPage();
  }, [allUnitsCount])

  /**
   * Запрашивает Units при клике на кнопку пагинатора.
   */
  useEffect(() => {
    getUnitsPart({
      limit: 15, page: currentPage
    })
  }, [currentPage])

  return (
    <section className="unit-list">
      <MainTitle title="весь список" />

      <span>всего: {allUnitsCount}</span>

      <div className='button-paginator'>
        {totalPaginatorPages.map(page =>
          <Button
            key={page}
            buttonsName={String(page)}
            onClick={() => setCurrentPage(page)} />
        )}
      </div>

      {unitsPart.map(oneUnit => (
        <div
          key={oneUnit.id}
          className="unit-list__commonView"
          onClick={_ => openDetailView(oneUnit.id)}
        >
          <ViewField title='№' value={topUnitNumber--} />
          <ViewField title='статус' value={oneUnit.status} />
          <ViewField title='имя' value={oneUnit.name} />
          <ViewField title='фамилия' value={oneUnit.surname} />
          <ViewField title='wasOld' value={oneUnit.wasOld > 35 ? "не указано д/р" : oneUnit.wasOld} />
          <ViewField title='ссылка' value={oneUnit.link} />
        </div>
      ))}
    </section>
  );
};