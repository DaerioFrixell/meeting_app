import { FC, useState } from 'react'
import { GetUnitResponse } from '../../../Data/GetUnitResponse'
import { useAction } from '../../../hooks/useAction'

type Unit = GetUnitResponse
export const Unit: FC<Unit> = ({
  dateMeet,
  link,
  name,
  status,
  surname,
  typeMeet,
  wasOld,
  whereMeet,
  id,
}) => {
  const [a, setA] = useState(true)
  const [c, setC] = useState('')
  const { deleteUnitAction } = useAction()

  const testFunc = (link: string) => {
    return console.log(link)
  }

  const handleState = () => {
    setA(!a)
    console.log(a)
  }

  const handlerValue = (e: any) => {
    setC(e.target.value)
  }

  const b = a ? (
    <p onClick={handleState}>{c ? c : 'nothing'}</p>
  ) : (
    <>
      <input
        placeholder="cmon bitch"
        value={c}
        onChange={handlerValue}
      />
      <p onClick={handleState}>cl</p>
    </>
  )

  return (
    <div className="unit-list__item">
      {b}
      <p className="unit-list__item__number">{id}</p>

      <p
        className="unit-list__item__status item-update"
        onClick={() => testFunc(link)}
      >
        {status ? status : '-'}
      </p>

      <p className="unit-list__item__name">{name}</p>
      <p className="unit-list__item__surname">{surname}</p>

      <p className="unit-list__item__was-old">{wasOld}</p>
      <p className="unit-list__item__date-meet">{dateMeet}</p>

      <p className="unit-list__item__link">{link}</p>
      <p className="unit-list__item__where-meet">{whereMeet}</p>
      <p className="unit-list__item__type-meet">{typeMeet}</p>

      <button
        className="unit-list__item__button"
        onClick={() => deleteUnitAction(id)}
      >
        -
      </button>
    </div>
  )
}
