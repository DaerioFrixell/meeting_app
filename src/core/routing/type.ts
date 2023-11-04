export enum NavigatePath {
  GLOBAL_STATS = '/',
  MONTHS_STAT = '/month_stat',
  ALL_UNITS = '/allunits',

  CREATE_UNITS = '/create-units'
}

export type allNavigationRoutes = {
  path: NavigatePath;
  element: React.FC;
};