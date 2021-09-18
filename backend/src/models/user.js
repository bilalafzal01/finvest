var mongoose = require('mongoose');


var schema = mongoose.Schema;

var userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'customer'
    }
    
})


module.exports = mongoose.model('user',userSchema);