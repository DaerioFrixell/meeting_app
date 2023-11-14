import { UnitRequestV1 } from "../../Data/UnitV1";
import * as Yup from 'yup';

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

export const SignupSchemaFormData = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('введи имя'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('введи фамилию'),
  birth: Yup.date()
    .max(Date.now() - 10 * 365 * 24 * 3600 * 1000, "не засоряй статистику мелкими.")
    .required('введи дату'),
  dateMeet: Yup.date()
    .max(Date.now(), "в будущем нельзя встретиться.")
    .required('введи дату'),
  link: Yup.string()
    .required('укажи ссылку'),
  whereMeet: Yup.string()
    .required('укажи место встречи'),
});

/** */