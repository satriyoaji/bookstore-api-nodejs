import { Request, Response } from 'express';
import * as orderService from '../services/orderService';
import {CustomRequest} from "../middlewares/authMiddleware";
import {getCustomerById} from "../repositories/CustomerRepository";
import {cancelOrderService} from "../services/orderService";

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
    const order = await orderService.createOrderService(customerId, bookId);
    res.status(201).json(order);
  } catch (error: any) {
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const cancelOrder = async (req: CustomRequest, res: Response) => {
  try {
    const customerId = req.customerId ? req.customerId : 0;
    const { orderId } = req.params;
    const orderIdInt = parseInt(orderId);
    const result = await cancelOrderService(customerId, orderIdInt);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      console.error("error: ", error)
      res.status(500).json({ error: 'Internal server error' });
    }
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
    res.status(500).json({ error: 'Internal server error' });
  }
};
