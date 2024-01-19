import "./commonInfo.scss";
import { FC } from "react";
import { getUnitCountSelector } from "../../../model/unit/unit.selectors";
import { ScaleCompletly } from "../scaleCompletly/scaleCompletly";
import { ChangePeriod } from "../changePeriod/ChangePeriod";

export const CommonInfo: FC = () => {
  const year: number = new Date().getFullYear();
  const goalCountUits: number = getUnitCountSelector;

  // V2: вынести в файл staticData всю статику.
  return (
    <div className="common-info">
      <p className="common-info__goal">
        Goal: meeting {goalCountUits} units per {year} year
      </p>

      <ScaleCompletly />

      <ChangePeriod />
    </div>
  )
}