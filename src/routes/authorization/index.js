const express = require('express');

const { routeLogin, routeLogout, routeValidateSID } = require('./login');

const router = express.Router({ caseSensitive: true });

router.get('/authorization/login/', routeLogin);
router.get('/authorization/logout/', routeLogout);
router.use(routeValidateSID);
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