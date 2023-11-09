
import { createSelector } from "@reduxjs/toolkit";
import { UnitInitState } from "../unitTypes";
import { RootState } from "../../core/store";

const getUnitState = (state: RootState): UnitInitState => state.unit;

export const unitSelector = createSelector(getUnitState, (unitState: UnitInitState) => {
  return unitState.units
})


