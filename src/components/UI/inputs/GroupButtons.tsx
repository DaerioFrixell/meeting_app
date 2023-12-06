import "./groupButtons.scss";
import { Field, FieldProps } from "formik";
import { FC, Fragment } from 'react';

export type GroupButtons_T = {
  formikName: string
  title: string
  buttonsNames: string[]
}

/** DO: сделать возможность использовать и для checkboxes */
export const GroupButtons: FC<GroupButtons_T> = ({ buttonsNames, formikName, title }) => {
  return (
    <div className="group-buttons-wrapper">
      <h3>{title}</h3>
      <Field name={formikName}>
        {({ field }: FieldProps) => buttonsNames.map(buttonName =>
          <div key={buttonName} className="checkbox-or-radio">
            <Fragment >
              <input
                id={buttonName}
                className="checkbox-or-radio__input"
                type="radio"
                {...field}
                value={buttonName} />

              <label
                className="checkbox-or-radio__label"
                htmlFor={buttonName}>
                {buttonName}
              </label>
            </Fragment>
          </div>
        )}
      </Field>
    </div>
  )
}