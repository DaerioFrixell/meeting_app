import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../types/UnitV1'
import { $host } from '../core/url'
import { SearchRequest_T } from '../model/settings/setting.type'
import { Response_T } from './api.type'


export const getUnitsRequest = async (search: SearchRequest_T): Promise<UnitV1[]> => {
  const response: Response_T<UnitV1[]> = await $host
    .get(`api/unit?limit=${search.limit}&page=${search.page}`);

  return response.data;
}

export const createUnitRequest = async (createUnit: UnitCreateV1): Promise<UnitV1> => {
  const response: Response_T<UnitV1> = await $host
    .post('api/unit', createUnit);

  return response.data;
}

export const updateUnitRequest = async (updateUnit: UnitUpdateV1): Promise<UnitV1> => {
  const response: Response_T<UnitV1> = await $host
    .put('api/unit', updateUnit);

  return response.data
}

export const deleteUnitRequest = async (id: number): Promise<string> => {
  return await $host.delete(`api/unit/${id}`);
}