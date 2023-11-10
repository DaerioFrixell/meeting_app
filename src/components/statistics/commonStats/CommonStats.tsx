import './commonStats.scss';
import { globalStatistics } from '../../../model/something/some.selector';
import { FC } from 'react';

export const CommonStats: FC = () => { 
  const statusesList = globalStatistics.map((glStat: any) => glStat
    .statuses.map((status: any) => (
      <p key={status}>{status}</p>
    )));

  return (
      <div className="global-stats__block">
        <p className="global-stats__block__subtitle">
          online
        </p>

        {globalStatistics.map((globStat: any) => (
          <div className="global-stats__block__marks">
            {statusesList}

            {globStat.online.map((onlineValue: any) => (
              <p>
                {onlineValue}
              </p>
            ))}
          </div>
        ))}

        <p className="global-stats__block__subtitle">offline</p>

        {globalStatistics.map((globStat: any)  => (
          <div className="global-stats__block__marks">
            {statusesList}

            {globStat.offline.map((offlineValue: any) => (
              <p>
                {offlineValue}
              </p>
            ))}
          </div>
        ))}
      </div>
  );
};
