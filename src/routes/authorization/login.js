const USERS = {
  'root': {
    login: 'root',
    password: 'root',
    type: 1,
  },
  'sasha': {
    login: 'sasha',
    password: 'test',
    type: 1,
  }
}

const MAX_AGE = 60 * 60 * 24 * 30 * 1000;
const SESSIONS = {};

/**
 * Получение пользователя по его логин/паролю
 * @param login - логин пользователя
 * @param password - пароль пользователя
 */
const getUser = (login, password) => {
  const userObj = USERS[login];
  if (userObj && userObj.password === password) {
    return true;
  }
  return false;
}

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
const addSID = (sid, res) => {
  SESSIONS[sid] = true;
  res.cookie('sid', sid, { maxAge: MAX_AGE });
};

/**
 * Добавление сессионой куки (SID)
 * @param sid - сессионная кука
 * @param res - объект ответа express
 */
const removeSID = (sid, res) => {
  if (SESSIONS[sid]) {
    SESSIONS[sid] = false;
  };
  res.clearCookie('sid')
};

/**
 * Валидация сессионой куки (SID)
 * @param sid - сессионная кука
 */
const validateSID = (sid) => Boolean(SESSIONS[sid]);

/**
 * Ручка авторизации
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeLogin = (req, res) => {
  const { login, password } = req.query;

  const loginSuccessfully = getUser(login, password);
  if (loginSuccessfully) {
    const SID = createSID(login, password);
    addSID(SID, res);
    res.status(200).send(loginSuccessfully);
  } else {
    const { sid } = req.cookies;
    removeSID(sid, res);

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

  removeSID(sid, res);
  res.status(200).send();
};

/**
 * Ручка разлогина
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeValidateSID = (req, res, next) => {
  const { sid } = req.cookies;
  console.log('routeValidateSID', sid);
  console.log('validateSID(sid)', validateSID(sid));

  if (!validateSID(sid)) {
    res.status(404).send({
      msg: 'user is not login'
    });
  } else {
    next();
  };
};

module.exports = {
  routeLogin,
  routeLogout,
  routeValidateSID,
};