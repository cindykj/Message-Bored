// Modules
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);

// Routes
const knex = require('./db/knex.js')


const app = express();

const PORT = process.env.PORT || 8080

app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(session({ 
  store: new Redis(),
  secret: 'keyboard cat', //secret is session's way of salting
  resave: false,
  saveUninitialized: false
}));


// app.get('/api/movies', (req, res) => {
//   return res.json([
//     {
//       title:'Aliens',
//       director: 'James Cameron',
//       year: 1989
//     },
//     {
//       title: 'Fight Club',
//       director: 'David Fincher',
//       year: 1999
//     },
//     {
//       title: 'Requiem for a Dream',
//       director: 'Darren Aronofsky',
//       year: 2000
//     }
//   ])
// })

app.get('/*', (req, res) => {
  var options = {
    root: __dirname + '/public',

  };
  res.sendFile('index.html', options)
})

app.listen(PORT, (err) => {
  console.log('Server listening on: ' + PORT);
});