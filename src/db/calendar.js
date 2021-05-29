const DB_CALENDAR = {
  '1': {
    '29.05.2021': {
      date: '29.05.2021',
      plan: {
        morning: [
          { id: 10, name: 'Пенка для умывания', photo: null },
          { id: 17, name: 'Тканевая маска', photo: null},
          { id: 14, name: 'Крем с SPF', photo: null},
        ],
        daytime: [
          { id: 1, name: 'Гель для душа с клубникой', photo: null},
          { id: 3, name: 'Крем для тела', photo: null}
        ],
        evening: [
          { id: 11, name: 'Гель для умывания', photo: null},
          { id: 5, name: 'Шампунь для объема', photo: null},
          { id: 7, name: 'Бальзам для волос', photo: null}
        ],
      }
    }
  },
  '2': {
    '30.05.2021': {
      date: '30.05.2021',
      plan: {
        morning: [
          { id: 10, name: 'Пенка для умывания', photo: null },
          { id: 17, name: 'Тканевая маска', photo: null},
          { id: 14, name: 'Крем с SPF', photo: null},
        ],
        daytime: [
          { id: 1, name: 'Гель для душа с клубникой', photo: null},
          { id: 3, name: 'Крем для тела', photo: null}
        ],
        evening: [
          { id: 11, name: 'Гель для умывания', photo: null},
          { id: 5, name: 'Шампунь для объема', photo: null},
          { id: 7, name: 'Бальзам для волос', photo: null}
        ],
      }
    }
  }
};

const DATE_PLAN_STUB = {
  morning: [],
  daytime: [],
  evening: [],
}

/**
 * Получение объекта bag по user
 * @param user - объект пользователя user
 * @param date - дата, за которую получаем план
 */
const getCalendarByDateForUser = (user, date) => {
  const userCalendar = DB_CALENDAR[user.id];
  if (userCalendar) {
    const userPlan = userCalendar[date];
    if (userPlan) return userPlan;
  }

  return null;
};

/**
 * Изменение плана на период дня
 * @param user - объект пользователя user
 * @param date - дата для изменения
 * @param period - название периода для изменения
 * @param state - новое значение списка
 */
const editCalendarByUserForPeriod = (user, date, period, state) => {
  console.log('🚀 ~ file: calendar.js ~ line 78 ~ editCalendarByUserForPeriod ~ date', date);
  const plan = getCalendarByDateForUser(user, date);
  console.log('🚀 ~ file: calendar.js ~ line 76 ~ editCalendarByUserForPeriod ~ plan', plan);
  if (plan) {
    plan.plan[period] = state;
    return true;
  }

  return false;
};

/**
 * Изменение плана на период дня
 * @param user - объект пользователя user
 * @param date - дата для изменения
 * @param period - название периода для изменения
 * @param state - новое значение списка
 */
const addDatePlanByUser = (user, date) => {
  const plan = getCalendarByDateForUser(user, date);
  if (plan) return plan;

  let userCalendar = DB_CALENDAR[user.id];
  if (!userCalendar) {
    DB_CALENDAR[user.id] = {};
    userCalendar = DB_CALENDAR[user.id];
  }
  const newPlan = {
    date,
    plan: { ...DATE_PLAN_STUB }
  }

  userCalendar[date] = newPlan;
  return newPlan;
};


module.exports = {
  editCalendarByUserForPeriod,
  addDatePlanByUser,
};