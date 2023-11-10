import "./scaleCompletly.scss";
import { FC } from "react";
import { goalObj } from "../../../model/something/some.selector";
import {
  getCurrentCountUnitsSelector,
} from "../../../model/unit/unit.selectors";
import { useSelector } from "react-redux";
import { getUnitCountSelector } from "../../../model/user/user.selectors";

export const ScaleCompletly: FC = () => {
  const countUits: number = getUnitCountSelector;
  const currentUnits: number = useSelector(getCurrentCountUnitsSelector);
  const completlyPercent: number = Math.floor(currentUnits / countUits * 100);

  console.log("countUits: ", countUits)
  return (
    <div className="gs-inner">
      <div className="gs-inner__calcucation">
        {goalObj.period.map(perion => <p>{perion}</p>)}
        {goalObj.count.map(count => <p>{Math.floor(count)}</p>)}
      </div>

      <div className="gs-inner__process">
        <p>
          completly {completlyPercent}%
        </p>

        <p>
          {currentUnits} из {countUits}
        </p>
      </div>
    </div>
  )
}

