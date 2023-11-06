import { FC, useState } from 'react'
import { GetUnitResponse } from '../../../Data/GetUnitResponse'
import { useAction } from '../../../hooks/useAction'
import { Field, Form, Formik } from 'formik'
import { UpdateUnit } from '../../../Data/Unit'
import { useNavigate } from 'react-router-dom'

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
  vk,
  inst,
  telegram,
}) => {
  const navigate = useNavigate()
  const { deleteUnitAction, updateUnit } = useAction()

  const [canUpdate, setCanUpdate] = useState(false)

  const testFunc = (id: number) => {
    navigate(`${id}`)
  }

  const initialValues: UpdateUnit = {
    id,
    status,
    name,
    surname,
    wasOld,
    dateMeet,
    link,
    vk,
    inst,
    telegram,
    whereMeet,
    typeMeet,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        updateUnit(values)
        setCanUpdate(false)
      }}
    >
      {_ => (
        <Form className="flex">
          <div className="unit-list__item" onClick={_ => testFunc(id)} >
            <p className="unit-list__item__number" >{id}</p>
            {canUpdate ? (
              <>
                <Field
                  name="status"
                  className="unit-list__item__status item-update"
                />

                <Field
                  name="name"
                  className="unit-list__item__name"
                />

                <Field
                  name="surname"
                  className="unit-list__item__surname"
                />

                <Field
                  name="wasOld"
                  className="unit-list__item__wasOld"
                />

                <Field
                  name="dateMeet"
                  type="date"
                  className="unit-list__item__date-meet"
                />

                <Field
                  name="link"
                  className="unit-list__item__link"
                />

                <Field
                  name="whereMeet"
                  className="unit-list__item__where-meet"
                />

                <Field
                  className="unit-list__item__type-meet"
                  component="select"
                  name="typeMeet">
                  <option disabled>тип знакомства</option>
                  <option value="live">live</option>
                  <option value="ether">ether </option>
                </Field>
              </>
            ) : (
              <>
                <p className="unit-list__item__status item-update">
                  {status ? status : '-'}
                </p>

                <p className="unit-list__item__name">{name}</p>
                <p className="unit-list__item__surname">{surname}</p>
                <p className="unit-list__item__was-old">{wasOld}</p>

                <p className="unit-list__item__date-meet">
                  {dateMeet}
                </p>

                <p className="unit-list__item__link">{link}</p>

                <p className="unit-list__item__where-meet">
                  {whereMeet}
                </p>

                <p className="unit-list__item__type-meet">
                  {typeMeet}
                </p>
              </>
            )}

          </div>
          <button
            type="button"
            className="unit-list__item__button"
            onClick={() => setCanUpdate(!canUpdate)}
          >
            /
          </button>
          <button
            className="unit-list__item__button"
            onClick={() => deleteUnitAction(id)}
          >
            -
          </button>

          {canUpdate && (
            <button
              type="submit"
              className="unit-list__item__button"
            >
              U
            </button>
          )}
        </Form>
      )}
    </Formik>
  )
}
