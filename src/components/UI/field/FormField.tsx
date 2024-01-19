import './form.scss';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
import { FormField_T } from './formField.type';


/** 
 * Use *GroupButton component* for checkbox/radio 
 */
export const FormField: FC<FormField_T> = ({
  name,
  placeholder,
  label,
  type,
  className = '',
}) => {
  return (
    <Field name={name} {...Field}>
      {({ field, meta: { error, touched } }: FieldProps) => (
        <div>
          <label className="form-label" htmlFor={label}>
            {label}
          </label>

          {touched && error && <h3 className="error">{error}</h3>}

          <input
            id={label}
            className={`unit-form-input ${className}`} // V2: className подключить
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </div>
      )}
    </Field>
  );
};
