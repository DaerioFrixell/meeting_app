import './units.scss';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewField } from '../UI/field/viewField/ViewField';
import { MainTitle } from '../UI/mainTitle/MainTitle';
import { useAction } from '../../hooks/useAction';
import { useSelector } from 'react-redux';
import { countUnitsSelector } from '../../model/user/user.selectors';
import { unitSelector } from '../../model/unit/unit.selectors';
import { Button } from '../buttons/Button';


export const UnitList: FC = () => {
  const navigate = useNavigate();
  const { getUnitsPart, getAllUnitsFake } = useAction();

  const [paginatorPage, setPaginatorPage] = useState(1);

  // TO DO: сделать отображение <1st page-btn, 10 btns, last page-btn>.
  const [totalPaginatorPages, setTotalPaginatorPages] = useState([1, 2, 3])

  /** Часть юнитов, получанных в useEffect */
  const unitsPart = useSelector(unitSelector);

  /** Текущее количество Units за текущий год.  */
  // TO DO: Здесь будет всё количество Units, чтоб работала пагинация по всем. Зачем выводить units за определённый год, если на странице нет выбора периода? Переименовать константу.
  const currentUnitsCount: number = useSelector(countUnitsSelector);

  let num = currentUnitsCount - ((paginatorPage - 1) * 15);

  const openDetailView = (id: number) => {
    navigate(`${id}`)
  };

  const setPaginatorTotalPage = () => {
    const pagesCount = Math.ceil(currentUnitsCount / 15);
    const totalPagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);
    setTotalPaginatorPages(totalPagesArray)
  }

  // TO DO: Сделать запрос на получение всех Units
  useEffect(() => {
    setPaginatorTotalPage();
  }, [])

  useEffect(() => {
    getAllUnitsFake()
    if (paginatorPage > 0) {
      getUnitsPart({
        limit: 15, page: paginatorPage
      })
    }
  }, [paginatorPage])

  return (
    <section className="unit-list">
      <MainTitle title="весь список" />

      <span>всего: {currentUnitsCount}</span>

      <div className='button-paginator'>
        {totalPaginatorPages.map(page =>
          <Button
            key={page}
            buttonsName={String(page)}
            onClick={() => setPaginatorPage(page)} />
        )}
      </div>

      {unitsPart.map(oneUnit => (
        <div
          key={oneUnit.id}
          className="unit-list__commonView"
          onClick={_ => openDetailView(oneUnit.id)}
        >
          <ViewField title='№' value={num--} />
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