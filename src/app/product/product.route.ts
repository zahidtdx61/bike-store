import { Router } from 'express'
import { productController } from './product.controller'

const productsRouter = Router()

productsRouter.post('/', productController.createProduct)
productsRouter.get('/', productController.getAllProducts)
productsRouter.get("/:productId", productController.getProductById)
productsRouter.put("/:productId", productController.updateProduct)
productsRouter.delete("/:productId", productController.deleteProduct)

export default productsRouter
