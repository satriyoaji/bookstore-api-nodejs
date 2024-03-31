import Order from '../entity/Order';

export const getAllOrders = async () => {
  return Order.findAll();
};

export const createOrder = async (customerId: number, bookId: number) => {
  return Order.create({ customerId, bookId });
};

export const cancelOrder = async (orderId: number) => {
  return Order.destroy({ where: { id: orderId } });
};

export const getOrdersByCustomerId = async (customerId: number) => {
  return Order.findAll({ where: { customerId } });
};
