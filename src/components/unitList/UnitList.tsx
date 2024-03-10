import './units.scss';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewField } from '../UI/field/viewField/ViewField';
import { MainTitle } from '../UI/mainTitle/MainTitle';
import { useAction } from '../../hooks/useAction';
import { useSelector } from 'react-redux';
import { unitsCountSelector } from '../../model/user/user.selectors';
import { unitSelector } from '../../model/unit/unit.selectors';
import { SelectPeriod_E } from '../../types/V2/selectPeriodV2.type';
import { Paginator } from '../paginator/Paginator';
import { limitLoadData } from '../../staticData/constants/paginator';


export const UnitList: FC = () => {
  const navigate = useNavigate();
  const { getUnitsPart, getUnitsCount } = useAction();

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
   * Первый номер Unit на каждой странице.
   */
  let firstUnitNumber: number = allUnitsCount - ((currentPage - 1) * limitLoadData);

  /**
   * Открывает детальный просмотр Unit по id.
   */
  const openDetailView = (id: number) => {
    navigate(`${id}`)
  };

  /** 
   * Получает общее количество Units. 
   */
  useEffect(() => {
    getUnitsCount(SelectPeriod_E.ALL_TIME)
  }, [])

  /**
   * Запускате запрос на получение Units при клике на кнопку пагинатора.
   */
  useEffect(() => {
    getUnitsPart({
      limit: limitLoadData, page: currentPage
    })
  }, [currentPage])

  return (
    <section className="unit-list">
      <MainTitle title="весь список" />

      <Paginator
        elementCount={allUnitsCount}
        choosePage={setCurrentPage}
        currentPage={currentPage}
      >
        {unitsPart.map(oneUnit => (
          <div
            key={oneUnit.id}
            className="unit-list__commonView"
            onClick={_ => openDetailView(oneUnit.id)}
          >
            {/* TO DO: использовать константы для статики. */}
            <ViewField title='№' value={firstUnitNumber--} />
            <ViewField title='статус' value={oneUnit.status} />
            <ViewField title='имя' value={oneUnit.name} />
            <ViewField title='фамилия' value={oneUnit.surname} />
            <ViewField title='wasOld' value={oneUnit.wasOld > 35 ? "не указано д/р" : oneUnit.wasOld} />
            <ViewField title='ссылка' value={oneUnit.link} />
          </div>
        ))}
      </Paginator>
    </section>
  );
};