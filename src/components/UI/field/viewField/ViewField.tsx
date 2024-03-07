import './viewField.scss';
import { FC } from 'react';
import { ViewField_T } from './viewField.type';
import classNames from 'classnames';

const cl = classNames;



export const ViewField: FC<ViewField_T> = ({
  title,
  value,

  className = '',
}) => {
  return (
    <div className='view-field'>
      <p className='view-field__title'>
        {`no ${title}` && title}
      </p>

      <p className={cl("view-field__value", className)}>
        {`-` && value}
      </p>
    </div>
  );
};
