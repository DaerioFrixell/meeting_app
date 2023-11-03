import './monthStat.scss';
import { FC } from 'react';
import { allMonthes } from '../../staticData/date';
import { MonthStatsData, MonthStatsTitle } from './type';

export const MonthStats: FC = () => {
  const zeroArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const data: MonthStatsData = [
    {
      title: MonthStatsTitle.MONTH,
      data: allMonthes,
    },
    {
      title: MonthStatsTitle.ALL,
      data: zeroArray,
    },
    {
      title: MonthStatsTitle.NEGATIVE,
      data: zeroArray,
    },
    {
      title: MonthStatsTitle.POSITIVE,
      data: zeroArray,
    },
  ];

  return (
    <div className="month">
      <p className='month-inner__element'>год: 0000</p>
      <p className='month-inner__element'>всего: 0000</p>
      <div className="month-inner">
        {data.map(d => (
          <div className="">
            <p className="month-inner__title">
              {d.title}
            </p>

            {d.data?.map(newD =>
              <p className='month-inner__element'>{newD ? newD : 0}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
