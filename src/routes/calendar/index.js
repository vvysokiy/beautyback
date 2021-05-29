const express = require('express');

const { routeGetUserPlan, routeEditUserPlan } = require('./calendar');

const router = express.Router({ caseSensitive: true });

router.get('/calendar/', routeGetUserPlan);
router.put('/calendar/', routeEditUserPlan);

module.exports = router;