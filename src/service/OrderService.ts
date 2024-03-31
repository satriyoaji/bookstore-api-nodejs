import {createOrder, cancelOrder, getOrdersByCustomerId, getAllOrders} from '../repository/orderRepository';

export const getAllOrdersService = async () => {
  return getAllOrders();
};

export const createOrderService = async (customerId: number, bookId: number) => {
  return createOrder(customerId, bookId);
};

export const cancelOrderService = async (orderId: number) => {
  return cancelOrder(orderId);
};

export const getOrdersByCustomerIdService = async (customerId: number) => {
  return getOrdersByCustomerId(customerId);
};
