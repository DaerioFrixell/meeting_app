import { MonthStats } from '../../components/monthStat/MonthStat';
import { UnitForm } from '../../components/unitForm/UnitForm';
import { DetailViewUnit } from '../../components/unitList/DetailViewUnit';
import { AllUnits } from '../../page/allUnits/AllUnits';
import { GlobalStats } from '../../page/globalStats/GlobalStats';
import { NavigatePath, allNavigationRoutes } from './type';

export const allRoutes: allNavigationRoutes[] =
  [
    {
      path: NavigatePath.GLOBAL_STATS,
      element: GlobalStats,
    },
    {
      path: NavigatePath.ALL_UNITS,
      element: AllUnits,
    },
    {
      path: NavigatePath.DETAIL_UNIT,
      element: DetailViewUnit,
    },
    {
      path: NavigatePath.CREATE_UNITS,
      element: UnitForm,
    },
    {
      path: NavigatePath.MONTHS_STAT,
      element: MonthStats,
    },
  ];