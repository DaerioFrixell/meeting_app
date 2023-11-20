import './unitForm.scss';
import { FC } from 'react';
import { Form, Formik, Field } from 'formik';
import { useAction } from '../../hooks/useAction';
import { FormField } from '../UI/field/FormField';
import { SignupSchemaFormData, initialFormDataValues } from './formData';

export const UnitForm: FC = () => {
  const { createUnitV1 } = useAction();

  return (
    <Formik
      initialValues={initialFormDataValues}
      validationSchema={SignupSchemaFormData}
      onSubmit={(values, actions) => {
        /** здесь можно ...values сделать же просто, не? */
        createUnitV1({
          status: null,
          name: values.name,
          surname: values.surname,
          birth: values.birth,
          dateMeet: values.dateMeet,
          link: values.link,
          whereMeet: values.whereMeet,
          typeMeet: values.typeMeet,
        });

        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ errors }) => (
        <Form className="unit-form">
          <div className="unit-form__block">
            <div className="unit-form__block__one">
              <p>about unit</p>

              <FormField
                label="имя"
                name="name"
                placeholder="имя" />

              <FormField
                label="фамилия"
                name="surname"
                placeholder="фамилия"
              />

              <FormField
                label="дата рождения"
                name="birth"
                placeholder="дата рождения"
                type="date"
              />

              <FormField
                label="дата знакомства"
                name="dateMeet"
                placeholder="дата знакомства"
                type="date"
              />
            </div>

            <p>links</p>

            <div className="unit-form__block__two">
              <FormField
                label="any link"
                name="link"
                placeholder="любая ссылка на unit"
              />

              <p>about meet</p>

              <FormField
                label="место встречи"
                name="whereMeet"
                placeholder="место встречи"
              />

              {/* должна быть группа из 2х элементов с возможностью расшириться */}
              <h2>typeMeet</h2>

              <Field
                className="unit-form-input"
                component="select"
                name="typeMeet"
              >
                <option disabled>тип знакомства</option>
                <option value="live">live</option>
                <option value="ether">ether </option>
              </Field>

              {errors.typeMeet ? <p> {errors.typeMeet}</p> : null}
            </div>
          </div>

          <div className="submit-buttons">
            <button
              disabled={Object.entries(errors).length !== 0}
              className={
                (Object.entries(errors).length === 0)
                  ? "button button-create"
                  : "button button-create disable-btn"
              }
              type="submit"
            >
              Create
            </button>

            <button className="button button__cancel">Clear form</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
