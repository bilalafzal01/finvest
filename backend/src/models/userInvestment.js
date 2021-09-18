var mongoose = require('mongoose');


var schema = mongoose.Schema;

var userInvestmentSchema = new schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    investments: [{
        investmentType: {
            type: String
        },
        amount: {
            type: Number
        },
        plan: {
            type: String
        },
        roi: {
            type: Number
        },
        dateInvested: {
            type: Date, 
            default: Date.now
        }
    }],
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


module.exports = mongoose.model('userInvestment', userInvestmentSchema);