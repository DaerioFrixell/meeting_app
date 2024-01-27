import { RoutePaths_E } from "../../core/routing/type";


export const noAuthLink = [
    {
        to: RoutePaths_E.AUTH,
        title: 'auth',
    },
];

export const authLinks = [
    {
        to: RoutePaths_E.GLOBAL_STATS,
        title: 'main',
    },
    {
        to: RoutePaths_E.ALL_UNITS,
        title: 'all units',
    },
    {
        to: RoutePaths_E.CREATE_UNITS,
        title: 'add unit',
    },
];