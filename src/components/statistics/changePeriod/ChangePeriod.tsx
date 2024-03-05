import "./changePeriod.scss";
import { FC } from "react";
import { allYears } from "../../../staticData/date";
import { staticData } from "../../../staticData/staticData";
import { ChangePeriod_T } from "./changePerio.type";


export const ChangePeriod: FC<ChangePeriod_T> = ({ choosePeriod }) => {
  return (
    <div className="change-period">
      <span>
        {staticData.statistics.global.changePeriod}
      </span>

      <select name="" id="" onChange={(e) => choosePeriod(e)}>
        {allYears.map(year =>
          <option key={year} defaultValue={2023} value={year} >
            {year}
          </option>)}
      </select>
    </div>
  );
};