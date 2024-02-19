import { Description } from '../../components/description/Description';
import { MonthStats } from '../../components/monthStat/MonthStat';
import { UnitForm } from '../../components/unitForm/UnitForm';
import { DetailViewUnit } from '../../components/unitList/DetailViewUnit';
import { AllUnits } from '../../page/allUnits/AllUnits';
import { AuthPage } from '../../page/auth/Auth.page';
import { GlobalStats } from '../../page/globalStats/GlobalStats';
import { RoutePaths_E, Route_T } from './type';


export const commonRoutes: Route_T[] = [
  {
    path: RoutePaths_E.DESCRIPTION,
    element: Description
  }
];

export const unAuthRoutes: Route_T[] = [
  ...commonRoutes,
  {
    path: RoutePaths_E.AUTH,
    element: AuthPage,
  }
];

export const authRoutes: Route_T[] = [
  ...commonRoutes,
  {
    path: RoutePaths_E.GLOBAL_STATS,
    element: GlobalStats,
  },
  {
    path: RoutePaths_E.ALL_UNITS,
    element: AllUnits,
  },
  {
    path: RoutePaths_E.DETAIL_UNIT,
    element: DetailViewUnit,
  },
  {
    path: RoutePaths_E.CREATE_UNITS,
    element: UnitForm,
  },
  {
    path: RoutePaths_E.MONTHS_STAT,
    element: MonthStats,
  },
];

