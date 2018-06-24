const express = require('express');
const router = express.Router();
const Joi = require('joi');
const passport = require('passport');

//register
router.get('/register', (req, res) => {
  res.render('register');
});

// login
router.get('/login', (req,res) => {
  res.render('login')
});
// const User = require('../models/user');
//
// const userSchema = Joi.object().keys({
//   email: Joi.string().email().required(),
//   username: Joi.string().required(),
//   password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
//   confirmationPassword: Joi.any().valid(Joi.ref('password').required())
// });

// router.route('/register')
//   .get((req,res) => {
//     res.render('register')
//   })
//   .post(async (req,res,next) => {
//     try {
//       const result = Joi.validate(req.body, userSchema)
//       if (result.error) {
//         req.flash('Data not valid. Please try again.', error)
//         res.redirect('/users/register')
//         return
//       }
//       const user = await. User.findOne({'email': result.value.email})
//       if (user) {
//         req.flash('Email is already in use.', error)
//         res.redirect('/users/register')
//         return
//       }
//       const hash = await User.hashPassword(result.value.password);
//
//       delete result.value.confirmationPassword;
//       result.value.password = hash;
//
//       const newUser = await new User(result.value)
//       await newUser.save();
//
//       req.flash('success', 'Congrats! Registration successful!')
//       res.redirect('/users/login');
//     } catch (err) {
//       next(error);
//     }
//   })

  module.exports = router;
