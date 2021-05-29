const express = require('express');

const { routeGetBag } = require('./bag');

const router = express.Router({ caseSensitive: true });

router.get('/cosmetic-bag/', routeGetBag);
// router.get('/static/*', routerStaticStub);
// router.get('/favicon.ico', routerStaticStub);
// router.get('/healthcheck/', healthcheck);
// router.post('/clicks/', routerStaticStub);
// router.head('/healthcheck/', healthcheck);
// router.get('/rnews/version/', version);
// router.get('/rnews/service/likes/cluster/:clusterID/', serviceLikes);
// router.get('/rnews/service/nedoma/', serviceNedoma);
// router.get('/rnews/service/test/', serviceTest);
// router.get('/rnews/service/sberbank/btn/', serviceSberbankBtn);

// export default router;

module.exports = router;

