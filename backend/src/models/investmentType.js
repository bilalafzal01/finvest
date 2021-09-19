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
    icon: {
      type: String,
    },
    projectedROI: {
      type: String,
      required: true,
    },
    currentROI: {
      type: String,
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
