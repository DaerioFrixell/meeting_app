import { FC, useState } from 'react'
import { GetUnitResponse } from '../../../Data/GetUnitResponse'
import { useAction } from '../../../hooks/useAction'
import { FormField } from '../../UI/field/FormField'

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
  const { deleteUnitAction } = useAction()

  const testFunc = (link: string) => {
    return console.log(link)
  }

  return (
    <div className="unit-list__item">
      <FormField asd={wasOld} />
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
