const express = require('express');
const bodyparser = require('body-parser');

const Message = require('../db/models/Message')
const router = express.Router();

router.route(`/`)
.post((req, res) => {
  return new Message(req.body).save()
  .then(post => {
    return res.send(post)
  })
  .catch(err => {
    console.log('errreoror')
    return res.json({
      message: err.message,
      code: err.code
    })
  })
})

router.route(`/latest`)
.get((req, res) => {
  return new Message().fetchAll()
  .then((latest) => {
    latest = latest.toJSON();
    return res.send(latest)
  })
})



module.exports = router;
