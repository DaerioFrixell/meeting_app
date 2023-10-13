import './unitForm.css'
import { Form, Formik, Field, FormikErrors } from 'formik'
import { calcWasOld } from '../../middleware/calcOldMiddleware'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CreateUnit } from '../../Data/Unit'

type errorType = {
  link: string
  typeMeet: string
}

export const UnitForm = () => {
  const { units } = useTypedSelector((state) => state.unit)
  const { addUnit } = useAction()
  const unitLinks = units.map((u) => u.link)

  const initialValues: CreateUnit = {
    name: '',
    surname: '',
    birth: '',
    dateMeet: '',
    link: '',
    whereMeet: '',
    typeMeet: '',
  }

  return (
    <>
      <h2>добавить</h2>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let checkLinks = unitLinks.filter((u) => u === values.link)
          const errors: FormikErrors<errorType> = {}

          if (checkLinks.length === 1 && checkLinks[0] !== '') {
            errors.link = 'link add yet'
          }
          if (values.typeMeet === '') {
            errors.typeMeet = 'empty'
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          const wasOld = calcWasOld(values.birth, values.dateMeet)
          addUnit({
            status: null,
            name: values.name,
            surname: values.surname,
            wasOld: wasOld,
            dateMeet: values.dateMeet,
            link: values.link,
            vk: null,
            inst: null,
            telegram: null,
            whereMeet: values.whereMeet,
            typeMeet: values.typeMeet,
          })
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="unit-form">
            <Field
              className="unit-form-input"
              name="name"
              placeholder="имя"
            />
            <Field
              className="unit-form-input"
              name="surname"
              placeholder="surname"
            />
            <Field
              className="unit-form-input"
              name="birth"
              placeholder="дата рождения"
            />
            <Field
              className="unit-form-input"
              name="dateMeet"
              type="date"
              placeholder="дата знакомства"
            />
            <Field
              className="unit-form-input"
              name="link"
              placeholder="ссылка на соц сеть"
            />
            {errors.link && touched.link && <p>{errors.link}</p>}

            <Field
              className="unit-form-input"
              name="whereMeet"
              placeholder="место встречи"
            />
            <Field
              className="unit-form-input"
              component="select"
              name="typeMeet"
            >
              <option disabled>тип знакомства</option>
              <option value="live">live</option>
              <option value="ether">ether </option>
            </Field>

            <button type="submit">create</button>
            {errors && touched && (
              <p>
                birth: {errors.birth} <br />
                datemeet: {errors.dateMeet} <br />
                link: {errors.link} <br />
                name: {errors.name} <br />
                surname: {errors.surname} <br />
                typemeet: {errors.typeMeet} <br />
                wheremeet: {errors.whereMeet} <br />
              </p>
            )}
          </Form>
        )}
      </Formik>
    </>
  )
}
