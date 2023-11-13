/**TO DO сделать объектом. ЗАчем массив из 1 элемента?)))
 * А вообще можно Enum сделать и вынести его в MockData, т.к. это по проекту будет использоваться.
 * А сами поля вообще не Enum можно делать, а через i18n
 */
export const unitFieldsV1 = {
  id: 'id',
  number: '№',
  status: 'status',
  name: 'name',
  surename: 'surename',
  wasOld: 'was old',
  dateMeet: 'date meet',
  link: 'link',
  whereMeet: 'where meet',
  typeMeet: 'type meet'
};


export const unitFieldsV2 = [
  {
    id: 'id',
    number: '№',
    status: {
      title: 'status',
      number: '№',
      metric: 'metric',
      mark: 'status mark',
    },
    name: 'name',
    surename: 'surename',
    wasOld: 'was old',
    dateMeet: 'date meet',
    links: {
      title: 'links',
      vk: 'vk',
      inst: 'inst',
      telegram: 'tg',
      otherLink: 'other link',
    },
    whereMeet: 'where meet',
    typeMeet: 'type meet',
    createAt: 'created',
    updateAt: 'updated',
  },
];
