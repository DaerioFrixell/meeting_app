export enum StatusMark_E {
  C = "C",
  D = "D",
  CM = "CM",
  CN = "CN",
  CA = "CA",
  OWS = "OWS",
  CA1s = "CA1s",
  CA2s = "CA2s",
  CA3s = "CA3s",
  ABD = "ABD"
}

export enum StatusMetric_E {
  CONTACT = 'contact',
  DISREGARATING = 'disregarting',
  CONTACT_MARRIED = 'contact married',
  CONTACT_NO = 'conact no',
  CONTACT_ACTIVE = 'contact active',
  ONE_WAY_STREET = 'a one-way street',
  ACTIVE_FISRT_STEP = 'active first step',
  ACTIVE_SECOND_STEP = 'active second step',
  ACTIVE_THIRD_STEP = 'active third step',
  ACTIVE_BREAKDOWN = 'active breakdown'
}

export type Status_T = {
  description: StatusMetric_E
  mark: StatusMark_E
}

export const statTitles: string[] = Object.keys(StatusMark_E);