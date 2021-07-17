var express = require('express');
var router = express.Router();
const db = require("../database/dbWrapper")
const constant = require('../database/constant')
/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    let x = await db.insert('items', { name: 'apple', price: '1.23', image: 'test' })
    res.status(constant.http_status.OK).send({ page: 'home' });
  }
  catch (e) {
    console.log(e.message)
  }

});
router.get('/all', async function (req, res, next) {


});

module.exports = router;
