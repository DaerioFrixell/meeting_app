import { RoutePaths_E } from "../../core/routing/type";


/**
 * Список ссылок для любого пользователя.
 */
export const commonLinks = [
    {
        to: RoutePaths_E.DESCRIPTION,
        title: 'description',
    },
];

/**
 * Список ссылок для неавторизированного пользователя.
 */
export const noAuthLink = [
    {
        to: RoutePaths_E.AUTH,
        title: 'auth',
    },
    ...commonLinks
];

/**
 * Список ссылок для авторизированного пользователя.
 */
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
    ...commonLinks
];