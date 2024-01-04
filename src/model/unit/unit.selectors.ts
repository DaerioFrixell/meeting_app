
import { createSelector } from "@reduxjs/toolkit";
import { UnitInitState_T } from "../unitTypes";
import { RootState } from "../../core/store";
import { mockCountUnitGoal } from "../../staticData/others";

const getUnitState = (state: RootState): UnitInitState_T => state.unit;
export const unitSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.units;
});

export const getUnitCountSelector: number = mockCountUnitGoal; // это переместить в Goal.Reducre нужно будут в будущем, когда он создастся.

export const getCurrentCountUnitsSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.units.length;
});

