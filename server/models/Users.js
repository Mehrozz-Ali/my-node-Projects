const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


const UserModel = mongoose.model("users", userSchema) // in this line this 'users' is a collection name  


module.exports = UserModel;