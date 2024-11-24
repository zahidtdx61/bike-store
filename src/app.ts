import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import productsRouter from './app/product/product.route'
import orderRouter from './app/order/order.route'

const app = express()

app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Server is up and running',
    data: {},
  })
})

export default app
