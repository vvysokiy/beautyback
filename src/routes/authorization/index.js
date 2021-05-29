const express = require('express');

const { routeLogin, routeLogout, routeRegistration, routeValidateSID } = require('./authorization');

const router = express.Router({ caseSensitive: true });

router.get('/authorization/login/', routeLogin);
router.get('/authorization/logout/', routeLogout);
router.get('/authorization/registration/', routeRegistration);
router.use(routeValidateSID);

module.exports = router;