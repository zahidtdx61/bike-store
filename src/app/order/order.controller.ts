import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  const payload = req.body

  try {
    const result = await orderService.createOrder(payload)

    res.status(StatusCodes.CREATED).json({
      message: 'Order created successfully',
      status: true,
      data: result,
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

const generateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderService.generateRevenue()

    res.status(StatusCodes.OK).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: revenue,
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: 'Something went wrong!',
      error: (error as Error).message,
      stack: (error as Error).stack,
    })
  }
}

export const orderController = {
  createOrder,
  generateRevenue,
}
