
import { createSelector } from "@reduxjs/toolkit";
import { InitState } from "../unitTypes";
import { RootState } from "../../core/store";

/** type неверный. Должен быть InitUnitState! */
const getUnitState = (state: RootState): InitState => state.unit;

export const unitSelector = createSelector(getUnitState, (unitState) => {
  return unitState.units
})


