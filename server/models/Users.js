const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
})


const UserModel = mongoose.model("users", userSchema) // in this line this 'users' is a collection name  


module.exports = UserModel;