const {
  editCalendarByUserForPeriod,
  addDatePlanByUser,
} = require('../../db/calendar');

/**
 * Получение расписания на дату
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeGetUserPlan = (req, res) => {
  const { user } = req.db;
  const { date } = req.query;

  const result = addDatePlanByUser(user, date);
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send({ msg: 'no data' });
  }
}

/**
 * Редактирование расписания на дату за период
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeEditUserPlan = (req, res) => {
  const { user } = req.db;
  const { date, period, state } = req.body;

  const result = editCalendarByUserForPeriod(user, date, period, state);
  if (result) {
    res.status(200).send({
      msg: 'successfully'
    });
  } else {
    res.status(404).send({
      msg: 'unsuccessfully'
    });
  }
}

module.exports = {
  routeGetUserPlan,
  routeEditUserPlan,
};