var mongoose = require('mongoose')

var schema = mongoose.Schema

var userInvestmentSchema = new schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  investments: [
    {
      investmentType: {
        type: String,
      },
      amount: {
        type: Number,
      },
      plan: {
        type: String,
      },
      roi: {
        type: Number,
      },
      dateInvested: {
        type: Date,
        default: Date.now,
      },
    },
  ],
})
userInvestmentSchema.statics.build = (attrs) => {
  return new UserInvestment(attrs)
}

const UserInvestment = mongoose.model('UserInvestment', userInvestmentSchema)

export { UserInvestment }

module.exports = mongoose.model('userInvestment', userInvestmentSchema)
