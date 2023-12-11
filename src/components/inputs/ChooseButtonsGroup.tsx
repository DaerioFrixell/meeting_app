import "./chooseButtonsGroup.scss";
import { Field, FieldProps } from "formik";
import { FC, Fragment } from 'react';

export type ChooseButtonsGroup_T = {
  formikName: string;
  groupName: string;
  titles: string[];
  type: "checkbox" | "radio";
}

export const ChooseButtonsGroup: FC<ChooseButtonsGroup_T> = ({
  formikName,
  groupName,
  titles,
  type
}) => {
  return (
    <div className="choose-buttons-group">
      <h3>{groupName}</h3>

      <Field name={formikName}>
        {({ field }: FieldProps) => titles.map(buttonName =>
          <div key={buttonName} className="choose-button">
            <Fragment >
              <input
                id={buttonName}
                className="choose-button__input"
                type={type}
                {...field}
                value={buttonName}
              />

              <label
                className="choose-button__label"
                htmlFor={buttonName}
              >
                {buttonName}
              </label>
            </Fragment>
          </div>
        )}
      </Field>
    </div>
  )
}