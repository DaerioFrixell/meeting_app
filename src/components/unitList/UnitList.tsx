import { FC, useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import "./unitList.scss"

export const UnitList: FC = () => {
  const { units, isLoading } = useTypedSelector(state => state.unit)
  const { fetchFeedbacks, deleteUnitAction } = useAction()

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const stockName = <div className="unit-list__item">
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

  const testFunc = (link: string) => {
    return console.log(link)
  }

  const allUnit = units.map(u =>
    <div className="unit-list__item" key={u.id} onDoubleClick={() => deleteUnitAction(u.id)}>
      <p className="unit-list__item__number">{u.id}</p>
      <p className="unit-list__item__status item-update"
        onClick={() => testFunc(u.link)}>
        {u.status ? u.status : "-"}
      </p>
      <p className="unit-list__item__name">{u.name}</p>
      <p className="unit-list__item__surname">{u.surname}</p>
      <p className="unit-list__item__was-old">{u.wasOld}</p>
      <p className="unit-list__item__date-meet">{u.dateMeet}</p>
      <p className="unit-list__item__link">{u.link}</p>
      <p className="unit-list__item__where-meet">{u.whereMeet}</p>
      <p className="unit-list__item__type-meet">{u.typeMeet}</p>
      <button className="unit-list__item__button">-</button>
    </div>)


  return (
    <section className="unit-list">
      <h2>список всех</h2>
      {stockName}
      {allUnit.reverse()}
    </section>
  )
}