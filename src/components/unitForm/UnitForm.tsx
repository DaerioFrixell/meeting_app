import './unitForm.scss';
import { Form, Formik, Field, FormikErrors } from 'formik';
import { calcWasOld } from '../../middleware/calcOldMiddleware';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UnitRequestV1 } from '../../Data/UnitV1';
import { FC } from 'react';
import { FormField } from '../UI/field/FormField';

type errorType = {
  link: string;
  name: string;
};

export const UnitForm: FC = () => {
  const { units } = useTypedSelector((state) => state.unit);
  const { createUnitV1 } = useAction();
  const unitLinks = units.map((u) => u.link);

  const initialValues: UnitRequestV1 = {
    name: '',
    surname: '',
    birth: '',
    dateMeet: '',
    link: '',
    typeMeet: 'ether',

    whereMeet: '',
    status: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let checkLinks = unitLinks.filter((u) => u === values.link);
        const errors: FormikErrors<errorType> = {};

        if (checkLinks.length === 1 && checkLinks[0] !== '') {
          errors.link = 'link add yet';
        }

        if (values.name === '') {
          errors.name = 'name is empty';
        }

        return errors;
      }}
      onSubmit={(values, actions) => {
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
      {({ errors, touched }) => (
        <Form className="unit-form">
          <div className="unit-form__block">
            <div className="unit-form__block">
              <div className="unit-form__block__one">
                <p>about unit</p>

                <FormField label="имя" name="name" placeholder="имя" />

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

                {/* группа из 2х элементов с возможностью расшириться */}
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
          </div>

          <div className="submit-buttons">
            <button
              disabled={!errors}
              className="button button-create"
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
