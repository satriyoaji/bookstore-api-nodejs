import { Request, Response } from 'express';
import * as orderService from '../services/orderService';
import {CustomRequest} from "../middlewares/authMiddleware";
import {getCustomerById} from "../repositories/CustomerRepository";

export const getAllOrders = async (req: CustomRequest, res: Response) => {
  try {
    const orders = await orderService.getAllOrdersService();
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req: CustomRequest, res: Response) => {
  try {
    const { bookId } = req.body;
    const customerId = req.customerId ? req.customerId : 0;
    const customer = await getCustomerById(customerId);
    if (customer?.id) {
      await orderService.createOrderService(customer?.id, bookId);
      res.status(201).json({ message: 'Order created successfully' });
    }
    res.status(403).json({ message: 'Forbidden access by invalid Customer!' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancelOrder = async (req: CustomRequest, res: Response) => {
  try {
    const { orderId } = req.params;
    const customerId = req.customerId ? req.customerId : 0;
    const customer = await getCustomerById(customerId);
    if (!customer?.id) {
      res.status(403).json({ message: 'Forbidden access by invalid Customer!' });
    }
    const id = parseInt(orderId);
    await orderService.cancelOrderService(id);
    res.json({ message: 'Order canceled successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrdersByCustomerId = async (req: CustomRequest, res: Response) => {
  try {
    const customerId = req.customerId ? req.customerId : 0;
    const customer = await getCustomerById(customerId);
    if (!customer?.id) {
      res.status(403).json({ message: 'Forbidden access by invalid Customer!' });
    }
    const orders = await orderService.getOrdersByCustomerIdService(customerId);
    res.json(orders);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
