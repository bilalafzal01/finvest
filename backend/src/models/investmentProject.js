var mongoose = require('mongoose');


var schema = mongoose.Schema;

var investmentProjectSchema = new schema({
    deadline: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    shares: [{
        userID: {
            type: schema.ObjectId,
            required: true
        },
        share: {
            type: Number,
            required: true
        }
    }],
    adminID: {
        type: schema.ObjectId,
        required: true
    },
    status: {
        type: String,
        default: 'in progress'
    },
    finalROI: {
        type: Number
    }
})


module.exports = mongoose.model('investmentProject', investmentProjectSchema);