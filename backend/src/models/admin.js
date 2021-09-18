import mongoose from 'mongoose'

var schema = mongoose.Schema

var adminSchema = new schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  adminType: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin',
  },
})

module.exports = mongoose.model('admin', adminSchema)
