import "./chooseButtonsGroup.scss";
import { Field, FieldProps } from "formik";
import { FC, Fragment, useEffect } from 'react';
import { TitleCenter } from "../UI/titleCenter/TitleCenter";


// TO DO: удалить файл, когда сделаются все импорты. Так же удалить одноимённый .scss файл.
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
  useEffect(() => {
    console.warn("You are using deprecated path of component <ChooseButtonsGroup>. You need to use this import: .../component/buttons/multipleButtons...");

    if (titles.length > 5) {
      console.warn("You are using over 5 title values. You need to use <Select>, but not <ChooseButtonsGroup>");
    }
  }, [])
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