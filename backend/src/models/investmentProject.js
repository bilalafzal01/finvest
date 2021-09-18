import mongoose from 'mongoose'

var schema = mongoose.Schema

var investmentProjectSchema = new schema({
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
  status: {
    type: String,
    enum: ['initialized', 'in progress', 'completed', 'cancelled'],
    default: 'initialized',
  },
  finalROI: {
    type: Number,
  },
})

module.exports = mongoose.model('investmentProject', investmentProjectSchema)
