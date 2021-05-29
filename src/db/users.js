const DB_USERS = {
  'root': {
    id: 1,
    login: 'root',
    password: 'root',
    // type: 1,
  },
  'sasha': {
    id: 2,
    login: 'sasha',
    password: 'test',
    // type: 1,
  }
};

/**
 * Добавление пользователя по его логин/паролю
 * @param login - логин пользователя
 * @param password - пароль пользователя
 */
const addUser = (login, password) => {
  const newUserObj = {
    id: Object.keys(DB_USERS).length + 1,
    login,
    password,
  }
  DB_USERS[login] = newUserObj;
  return newUserObj;
};

/**
 * Получение пользователя по его логин/паролю
 * @param login - логин пользователя
 * @param password - пароль пользователя
 */
const getUser = (login, password) => {
  const userObj = DB_USERS[login];
  if (userObj && userObj.password === password) {
    return userObj;
  }
  return null;
};


const DB_SESSIONS = {};

/**
 * Добавление сессионой куки (SID) в db
 * @param sid - сессионная кука
 * @param userObj - объект user
 */
const addSID = (sid, userObj) => DB_SESSIONS[sid] = userObj;

/**
 * Получение сессионой куки (SID) из db
 * @param sid - сессионная кука
 */
const getSID = (sid) => DB_SESSIONS[sid];

/**
 * Удаление сессионой куки (SID) из db
 * @param sid - сессионная кука
 */
const removeSID = (sid) => { if (DB_SESSIONS[sid]) DB_SESSIONS[sid] = null; }

module.exports = {
  addUser,
  getUser,
  addSID,
  removeSID,
  getSID,
};