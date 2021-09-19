import mongoose from 'mongoose'

const easyInvestmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['in progress', 'completed', 'cancelled'],
      default: 'in progress',
    },
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

easyInvestmentSchema.statics.build = (attrs) => {
  return new EasyInvestment(attrs)
}

const EasyInvestment = mongoose.model('easyInvestment', easyInvestmentSchema)

export { EasyInvestment }
