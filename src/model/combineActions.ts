import * as UnitActionCreator from "./unitActions";
import * as StatsActionCreator from "./user/user.action";

const actionCreators = {
  ...UnitActionCreator,
  ...StatsActionCreator,
}

export default actionCreators