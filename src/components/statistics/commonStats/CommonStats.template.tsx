import './commonStats.scss';
import { FC } from 'react';
import { Statuses } from '../../statuses/Statuses';

type CommonStatsOnlineType = {
  statsType: string
  valueArray: number[]
}
export const CommonStatsTemplate: FC<CommonStatsOnlineType> = ({
  statsType,
  valueArray
}) => {
  return (
    <div className="common-stats">
      <p className="common-stats__subtitle">
        {statsType}
      </p>

      <div className="common-stats__marks">
        <Statuses />

        {valueArray.map((value: number) => (
          <p>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};