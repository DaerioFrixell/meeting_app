import { FC, useEffect } from "react"
import { useAction } from "../../hooks/useAction"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { stockFieldName } from "./stockFieldName"
import "./unitList.css"

export const UnitList: FC = () => {
  const { units, isLoading } = useTypedSelector(state => state.unit)
  const { fetchFeedbacks } = useAction()
  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const stockName = stockFieldName.map(sn => <p
    key={sn}
    className="unit-list-stock">{sn}</p>)

  let id = 1;
  const allUnits = isLoading
    ? <h2>loading...</h2>
    : units.map(u =>
      <div className="unit-list" key={u.link}>
        <p className="item" >{id++}</p>
        <p className="item">{u.status}</p>
        <p className="item">{u.name}</p>
        <p className="item">{u.surname}</p>
        <p className="item">{u.wasOld}</p>
        <p className="item">{u.dateMeet}</p>
        <p className="item">{u.link}</p>
        <p className="item">{u.whereMeet}</p>
        <p className="item">{u.typeMeet}</p>
      </div>
    ).reverse()

  return (
    <>
      <h2>список всех</h2>
      <div className="unit-list">{stockName}</div>
      {allUnits}
    </>
  )
}