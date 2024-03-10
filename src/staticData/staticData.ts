export const staticData = {
  login: "",
  loading: "идёт загрузка",
  paginatorTitle: "всего:",
  unit: {
    status: {
      title: "статус",
      a: "расшифровка", // V2
      b: "описание" // V2
    },
    name: "имя",
    surname: "фамилия",
    birth: "дата рождения",
    typeMeet: {
      online: "online",
      offline: "offline",
    },
    links: {
      anyLink: "любая ссылка",
      vk: "vk",
      inst: "inst",
      tg: "telegram",
      other: "other links"
    },
    meeting: {
      dateMeet: "дата встречи",
      whereMeet: "где познакомились",
      typeMeet: "выберете тип знакомства"
    }
  },
  unitForm: {
    blockTitle: {
      aboutUnit: "about unit",
      linksList: "список ссылок",
      aboutMeet: "о встрече"
    },
    form: {
      dateMeet: "дата знакомства",
      whereMeet: "место встречи",
      typeMeet: "тип встречи",
      typeMeetValue: {
        online: "online",
        offline: "offline",
      }
    },
    placeholders: {
      status: "статус",
      name: "введите имя",
      surname: "введите фамилию",
      birth: "выберете дату рождения",
      linkVk: "укажите ссылку на Vk",
      linkInst: "укажите ссылку на Inst",
      linkTg: "укажите ссылку на Telegram",
      linkOther: "укажите ссылку на Unit",
      dateMeet: "выберете дату встречи",
      whereMeet: "укажите место встречи"
    },
    errors: {
      noName: "не указано имя",
      noSurname: "не указана фамилия",
      link: {
        execute: "такая ссылка уже добавлена"
      },
      birth: {
        empty: "не указана дата рождения",
        invalid: "некорректная дата рождения"
      },
      dateMeet: {
        empty: "не указана дата встречи",
        invalid: "некорректная дата встречи"
      }
    }
  },
  unitList: {
    title: "список всех"
  },
  statistics: {
    global: {
      title: "общая статистика",
      goalPart1: "Goal: meeting",
      goalPart2: "units per",
      goalPart3: "year",
      completly: "завершено",
      changePeriod: "выберете период",
      pDay: "в/день",
      pMonth: "в/мес"
    },
    months: {},
    commons: {
      perMonth: "в месяц"
    }
  },
  buttons: {
    create: "создать",
    update: "обновить",
    edit: "редактировать",
    confirm: "принять",
    delete: "удалить",

    open: "открыть",
    close: "закрыть",
    back: "назад",
    clear: "очистить",
    clearForm: "очистить",

  },
  timing: {
    year: "год:",
    month: "месяц: ",
    all: "всего: ",
    loading: "идёт загрузка..."
  }
}