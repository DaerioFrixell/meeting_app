import { useState } from "react"
import "./asd.css"
import { checkOld } from "./utils/calcOld"


export const App = () => {
  const [birth, setBirth] = useState("")
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBirth = e.target.value;
    setBirth(newBirth)
  }

  return (
    <>
      <div className="App">
        <div className="flex">
          <p>№</p>
          <p>ссылка на человека</p>
          <p>дата рождения</p>
          <p>возраст</p>
          <p>имя</p>
          <p>статус</p>
        </div>

        <div className="flex">
          <p>empty</p>
          <input className="input" placeholder="ссылка на человека" />
          <input className="input" placeholder="дата рождения"
            onChange={onChangeBirth} />
          <p>empty</p>
          <input className="input" placeholder="имя" />
          <input className="input" placeholder="status" />
        </div>

        <div className="flex">
          <p>1</p>
          <p>vk.com</p>
          <p>{birth}</p>
          <p>{checkOld(birth)}</p>
          <p>alla</p>
          <p>D</p>
        </div>
      </div>
    </>
  );
}
