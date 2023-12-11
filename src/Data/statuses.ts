export enum StatusMark {
  C = "C",
  D = "D",
  CM = "CM",
  CN = "CN",
  CA = "CA",
  OWS = "OWS",
  A1s = "A1s",
  A2s = "A2s",
  A3s = "A3s",
  ABD = "ABD"
}

export const statTitles: string[] = Object.keys(StatusMark);

export enum StatusMetric {
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

export type Status = {
  number: string | number
  metric: StatusMetric
  mark: StatusMark
}
