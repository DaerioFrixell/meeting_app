import "./scaleCompletly.scss";
import { FC } from "react";
import { goalObj } from "../../../model/something/some.selector";
import { getCountAllUnitsGoalSelector, getCountAllUnitsSelector } from "../../../model/user/user.selectors";

export const ScaleCompletly: FC = () => {
  /** выбранное количество на текущий год */
  const goalCountUits: number = getCountAllUnitsGoalSelector;

  /** текущее количество за текущий год */
  const currentUnits: number = getCountAllUnitsSelector;

  /** TO DO сделать провку на ноль! */
  const completlyPercent: number = Math.floor(currentUnits / goalCountUits * 100);

  return (
    <div className="gs-inner">
      <div className="gs-inner__calcucation">
        {goalObj.period.map(period =>
          <p>
            {period}
          </p>
        )}

        {goalObj.count.map(count =>
          <p>
            {Math.floor(count)}
          </p>
        )}
      </div>

      <div className="gs-inner__process">
        <p>
          completly {completlyPercent}%
        </p>

        <p>
          {currentUnits} из {goalCountUits}
        </p>
      </div>
    </div>
  );
}

