import { IOrder } from './order.interface'
import Order from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload)
  return result
}

const generateRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ])

  return revenue[0]
}

export const orderService = {
  createOrder,
  generateRevenue,
}
