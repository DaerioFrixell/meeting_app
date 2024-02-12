import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../types/UnitV1'
import { $host } from '../core/api'
import { SearchRequest_T } from '../model/settings/setting.type'
import { Response_T } from '../core/api.type'
import { apiV1, endpoints, path, queryParam } from '../core/api.setting'


export const getUnitsRequest = async (search: SearchRequest_T): Promise<UnitV1[]> => {
  const urlPath = apiV1 + endpoints.unit + path.unit.getPart;

  const response: Response_T<UnitV1[]> = await $host
    .get(urlPath + queryParam.unit.limit + search.limit + queryParam.unit.page + search.page);

  return response.data;
}

export const createUnitRequest = async (createUnit: UnitCreateV1): Promise<UnitV1> => {
  const urlPath = apiV1 + endpoints.unit + path.unit.create;

  const response: Response_T<UnitV1> = await $host
    .post(urlPath, createUnit);

  return response.data;
}

export const updateUnitRequest = async (updateUnit: UnitUpdateV1): Promise<UnitV1> => {
  const urlPath = apiV1 + endpoints.unit + path.unit.update;

  const response: Response_T<UnitV1> = await $host
    .put(urlPath, updateUnit);

  return response.data
}

export const deleteUnitRequest = async (id: number): Promise<string> => {
  const urlPath = apiV1 + endpoints.unit + path.unit.delete;

  return await $host.delete(urlPath + id);
}