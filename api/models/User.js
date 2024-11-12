const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    username: { type: 'string', required: true, min: 4, unique: true },
    password: { type: 'string', required: true }
})

const UserModel = model('User', userSchema)

module.exports = UserModel  