/** deprecated! */
export const apiV1 = "api/";

// TO DO: Заапдейтить все апи на 2 версию.
export const apiV2 = "apiV2/";

export const endpoints = {
  statistic: "statistic/",
  unit: "unit/",
  user: "user/"
}

export const path = {
  statistic: {
    getStat: "count-stat-unit",
    getUnitCount: "count-unit",
  },
  unit: {
    /** post method */
    create: "",
    /** put method */
    update: "",
    /** delete method */
    delete: "",
    /** no api */
    getOne: "get-one",
    getPart: ""
  },
  user: {
    create: "create",
    update: "update",
    delete: "delete",
    getOne: "get-one",
  }
}

export const queryParam = {
  statistic: {
    year: "?year="
  },
  unit: {
    limit: "?limit=",
    page: "&page=",
    id: "?id="
  }
}
