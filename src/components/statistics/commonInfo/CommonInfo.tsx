import "./commonInfo.scss";
import { FC } from "react";
import { getUnitCountSelector } from "../../../model/unit/unit.selectors";

export const CommonInfo: FC = () => { 
  const year: number = new Date().getFullYear();
  const countUits: number = getUnitCountSelector;

  return (
    <div className="global-stats__general-info">
    <p className="global-stats__general-info__goal">
      Goal: meeting {countUits} units per {year} year
    </p>
  </div>
  )
}