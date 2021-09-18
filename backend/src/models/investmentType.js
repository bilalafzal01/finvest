import mongoose from 'mongoose'

const investmentTypeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectedROI: {
      type: Number,
      required: true,
    },
    currentROI: {
      type: Number,
      required: true,
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

investmentTypeSchema.statics.build = (attrs) => {
  return new InvestmentType(attrs)
}

const InvestmentType = mongoose.model('investmentType', investmentTypeSchema)

export { InvestmentType }
