const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');

// require('./config/passport');

// routes
const routes = require('./routes/index');
const users = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/task-mockup-app');
const db = mongoose.connection;

// init app
const app = express();
// app.use(morgan('dev'));


// view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({defaultLayout: 'layout'}));
app.set('viewengine', 'handlebars');


// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser);

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// express session
app.use(session({
  cookie: {maxAge: 60000},
  secret: 'secret',
  saveUninitialized: false,
  resave: false
}));

// validation
const { check, validationResult } = require('express-validator/check');

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});

// passport
app.use(passport.initialize());
app.use(passport.session());


 // flash
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success')
  res.locals.error_messages = req.flash('error_msg')
  rec.locals.error = req.flash('error');
  next();
});


// app.use((req, res, next) => {
//   res.render('notFound')
// });

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});

// app.listen(3010, () => console.log('Server started listening on port 3010'))
