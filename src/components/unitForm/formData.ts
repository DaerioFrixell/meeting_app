import { fakeUnitsV1 } from '../../mocdb/mocdb';
import { UnitCreateV1, UnitV1 } from '../../Data/UnitV1';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const data: UnitV1[] = fakeUnitsV1;
const unitLinks = data.map(u => u.link)
/** 
 * Получение списка уникальных ссылок для валидации. 
 * DO: sting[] вроде. Убрать any.
 */
export const getLinkList = (links: any[]) => {
  return links
}

/* DO: т.к. typeMeet, то сделай изначально пустой строкой и если user не нажал на кнопку,
 * то будет ошибка, т.к. нужно выбрать что-то. Иначе непонятно какое значение будет выбрано. 
 */
export const initialFormDataValues: UnitCreateV1 = {
  name: '',
  surname: '',
  birth: '',
  dateMeet: '',
  link: '',
  whereMeet: '',

  typeMeet: 'online',
  status: '-',
};

const getMinBirth = () => {
  const date = dayjs();
  return date.subtract(14, 'year')
}

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