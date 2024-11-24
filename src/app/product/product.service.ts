import { IBike } from './product.interface'
import Bike from './product.model'

const createProduct = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload)

  return result
}

const getAllProduct = async (): Promise<IBike[]> => {
  const result = await Bike.find()
  return result
}

const getProductById = async (productId: string): Promise<IBike | null> => {
  const result = await Bike.findOne({ _id: productId })
  return result
}

const updateProduct = async (productId: string, productDetails: IBike): Promise<IBike | null> => {
  const result = await Bike.findByIdAndUpdate(productId,{...productDetails, updatedAt: new Date()}, { new: true })
  return result
}

export const productService = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
}
