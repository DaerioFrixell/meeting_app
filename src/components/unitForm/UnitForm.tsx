import './unitForm.scss';
import { FC } from 'react';
import { Form, Formik } from 'formik';
import { useAction } from '../../hooks/useAction';
import { FormField } from '../UI/field/FormField';
import { SignupSchemaFormData, initialFormDataValues } from './formData';
import { GroupButtons } from '../UI/inputs/GroupButtons';
import { staticData } from '../../staticData/staticData';

export const UnitForm: FC = () => {
  const { createUnitV1 } = useAction();

  return (
    <Formik
      initialValues={initialFormDataValues}
      validationSchema={SignupSchemaFormData}
      onSubmit={(values, actions) => {
        /** DO: здесь можно ...values сделать же просто, не? */
        createUnitV1({
          name: values.name,
          surname: values.surname,
          birth: values.birth,
          dateMeet: values.dateMeet,
          link: values.link,
          whereMeet: values.whereMeet,
          typeMeet: values.typeMeet,

          status: null,
        });

        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ errors }) => (
        <Form className="unit-form">
          <div className="unit-form__block">
            <div className="unit-form__block__one">
              <h3>{staticData.unitForm.blockTitle.aboutUnit}</h3>

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

            <div className="unit-form__block__two">
              {/* v2: добавить возможность добавлять ссылки на разные места. */}
              <h3>{staticData.unitForm.blockTitle.linkList}</h3>
              <FormField
                label="any link"
                name="link"
                placeholder="любая ссылка на unit"
              />

              <h3>{staticData.unitForm.blockTitle.aboutMeet}</h3>
              <FormField
                label="место встречи"
                name="whereMeet"
                placeholder="место встречи"
              />

              <GroupButtons
                formikName="typeMeet"
                title="type Meet"
                buttonsNames={["online", "offline"]}
              />
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
              {staticData.UI.buttons.create}
            </button>

            <button className="button button__cancel">{staticData.UI.buttons.clearForm}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
