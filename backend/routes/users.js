var express = require('express');
var router = express.Router();
const constant = require('../customLibrary/constant')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(constant.http_status.OK).send({page:'users'});
});

module.exports = router;
