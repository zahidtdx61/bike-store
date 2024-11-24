import { model, Schema } from 'mongoose'
import { IBike } from './product.interface'

const bikeSchema = new Schema<IBike>({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  brand: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
  },
  description: String,
  inStock: Boolean,
})

const Bike = model<IBike>('Bike', bikeSchema)

export default Bike
