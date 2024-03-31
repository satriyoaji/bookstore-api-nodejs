import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {dbConfig} from "../config";

// Define a custom interface that extends the Express Request interface
export interface CustomRequest extends Request {
  customerId?: number; // Define the 'customerId' property as optional
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, dbConfig["development"].secret
    , (err, decoded: any) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    req.customerId = decoded.customerId; // Add customerId to request object
    next();
  });
};
