const {
  getBagByUser,
  editBagByUser,
} = require('../../db/bags');

/**
 * Получение косметички
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeGetBag = (req, res) => {
  const { user } = req.db;
  console.log('🚀 ~ file: bag.js ~ line 8 ~ routeGetBag ~ user', user);
  res.status(200).send(getBagByUser(user));
};

/**
 * Получение косметички
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeEditBag = (req, res) => {
  const { user } = req.db;
  const { category, section, state } = req.body;
  const result = editBagByUser(user, category, section, state);
  if (result) {
    res.status(200).send({
      msg: 'successfully'
    });
  } else {
    res.status(404).send({
      msg: 'unsuccessfully'
    });
  }

};


module.exports = {
  routeGetBag,
  routeEditBag,
};