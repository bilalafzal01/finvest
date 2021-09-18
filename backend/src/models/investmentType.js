import mongoose from 'mongoose'

var schema = mongoose.Schema

var investmentTypeSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectedROI: {
    type: String,
    required: true,
  },
  currentROI: {
    type: Number,
    required: true,
  },
})

investmentTypeSchema.statics.build = (attrs) => {
    return new InvestmentType(attrs)
  }
  
  const InvestmentType = mongoose.model('InvestmentType', investmentTypeSchema)
  
  export { InvestmentType }

