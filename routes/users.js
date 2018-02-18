const express = require('express');
const bodyparser = require('body-parser');

const User = require('../db/models/User');

const router = express.Router();

router.route(`/`)
//POST NEW USER
.post((req, res) => {
  // console.log(req.body)
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

//GET USER BY ID

router.route(`/:id`)
.get((req, res) => {
  console.log('reeeeq', req.body)
})


// //  GET /gallery/:id to see a single gallery photo -- moved to user.js
// router.route('/:id')
//   .get((req, res) => {
//     // console.log(req.user)
//     return new Gallery()
//     .where({
//       id: req.params.id
//     })
//     .fetch()
//     .then(result => {
//         let {
//           author,
//           link,
//           description
//         } = result.attributes
//         if (!result) {
//           throw new Error('No such photo!');
//         }
//         return res.render('templates/gallery/photo', result.attributes);
//       })
//       .catch(err => {
//         return res.json({
//           message: err.message
//         })
//       })
//   }); //closing for get gallery/:id






module.exports = router;