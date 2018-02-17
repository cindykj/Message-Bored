const express = require('express');
const bodyparser = require('body-parser');

const User = require('../db/models/User');

const router = express.Router();

router.route(`/`)
//POST NEW USER
.post((req, res) => {
  console.log(req.body)
  return new User(req.body).save()
  .then(post => {
    console.log('new user', post)
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
//GET ALL USERS
.get((req, res) => {
  return new User().fetchAll()
  .then((users) => {
    users = users.toJSON();
    return res.send(users)
  })
});







module.exports = router;