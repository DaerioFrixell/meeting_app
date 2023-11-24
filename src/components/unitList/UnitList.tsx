import './units.scss';
import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { ViewField } from '../UI/field/viewField/ViewField';
import { MainTitle } from '../UI/mainTitle/MainTitle';
import { useAction } from '../../hooks/useAction';
import { requestPaginationSetting } from '../../middleware/requestPaginationSetting';

export const UnitList: FC = () => {
  const navigate = useNavigate();
  const { getAllUnits } = useAction()
  const { units } = useTypedSelector((state) => state.unit);

  const [isBottom, setIsBottom] = useState(false)
  const [page, setPage] = useState(2)

  const search = {
    limit: requestPaginationSetting.limit,
    page: page
  }

  useEffect(() => {
    if (isBottom) {
      setIsBottom(false)
      getAllUnits(search)

      setPage(page + 1)
    }
  }, [isBottom])

  useEffect(() => {
    document.addEventListener('scroll', scrollCheck)
    return function () {
      document.removeEventListener('scroll', scrollCheck)
    }
  }, [])

  const scrollCheck = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsBottom(true)
    }
  }

  const openDetailView = (id: number) => {
    navigate(`${id}`)
  };

  return (
    <section className="unit-list">
      <MainTitle title="весь список" />

      {units.map(oneUnit => (
        <div
          key={oneUnit.id}
          className="unit-list__commonView"
          onClick={_ => openDetailView(oneUnit.id)}
        >
          <ViewField title='id' value={oneUnit.id} />
          <ViewField title='статус' value={oneUnit.status} />
          <ViewField title='имя' value={oneUnit.name} />
          <ViewField title='фамилия' value={oneUnit.surname} />
          <ViewField title='wasOld' value={oneUnit.wasOld} />
          <ViewField title='ссылка' value={oneUnit.link} />
        </div>
      ))}
    </section>
  );
};
