import './viewField.scss';
import { FC } from 'react';
import { ViewField_T } from './viewField.type';


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

      <p className={`view-field__value ${className}`}>
        {`-` && value}
      </p>
    </div>
  );
};
