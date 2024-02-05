import "./commonInfo.scss";
import { FC, useContext } from "react";
import { getUnitCountSelector } from "../../../model/unit/unit.selectors";
import { ScaleCompletly } from "../scaleCompletly/scaleCompletly";
import { ChangePeriod } from "../changePeriod/ChangePeriod";
import { Button } from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths_E } from "../../../core/routing/type";
import { staticData } from "../../../staticData/staticData";
import { ChangePeriodContext } from "../../../model/user/user.context";

export const CommonInfo: FC = () => {
  const navigate = useNavigate();

  const { setSelectValue } = useContext(ChangePeriodContext);

  const year: number = new Date().getFullYear();
  const goalCountUits: number = getUnitCountSelector;

  const changePeriod = async (e: any) => {
    const chooseYear = e.target.value;
    setSelectValue(chooseYear);
  }

  const goToMonthStats = () => {
    navigate(RoutePaths_E.MONTHS_STAT);
  };

  return (
    <section className="common-info">
      <div>
        <div className="common-info__goal">
          <span>{staticData.statistics.global.goalPart1}</span>

          <span> {goalCountUits}</span>

          <span> {staticData.statistics.global.goalPart2}</span>

          <span> {year} {staticData.statistics.global.goalPart3}</span>
        </div>

        <ScaleCompletly />
      </div>

      <div className="common-info__inner-item">
        <ChangePeriod choosePeriod={changePeriod} />

        <Button
          buttonsName={"по месяцам"}
          onClick={goToMonthStats}
        />
      </div>
    </section>
  )
}