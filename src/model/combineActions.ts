import * as UnitActionCreator from "./unit/unitActions";
import * as StatsActionCreator from "./user/user.action";
import * as SettingActionCreator from "./settings/setting.actions";


const actionCreators = {
  ...UnitActionCreator,
  ...StatsActionCreator,
  ...SettingActionCreator,
}

export default actionCreators;