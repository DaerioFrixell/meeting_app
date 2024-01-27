export enum RoutePaths_E {
  GLOBAL_STATS = '/',
  MONTHS_STAT = '/month_stat',
  ALL_UNITS = '/allunits',
  DETAIL_UNIT = '/allunits/:id',

  CREATE_UNITS = '/create-units',

  AUTH = "/auth"
}

export type Route_T = {
  path: RoutePaths_E;
  element: React.FC | React.FC<any>;
};

