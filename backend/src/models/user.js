import mongoose from 'mongoose'
import { Password } from '../services/password'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      },
    },
  }
)

// * using function keyword instead of arrow function because in case of arrow functions,
// * the 'this' keyword refers to the context of whole file. Not what we want.
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

// * Allows us to make a new User doc via: User.buildUser() function
userSchema.statics.build = (attrs) => {
  return new User(attrs)
}

const User = mongoose.model('User', userSchema)

export { User }
