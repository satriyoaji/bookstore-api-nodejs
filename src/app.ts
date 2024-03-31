import express from 'express';
import { json } from 'body-parser';
import * as dotenv from 'dotenv';
import bookRoutes from "./routes/bookRoute";
import authRoute from "./routes/authRoute";
import orderRoute from "./routes/orderRoute";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/books', bookRoutes);
app.use('/auth', authRoute);
app.use('/orders', orderRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
