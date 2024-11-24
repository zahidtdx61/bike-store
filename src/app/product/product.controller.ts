import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { productService } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  const payload = req.body

  try {
    const data = await productService.createProduct(payload)

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Bike created successfully',
      data,
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: error.message,
      error,
      stack: error.stack,
    })
  }
}

export const productController = {
  createProduct,
}
