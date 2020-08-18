const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User  
let UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,

    UserName: {
        type: String,
        required: true,
    },
    
    UserLastName: {
        type: String,
        required: true,
    },

    /* UserDateOfBirth: {
        type: Date,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },

    password: { type: String, required: true } */
}, 
{
    collection: 'User'
});
module.exports = mongoose.model('User', UserSchema);  