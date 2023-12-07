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

          {/* DO: сделать UI инпут или хотя бы стили для инпута */}
          {touched && error && <h3 className="error">err: {error}</h3>}

          <input
            id={label}
            className={`unit-form-input ${className}`} // DO: className подключить
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </div>
      )}
    </Field>
  );
};
