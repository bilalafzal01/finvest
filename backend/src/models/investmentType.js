var mongoose = require('mongoose');


var schema = mongoose.Schema;

var investmentTypeSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectedROI: {
        type: Number,
        required: true
    },
    currentROI: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('investmentType', investmentTypeSchema);