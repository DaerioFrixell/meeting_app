import "./scaleCompletly.scss";
import { FC, useEffect, useState } from "react";
import { goalObj } from "../../../model/something/some.selector";
import { getCountAllUnitsGoalSelector, getCountAllUnitsSelector } from "../../../model/user/user.selectors";

export const ScaleCompletly: FC = () => {
  /** 
   * процент завершения цели.
   */
  const [completlyPercent, setCompletlyPercent] = useState(0)

  /** 
   * Целевое количество Units на текущий год.
   */
  const goalCountUits: number = getCountAllUnitsGoalSelector();

  /** 
   * Фактическое количество Units за текущий год.
   */
  const currentUnits: number = getCountAllUnitsSelector;

  useEffect(() => {
    if (goalCountUits === 0) {
      setCompletlyPercent(0);
    } else {
      setCompletlyPercent(Math.floor(currentUnits / goalCountUits * 100));
    }
  }, [])


  return (
    <div className="gs-inner">
      <div className="gs-inner__calcucation">
        {goalObj.period.map(period =>
          <p key={period}>
            {period}
          </p>
        )}

        {goalObj.count.map(count =>
          <p key={count}>
            {Math.floor(count)}
          </p>
        )}
      </div>

      <div className="gs-inner__process">
        <p>
          {/* Вынести статику в staticData. */}
          completly {completlyPercent}%
        </p>

        <p>
          {currentUnits} из {goalCountUits}
        </p>
      </div>
    </div>
  );
}

