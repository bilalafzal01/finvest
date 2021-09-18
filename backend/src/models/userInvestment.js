var mongoose = require('mongoose')

var userInvestmentSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      },
    },
  }
)

module.exports = mongoose.model('userInvestment', userInvestmentSchema)

userInvestmentSchema.statics.build = (attrs) => {
  return new UserInvestment(attrs)
}

const UserInvestment = mongoose.model('userInvestment', userInvestmentSchema)

export { UserInvestment }
