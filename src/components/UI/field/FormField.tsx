import './form.scss';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
import { FormField_T } from './formField.type';
import { LabelField } from './label/LabelField';
import classNames from 'classnames';

const cl = classNames;


/** 
 * Use *GroupButton component* for checkbox/radio.
 * 
 * Use *SelectField component* for select.
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
        <div className='form'>
          <LabelField label={label} />

          {touched && error && <h3 className="error">{error}</h3>}

          <input
            id={label}
            className={cl("form__input", className)}
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </div>
      )}
    </Field>
  );
};
