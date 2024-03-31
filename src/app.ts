import express from 'express';
import { json } from 'body-parser';
import * as dotenv from 'dotenv';
import * as bookController from './controller/bookController';
import * as authController from './controller/authController';
import * as orderController from './controller/orderController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Book Routes
app.post('/books', bookController.createNewBook);
app.get('/books', bookController.getAllBooks);
app.get('/books/:id', bookController.getBookById);

// Auth Routes
app.post('/auth', authController.auth);

// Order Routes
app.post('/orders', orderController.createOrder);
app.delete('/orders/:orderId', orderController.cancelOrder);
app.get('/orders/:customerId', orderController.getOrdersByCustomerId);
app.get('/orders', orderController.getAllOrders);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
