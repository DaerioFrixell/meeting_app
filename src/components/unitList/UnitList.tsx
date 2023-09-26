import { FC, useEffect } from 'react'
import { useAction } from '../../hooks/useAction'
import './unitList.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Unit } from './unit/Unit'

export const UnitList: FC = () => {
  const { units } = useTypedSelector((state) => state.unit)
  const { fetchFeedbacks } = useAction()

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  return (
    <section className="unit-list">
      <h2>список всех</h2>

      <div className="unit-list__item">
        <p className="unit-list__item__number">id</p>
        <p className="unit-list__item__status">stat</p>
        <p className="unit-list__item__name">name</p>
        <p className="unit-list__item__surname">surname</p>
        <p className="unit-list__item__was-old">лет при знакомстве</p>
        <p className="unit-list__item__date-meet">dateMeet</p>
        <p className="unit-list__item__link">link</p>
        <p className="unit-list__item__where-meet">whereMeet</p>
        <p className="unit-list__item__type-meet">typeMeet</p>
      </div>

      {units
        .map((u) => (
          <Unit
            key={u.id}
            id={u.id}
            dateMeet={u.dateMeet}
            inst={u.inst}
            link={u.link}
            name={u.name}
            status={u.status}
            surname={u.surname}
            telegram={u.telegram}
            typeMeet={u.typeMeet}
            vk={u.vk}
            wasOld={u.wasOld}
            whereMeet={u.whereMeet}
          />
        ))
        .reverse()}
    </section>
  )
}
