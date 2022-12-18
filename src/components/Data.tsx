import { useState, useEffect } from "react";
import "./data.css"
import { Unit } from "../mocdb/mocdb"
import { createUnit } from "../api/unitApi";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

type UnitType = {
  status: string | null,
  name: string,
  surname: string,
  wasOld: number,
  dateMeet: string,
  link: string,
  whereMeet: string,
  typeMeet: "live" | "ether"
}

export const Data = () => {
  const { fetchFeedbacks } = useAction()
  const { units, isLoading, error } = useTypedSelector(state => state.unit)

  useEffect(() => {
    fetchFeedbacks()
  }, [])



  const [birth, setBirth] = useState("")
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBirth = e.target.value;
    setBirth(newBirth)
  }

  const create = () => {
    createUnit({
      status: null,
      name: "третий челик",
      surname: "фамилия иии ааа",
      wasOld: 19,
      dateMeet: "09-12-2020",
      link: "@DaerioFrixell",
      whereMeet: "instagram",
      typeMeet: "ether"
    })
  }

  const allUnits = (isLoading)
    ? <h2>loading...</h2>
    : units.map(u =>
      <div className="grid" key={u.id}>
        <p className="item" >{u.id}</p>
        <p className="item">{u.status}</p>
        <p className="item">{u.name}</p>
        <p className="item">{u.surname}</p>
        <p className="item">{u.wasOld}</p>
        <p className="item">{u.dateMeet}</p>
        <p className="item">{u.link}</p>
        <p className="item">{u.whereMeet}</p>
        <p className="item">{u.typeMeet}</p>
      </div>
    )

  return (
    <>
      <h2>добавить</h2>
      <div className="smth">
        <input className="input" placeholder="имя" />
        <input className="input" placeholder="surname" />
        <input className="input" placeholder="дата рождения"
          onChange={onChangeBirth}
        />
        <input className="input" type={"date"} placeholder="дата знакомства" />
        <input className="input" placeholder="ссылка на соц сеть" />
        <input className="input" placeholder="место встречи" />
        <input className="input" placeholder="тип знакомства" />
      </div>

      <h2>список</h2>
      <div className="grid">
        <p className="item-stock">num</p>
        <p className="item-stock">status</p>
        <p className="item-stock">name</p>
        <p className="item-stock">surename</p>
        <p className="item-stock">was old</p>
        <p className="item-stock">date meet</p>
        <p className="item-stock">link</p>
        <p className="item-stock">where meet</p>
        <p className="item-stock">type</p>
      </div>

      {allUnits}


      <button onClick={create}>create</button>
    </>
  )
}