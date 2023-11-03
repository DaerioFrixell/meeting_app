import { FC } from 'react';
import './monthStat.scss';

export const MonthStats: FC = () => {
  // список по месяцам в столбик
  // заголовки: month/all/negative/positive

  const monthTitle = [
    'month',
    'all',
    'negative',
    'positive',
  ];
  const months = [
    'january',
    'febr',
    'mar',
    'apr',
    'may',
    'june',
    'july',
    'aug',
    'sept',
    'oct',
    'nov',
    'dec',
  ];

  const data = [
    {
      title: 'month',
      data: [
        'january',
        'febr',
        'mar',
        'apr',
        'may',
        'june',
        'july',
        'aug',
        'sept',
        'oct',
        'nov',
        'dec',
      ],
    },
    {
      title: 'all',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
    },
    {
      title: 'positive',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
    },
    {
      title: 'negative',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
    },
  ];

  return (
    <div className="month">
      <h2> month stat</h2>

      <div className="month__inner">
        {data.map((d) => (
          <div className="">
            <p className="month__title">
              {d.title}
            </p>
            {d.data?.map((newD) =>
              newD ? (
                <p>{newD}</p>
              ) : (
                <p>12</p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
