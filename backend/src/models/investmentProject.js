import mongoose from 'mongoose'

const investmentProjectSchema = new mongoose.Schema(
  {
    deadline: {
      type: String,
      required: true,
    },
    target: {
      type: Number,
      required: true,
    },
    shares: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        share: {
          type: Number,
        },
      },
    ],
    admin: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'admin',
    },
    investmentType: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'investmentType',
    },
    status: {
      type: String,
      enum: ['initialized', 'in progress', 'completed', 'cancelled'],
      default: 'initialized',
    },
    finalROI: {
      type: String,
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

investmentProjectSchema.statics.build = (attrs) => {
  return new InvestmentProject(attrs)
}

const InvestmentProject = mongoose.model(
  'investmentProject',
  investmentProjectSchema
)

export { InvestmentProject }
