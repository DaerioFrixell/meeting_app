import { FC, useState } from 'react'
import { GetUnitResponse } from '../../../Data/GetUnitResponse'
import { useAction } from '../../../hooks/useAction'
import { Field, Form, Formik } from 'formik'
import { UpdateUnit } from '../../../Data/Unit'

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
  const { deleteUnitAction, updateUnit } = useAction()
  const [canUpdate, setCanUpdate] = useState(false)

  const testFunc = (link: string) => {
    return console.log(link)
  }

  const foo = () => {
    console.log(id)
    setCanUpdate(!canUpdate)
  }

  const initialValues: UpdateUnit = {
    id: 203,
    status,
    name,
    surname,
    wasOld: 0,
    dateMeet: '0',
    link: '',
    vk: '',
    inst: '',
    telegram: '',
    whereMeet: '',
    typeMeet: 'ether',
  }

  return (
    <div className="unit-list__item">
      <p className="unit-list__item__number">{id}</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          updateUnit(values)
          setCanUpdate(false)
        }}
      >
        {(values) => (
          console.log('values: ', values),
          (
            <Form className="flex">
              {canUpdate ? (
                <>
                  <Field
                    name="status"
                    className="unit-list__item__status item-update"
                    value={status}
                  />

                  <Field
                    name="name"
                    className="unit-list__item__name"
                    value={name}
                  />

                  <Field
                    name="surname"
                    className="unit-list__item__surname"
                    value={surname}
                  />

                  <p className="unit-list__item__was-old">{wasOld}</p>

                  <input
                    className="unit-list__item__date-meet"
                    value={dateMeet}
                  />

                  <input
                    className="unit-list__item__link"
                    value={link}
                  />

                  <input
                    className="unit-list__item__where-meet"
                    value={whereMeet}
                  />

                  <input
                    className="unit-list__item__type-meet"
                    value={typeMeet}
                  />
                </>
              ) : (
                <>
                  <p
                    className="unit-list__item__status item-update"
                    onClick={() => testFunc(link)}
                  >
                    {status ? status : '-'}
                  </p>

                  <p className="unit-list__item__name">{name}</p>
                  <p className="unit-list__item__surname">
                    {surname}
                  </p>

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
              <button
                type="button"
                className="unit-list__item__button"
                onClick={() => foo()}
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
          )
        )}
      </Formik>
    </div>
  )
}
