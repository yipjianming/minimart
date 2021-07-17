var express = require('express');
var router = express.Router();
const db = require("../database/dbWrapper")
const constant = require('../database/constant')

/* GET all items from database. */
router.get('/getAll', async function (req, res, next) {
  try {
    let itemList = await db.getAll('items')
    res.status(constant.http_status.OK).send(itemList);
  }
  catch (e) {
    res.status(constant.http_status.InternalServerError).send(e.message);
  }
});

/* INSERT item to database.  */
router.post('/insert', async function (req, res, next) {
  res.setHeader('Content-Type','application/json')
  try {
    await db.insert('items', req.body)
    res.status(constant.http_status.OK).send();
  }
  catch (e) {
    res.status(constant.http_status.InternalServerError).send(e.message);
  }

});

module.exports = router;
