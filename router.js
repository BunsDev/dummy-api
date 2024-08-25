'use strict';

const Router = require('koa-router');
const router = new Router();
const noop = require('./api/noop');
 
const houses = require('./api/houses');
const numbers = require('./api/numbers');

// APIs //

// houses //
router.get('/houses', houses.infos);
router.get('/house/:id', houses.houseInfo);

router.get('/numbers', numbers.randomNumber);
router.get('/numbers/limit=:limit', numbers.filteredNumber);
router.get('/', noop);

module.exports = router;