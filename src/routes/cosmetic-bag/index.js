const express = require('express');

const { routeGetBag, routeEditBag } = require('./bag');

const router = express.Router({ caseSensitive: true });

router.get('/cosmetic-bag/', routeGetBag);
router.put('/cosmetic-bag/', routeEditBag);

module.exports = router;

