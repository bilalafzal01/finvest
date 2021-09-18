import mongoose from 'mongoose'

var adminSchema = new mongoose.Schema(
  {
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

adminSchema.statics.build = (attrs) => {
  return new Admin(attrs)
}

const Admin = mongoose.model('admin', adminSchema)

export { Admin }
