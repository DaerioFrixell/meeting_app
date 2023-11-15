import { UnitRequestV1 } from "../../Data/UnitV1";
import * as Yup from 'yup';
import dayjs from 'dayjs';

export const initialFormDataValues: UnitRequestV1 = {
  name: '',
  surname: '',
  birth: '',
  dateMeet: '',
  link: '',
  whereMeet: '',

  typeMeet: 'ether',
  status: '-',
};

const getMinBirth  = () => {
  const date = dayjs();
  return date.subtract(10, 'year')
}

export const SignupSchemaFormData = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Введи имя'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .required('Введи фамилию'),
  birth: Yup.date()
    .max(getMinBirth(), "Слишком маленький возраст!")
    .required('Выбери дату рождения.'),
  dateMeet: Yup.date()
    .max(dayjs(), "Дата встречи не должна быть в будущем.")
    .required('Выбери дату встречи.'),
  link: Yup.string()
    .required('Укажи ссылку.'),
  whereMeet: Yup.string()
    .required('Укажи место встречи.'),
});