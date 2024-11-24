import { Router } from 'express'
import { productController } from './product.controller'

const productsRouter = Router()

productsRouter.post('/', productController.createProduct)
productsRouter.get('/', productController.getAllProducts)

export default productsRouter
