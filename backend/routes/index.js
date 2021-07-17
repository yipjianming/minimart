var express = require('express');
var router = express.Router();
const constant = require('../customLibrary/constant')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(constant.http_status.OK).send({page:'home'});
});

module.exports = router;
