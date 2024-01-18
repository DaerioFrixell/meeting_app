import { RootState } from "../../core/store";

export const pageSelector = (state: RootState) => state.setting.searchRequest.page