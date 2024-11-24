import { IBike } from './product.interface'
import Bike from './product.model'

const createProduct = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload)

  return result
}

export const productService = {
  createProduct,
}
