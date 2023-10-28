import { UnitForm } from '../../components/unitForm/UnitForm';
import { AllUnits } from '../../page/allUnits/AllUnits';
import { GlobalStats } from '../../page/globalStats/GlobalStats';

type allNavigationRoutes = {
    path: string;
    element: React.FC;
};

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
];
