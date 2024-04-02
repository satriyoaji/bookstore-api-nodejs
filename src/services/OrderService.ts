import {
  createOrder,
  deleteOrderByID,
  getOrdersByCustomerId,
  getAllOrders,
  getOrderByID
} from '../repositories/orderRepository';
import {getCustomerById, updateCustomerPoints} from "../repositories/CustomerRepository";
import {getBookById} from "../repositories/BookRepository";

export const getAllOrdersService = async () => {
  return getAllOrders();
};

export const createOrderService = async (customerId: number, bookId: number) => {
  if (customerId == 0) {
    throw { statusCode: 404, message: 'Forbidden access by invalid Customer!' };
  }
  // Get customer information
  const customer = await getCustomerById(customerId);
  if (!customer) {
    throw { statusCode: 404, message: 'Customer not found' };
  }

  // Get book information
  const book = await getBookById(bookId);
  if (!book) {
    throw { statusCode: 404, message: 'Book not found' };
  }

  // Check if customer has enough points to order the book
  if (customer.points < book.point) {
    throw { statusCode: 400, message: 'Insufficient points' };
  }

  // Reduce customer points by book points
  const updatedCustomer = await updateCustomerPoints(customerId, customer.points - book.point);

  // Create the order
  const order = await createOrder(customerId, bookId);

  return { order, updatedCustomer };
};

export const cancelOrderLah = async (orderId: number) => {
  // res.status(403).json({ message: 'Forbidden access by invalid Customer!' });
  return deleteOrderByID(orderId);
};
export const cancelOrderService = async (customerId: number, orderId: number) => {
  try {
    // Get order information
    const order = await getOrderByID(orderId);
    if (!order) {
      throw { statusCode: 404, message: 'Order not found' };
    }

    // Get book information
    const book = await getBookById(order.bookId);
    if (!book) {
      throw { statusCode: 404, message: 'Book not found' };
    }

    // Increase customer points by book points
    const customer = await getCustomerById(customerId);
    if (!customer) {
      throw { statusCode: 404, message: 'Customer not found' };
    }
    const updatedCustomer = await updateCustomerPoints(customerId, customer.points + book.point);

    // Delete the order
    await deleteOrderByID(orderId);

    return { message: 'Order canceled successfully', updatedCustomer };
  } catch (error) {
    throw error;
  }
};

export const getOrdersByCustomerIdService = async (customerId: number) => {
  return getOrdersByCustomerId(customerId);
};
