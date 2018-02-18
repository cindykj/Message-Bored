const express = require('express');
const bodyparser = require('body-parser');

const Topic = require('../db/models/Topic')
const router = express.Router();

router.route(`/`)
  .post((req, res) => {
    // console.log(req.body)
    return new Topic(req.body).save()
      .then(post => {
        // console.log(post)
        return res.send(post)
      })
      .catch(err => {
        return res.json({
          message: err.message,
          code: err.code
        })
      })
  }) //closing POST TOPIC

  //GET ALL TOPICS
  .get((req, res) => {
    return new Topic().fetchAll()
    // console.log('req only', req.body)
    .then((topics) => {
      topics = topics.toJSON();
      return res.send(topics);
    })
  }) //closing GET ALL TOPICS



module.exports = router;

// .post(isAuthenticated, (req, res) => {
//   let data = {
//     // add id here eventually
//     author,
//     link,
//     description
//   } = req.body;
//   data.user_id = req.user.id
//   // console.log('data.user.id', data.user_id)
//   if (!author || !link || !description) { //add id here eventually
//     // console.log(author, link, description);
//     return res.status(400).json({
//       message: `Must enter values in all fields`
//     });
//   }
//   return new Gallery(data)
//     .save()
//     .then(post => {
//       console.log('POSTING', post)
//       return res.redirect('/gallery');
//     })
//     .catch(err => {
//       return res.json({
//         message: err.message,
//         code: err.code
//       })
//     })
// }); // closing for post /gallery