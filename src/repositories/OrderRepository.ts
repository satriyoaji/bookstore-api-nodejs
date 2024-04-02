import Order from '../entities/Order';

export const getAllOrders = async () => {
  return Order.findAll();
};

export const createOrder = async (customerId: number, bookId: number) => {
  try {
    return await Order.create({customerId, bookId});
  } catch (error) {
    throw new Error('Error creating order');
  }
};

export const deleteOrderByID = async (orderId: number) => {
  try {
    return Order.destroy({ where: { id: orderId } });
  } catch (error) {
    throw new Error('Error deleting order');
  }
};

export const getOrdersByCustomerId = async (customerId: number) => {
  return Order.findAll({ where: { customerId } });
};

export const getOrderByID = async (id: number) => {
  return Order.findByPk(id);
};
