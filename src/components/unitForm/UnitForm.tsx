import './unitForm.scss';
import { FC } from 'react';
import { Form, Formik } from 'formik';
import { useAction } from '../../hooks/useAction';
import { FormField } from '../UI/field/FormField';
import { SignupSchemaFormData, initialFormDataValues } from './formData';
import { ChooseButtonsGroup } from '../inputs/ChooseButtonsGroup';
import { Button } from '../buttons/Button';
import { staticData } from '../../staticData/staticData';


export const UnitForm: FC = () => {
  /** По дэфолту Unit создаётся со статусом <C> */
  const { createUnitV1 } = useAction();

  return (
    <Formik
      initialValues={initialFormDataValues}
      validationSchema={SignupSchemaFormData}
      onSubmit={(values, actions) => {
        createUnitV1({
          ...values
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
                label={staticData.unit.name}
                placeholder={staticData.unit.name}
                name="name"
              />

              <FormField
                label={staticData.unit.surname}
                placeholder={staticData.unit.surname}
                name="surname"
              />

              <FormField
                label={staticData.unit.birth}
                placeholder={staticData.unit.birth}
                name="birth"
                type="date"
              />

              <FormField
                label={staticData.unit.meeting.dateMeet}
                placeholder={staticData.unit.meeting.dateMeet}
                name="dateMeet"
                type="date"
              />
            </div>

            <div className="unit-form__block__two">
              {/* v2: добавить возможность добавлять ссылки на разные места. */}
              <h3>{staticData.unitForm.blockTitle.linksList}</h3>

              <FormField
                label={staticData.unit.links.anyLink}
                placeholder={staticData.unit.links.anyLink}
                name="link"
              />

              <h3>{staticData.unitForm.blockTitle.aboutMeet}</h3>

              <FormField
                label={staticData.unit.meeting.whereMeet}
                placeholder={staticData.unit.meeting.whereMeet}
                name="whereMeet"
              />

              <ChooseButtonsGroup
                groupName={staticData.unit.meeting.typeMeet}
                titles={[
                  staticData.unit.typeMeet.online,
                  staticData.unit.typeMeet.offline
                ]}
                formikName="typeMeet"
                type="radio"
              />
            </div>
          </div>

          <div className="buttons-block">
            <Button
              className={!!Object.entries(errors).length && "disable-btn"}
              buttonsName={staticData.buttons.create}
              disabled={!!Object.entries(errors).length}
              type={"submit"}
            />

            <Button
              className={"btn-clear"}
              buttonsName={staticData.buttons.clearForm}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
