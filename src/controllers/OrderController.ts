import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrdersService();
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, bookId } = req.body;
    await orderService.createOrderService(customerId, bookId);
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const id = parseInt(orderId);
    await orderService.cancelOrderService(id);
    res.json({ message: 'Order canceled successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrdersByCustomerId = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const id = parseInt(customerId);
    const orders = await orderService.getOrdersByCustomerIdService(id);
    res.json(orders);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
