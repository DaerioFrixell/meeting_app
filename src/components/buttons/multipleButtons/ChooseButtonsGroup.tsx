import "./chooseButtonsGroup.scss";
import { Field, FieldProps } from "formik";
import { FC, Fragment } from 'react';
import { ChooseButtonsGroup_T } from "./chooseButtonsGroup.type";
import { TitleCenter } from "../../UI/titleCenter/TitleCenter";


export const ChooseButtonsGroup: FC<ChooseButtonsGroup_T> = ({
  formikName,
  groupName,
  titles,
  type
}) => {
  return (
    <div className="choose-buttons-group">
      <div className="choose-buttons-group-wrapper ">
        <TitleCenter title={groupName} />

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
    </div>
  )
}