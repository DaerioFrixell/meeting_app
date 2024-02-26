import * as Yup from 'yup';
import dayjs from 'dayjs';
import { fakeUnitsV1 } from '../../mocdb/mocdb';
import { UnitCreateV1, UnitV1 } from '../../types/UnitV1';
import { TypeMeet } from '../../types/V2/typeMeetV2.type';
import { StatusMark_E } from '../../types/statuses.type';


// TO DO: зачем фейковые данные здесь?
const data: UnitV1[] = fakeUnitsV1;
const unitLinks = data.map(u => u.link)

export const getLinkList = (links: string[]) => {
  return links
}

export const initialFormDataValues: UnitCreateV1 = {
  status: StatusMark_E.C,
  name: '',
  surname: '',
  birth: '',
  dateMeet: '',
  link: '',
  whereMeet: '',
  typeMeet: TypeMeet.ONLINE,
};

const getMinBirth = () => {
  const date = dayjs();
  return date.subtract(14, 'year')
}

// TO DO: ерорры перенести в ./staticData
export const SignupSchemaFormData = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Введи имя'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .required('Введи фамилию'),
  birth: Yup.date()
    .max(getMinBirth(), 'Слишком маленький возраст!')
    .required('Выбери дату рождения.'),
  dateMeet: Yup.date()
    .max(dayjs(), 'Дата встречи не должна быть в будущем.')
    .required('Выбери дату встречи.'),
  link: Yup.string()
    .notOneOf(getLinkList(unitLinks), 'Такая ссылка уже есть.')
    .required('Укажи ссылку.'),
  whereMeet: Yup.string()
    .required('Укажи место встречи.'),
});