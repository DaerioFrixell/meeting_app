import { createSelector } from "@reduxjs/toolkit";
import { UnitInitState_T } from "../unitTypes";
import { RootState } from "../../core/store";
import { mockCountUnitGoal } from "../../staticData/others";


const getUnitState = (state: RootState): UnitInitState_T => state.unit;

/**
 * Возвращается список Units.
 */
export const unitSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.units;
});

//TO DO: Использовать сделанный селектор для возвращения количества всех Unit.
export const getUnitCountSelector: number = mockCountUnitGoal;