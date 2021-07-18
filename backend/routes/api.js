var express = require('express');
var router = express.Router();
const db = require("../database/dbWrapper")
const constant = require('../database/constant')

/* INSERT item to database.  */
router.post('/insert', async function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  try {
    let dbRes = await db.insert('items', req.body)
    res.status(constant.http_status.OK).send(dbRes.insertedId);
  }
  catch (e) {
    res.status(constant.http_status.InternalServerError).send(e.message);
  }
});

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

/* UPDATE item in database. */
router.put('/update', async function (req, res, next) {
  try {
    let dbRes = await db.update('items', req.body)
    res.status(constant.http_status.OK).send(dbRes);
  }
  catch (e) {
    res.status(constant.http_status.InternalServerError).send(e.message);
  }
});

/* DELETE item from database.  */
router.delete('/delete', async function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  try {
    console.log(req.body)
    await db.delete('items', req.body._id)
    res.status(constant.http_status.OK).send();
  }
  catch (e) {
    res.status(constant.http_status.InternalServerError).send(e.message);
  }
});
module.exports = router;
