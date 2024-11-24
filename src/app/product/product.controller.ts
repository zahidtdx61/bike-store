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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Validation failed',
        error: error.errors,
        stack: error.stack,
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong',
        error,
        stack: error.stack,
      })
    }
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await productService.getAllProduct()

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'Bikes retrieved successfully',
      data,
    })
  } catch (error: unknown) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: 'Something went wrong!',
      error: error.message,
      stack: error.stack,
    })
  }
}

export const productController = {
  createProduct,
  getAllProducts,
}
