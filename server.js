// Modules
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
// const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);

// Routes
const knex = require('./db/knex.js')
const usersRoutes = require('./routes/users');
const topicsRoutes = require('./routes/topics');
const messagesRoutes = require('./routes/messages');

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.static('public'));

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
// app.use(session({ 
//   store: new Redis(),
//   secret: 'keyboard cat', //secret is session's way of salting
//   resave: false,
//   saveUninitialized: false
// }));

app.use('/api/users', usersRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/messages', messagesRoutes);




app.get('/*', (req, res) => {
  var options = {
    root: __dirname + '/public',
  };
  res.sendFile('index.html', options)
})

app.listen(PORT, (err) => {
  console.log('Server listening on: ' + PORT);
});