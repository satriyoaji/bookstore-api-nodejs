/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */

import express from 'express';
import * as orderController from "../controllers/orderController";

const router = express.Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: string
 *               bookId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Error creating order
 */
router.post('', orderController.createOrder);

/**
 * @swagger
 * /orders/{orderId}:
 *   delete:
 *     summary: Cancel an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: ID of the order to cancel
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order canceled successfully
 *       404:
 *         description: Order not found
 */
router.delete('/:orderId', orderController.cancelOrder);

/**
 * @swagger
 * /orders/{customerId}:
 *   get:
 *     summary: Get orders by customer ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID of the customer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of orders
 *       404:
 *         description: Customer not found
 */
router.get('/:customerId', orderController.getOrdersByCustomerId);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 *       500:
 *         description: Error getting orders
 */
router.get('', orderController.getAllOrders);

export default router;
