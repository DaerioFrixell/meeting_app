import { Field, FieldProps } from "formik";
import "./inputs.scss";
import { FC, Fragment } from 'react';

export type Checkbox_T = {
  name: string
  values: string[]
}

export const Checkbox: FC<Checkbox_T> = ({ values, name }) => {
  return (
    <Field className="checkbox" name={name}>
      {({ field }: FieldProps) => values.map(v =>
        <div className="checkbox-container" key={v}>
          <input
            id={v}
            className="checkbox__input"
            type="checkbox"
            {...field}
            value={v} />

          <label className="checkbox__label" htmlFor={v}>{v}</label>
        </div>
      )}
    </Field>


  )

}


{/* <Field name={name}>
            {({ field }: FieldProps) => values.map(value => {
          <Fragment key={value}>
            <div className='checkbox-wrapper' >
              <input
                      id={value}
                type="checkbox"
                {...field}
                value=''
              />

              <label htmlFor={value}>{optw[0]}</label>
            </div>
          </Fragment>
        })
        }
      </Field > */}