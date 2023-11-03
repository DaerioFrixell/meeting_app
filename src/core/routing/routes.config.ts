import { MonthStats } from '../../components/monthStat/MonthStat';
import { UnitForm } from '../../components/unitForm/UnitForm';
import { AllUnits } from '../../page/allUnits/AllUnits';
import { GlobalStats } from '../../page/globalStats/GlobalStats';

type allNavigationRoutes = {
  path: string;
  element: React.FC;
};

export enum NavigatePath {
  MONTH_STAT = '/month_stat',
}

export const allRoutes: allNavigationRoutes[] = [
  {
    path: '/',
    element: GlobalStats,
  },
  {
    path: '/allunits',
    element: AllUnits,
  },
  {
    path: '/create_unit',
    element: UnitForm,
  },
  {
    path: NavigatePath.MONTH_STAT,
    element: MonthStats,
  },
];
