import { model, Schema } from 'mongoose'
import { IBike } from './product.interface'

const bikeSchema = new Schema<IBike>({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    minlength: [3, 'name should contains at least 3 characters'],
    maxlength: [20, "name can't contain more than 20 characters "],
    immutable: true
  },
  brand: {
    type: String,
    required: [true, 'brand is required'],
    minlength: [3, 'brand should contains at least 3 characters'],
    maxlength: [20, "brand can't contain more than 20 characters "],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    min: [1, 'price should be greater than zero'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
    enum: {
      values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
      message: '{VALUE} is not valid.',
    },
  },
  description: String,
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
    min: [1, 'quantity should be at least one'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

const Bike = model<IBike>('Bike', bikeSchema)

export default Bike
