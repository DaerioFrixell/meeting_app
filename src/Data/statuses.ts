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

/** TO DO сделать заглавными */
export enum StatusMetric {
  contact = 'contact',
  disregarting = 'disregarting',
  contact_married = 'contact married',
  conact_no = 'conact no',
  contact_active = 'contact active',
  one_way_street = 'a one-way street',
  active_first_step = 'active first step',
  active_second_step = 'active second step',
  active_third_step = 'active third step',
  active_breakdown = 'active breakdown'
}

export type Status = {
  number: string | number
  metric: StatusMetric
  mark: StatusMark
}
