import { UpdateUnit } from "../Data/Unit";
import { Unit } from "../Data/UnitV2";
import { Status, StatusMark, StatusMetric } from "../Data/statuses";
import { TypeMeet } from "../Data/typeMeet";

export const fakeUnitsV2: Unit[] = [
  {
    id: 1,
    number: "1",
    status: {
      number: 1,
      metric: StatusMetric.active_breakdown,
      mark: StatusMark.A1s
    },
    name: "girl1",
    surname: "surgirl1",
    birth: "2000-17-23",
    wasOld: "20",
    dateMeet: "2022-17-23",
    link: {
      vk: "vk.com/id1232132",
      inst: "no",
      telegram: "no",
      otherLink: "no"
    },
    createAt: "2022-17-23",
    updateAt: "2022-17-23",
    whereMeet: "asdasasd",
    typeMeet: TypeMeet.ONLINE
  },
  {
    id: 2,
    number: "2",
    status: {
      number: 1,
      metric: StatusMetric.active_breakdown,
      mark: StatusMark.A1s
    },
    name: "girl 2",
    surname: "surgirl 2",
    birth: "1999-11-23",
    wasOld: "22",
    dateMeet: "2022-05-23",
    link: {
      vk: "vk.com/id1asdasd",
      inst: "@asdasd",
      telegram: "@asd_asd",
      otherLink: "https://mySite.com"
    },
    createAt: "2022-17-23",
    updateAt: "2022-17-23",
    whereMeet: "treytr",
    typeMeet: TypeMeet.ONLINE
  },
]
export const fakeUnitsV1: UpdateUnit[] = [
  {
    id: 1,
    status: "EW3",
    name: "girl1",
    surname: "surgirl1",
    wasOld: 20,
    dateMeet: "2022-17-23",
    link: "vk.com/id1232132",
    vk: "vk.com/id1asdasd",
    inst: "@asdasd",
    telegram: "@asd_asd",
    whereMeet: "asdasasd",
    typeMeet: "ether"
  },
  {
    id: 2,
    status: "ASD2",
    name: "girl 2",
    surname: "surgirl 2",
    wasOld: 22,
    dateMeet: "2022-05-23",
    link: "vk.com/id1232132",
    vk: "vk.com/id1asdasd",
    inst: "@asdasd",
    telegram: "@asd_asd",
    whereMeet: "treytr",
    typeMeet: "ether"
  },
]


