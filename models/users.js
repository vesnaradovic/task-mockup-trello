const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bycryptjs');

// const userSchema = new Schema ({
//   email: String,
//   username: String,
//   password: String
// }, {
//   timestamps: {
//     createdAt: 'createdAt',
//     updatedAt: 'updatedAt'
//   }
// });
//
// const User = mongoose.model('user', userSchema);
// module.exports = User;
//
// module.exports.hashPassword = async (password) => {
//   try {
//     const salt = await bycrypt.genSalt(10);
//     return await bycrypt.hash(password, salt);
//   } catch(error) {
//     throw new Error('Hashing failed', error);
//   }
// }
