const {
  addSID,
  removeSID,
  getSID,
  addUser,
  getUser,
} = require('../../db/users');

const MAX_AGE = 60 * 60 * 24 * 30 * 1000;

/**
 * Создание сессионной куки для пользователя
 * @param login - логин пользователя
 * @param password - пароль пользователя
 */
const createSID = (login, password) => {
  const date = Number(new Date());
  return `${date}${login}${password}`;
}

/**
 * Добавление сессионой куки (SID)
 * @param sid - сессионная кука
 * @param res - объект ответа express
 */
const addCookieSID = (sid, userObj, res) => {
  addSID(sid, userObj);
  res.cookie('sid', sid, { maxAge: MAX_AGE, domain: 'localhost:3000', });
};

/**
 * Удаление сессионой куки (SID)
 * @param sid - сессионная кука
 * @param res - объект ответа express
 */
const removeCookieSID = (sid, res) => {
  removeSID(sid);
  res.clearCookie('sid');
};

/**
 * Ручка авторизации
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeLogin = (req, res) => {
  const { login, password } = req.query;

  const userObj = getUser(login, password);
  if (userObj) {
    const SID = createSID(userObj.login, userObj.password);
    addCookieSID(SID, userObj, res);
    res.status(200).send({ ...userObj, sid: SID });
  } else {
    const { sid } = req.cookies;
    removeCookieSID(sid, res);

    res.status(404).send({
      msg: 'incorrect username or password'
    });
  }
};

/**
 * Ручка разлогина
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeLogout = (req, res) => {
  const { sid } = req.cookies;

  removeCookieSID(sid, res);
  res.status(200).send({
    msg: 'sid was deleted'
  });
};

/**
 * Ручка разлогина
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeValidateSID = (req, res, next) => {
  let { sid } = req.cookies;
  if (!sid) {
    sid = req.headers['session-id']
  }

  const userObj = getSID(sid)

  if (!userObj) {
    res.status(404).send({
      msg: 'user is not login'
    });
  } else {
    req.db = {
      user: userObj
    }
    next();
  };
};

/**
 * Ручка регистрации нового пользователя
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeRegistration = (req, res) => {
  const { login, password } = req.query;

  const userObj = getUser(login, password);
  if (userObj) {
    res.status(404).send({
      msg: 'user already exists'
    });
  } else {
    const newUserObj = addUser(login, password);
    const SID = createSID(newUserObj.login, newUserObj.password);
    addCookieSID(SID, newUserObj, res);
    res.status(200).send(newUserObj);
  }
};


module.exports = {
  routeLogin,
  routeLogout,
  routeRegistration,
  routeValidateSID,
};