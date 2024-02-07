import './selectField.scss';
import { Field } from 'formik';
import { FC } from 'react';
import { SelectField_T } from './selectField.type';
import { LabelField } from '../label/LabelField';


/** 
 * Select for any form 
 */
export const SelectField: FC<SelectField_T> = ({
  nameField,
  label,
  options,

  className = '',
}) => {
  return (
    <>
      <LabelField label={label} />

      <Field
        className={`default-select ${className}`}
        as="select"
        name={nameField}
        {...Field} >
        {options.map(value => (
          <option
            key={value}
            value={value}>
            {value}
          </option>
        ))}
      </Field>
    </>
  );
};
