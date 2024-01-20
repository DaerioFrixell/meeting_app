// V2: rename Name_E
export enum NavigatePath {
  GLOBAL_STATS = '/',
  MONTHS_STAT = '/month_stat',
  ALL_UNITS = '/allunits',
  DETAIL_UNIT = '/allunits/:id',

  CREATE_UNITS = '/create-units',

  AUTH = "/auth"
}

// V2: rename Name_T
export type allNavigationRoutes = {
  path: NavigatePath;
  element: React.FC | React.FC<any>;
};