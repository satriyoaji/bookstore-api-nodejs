import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const auth = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const { customer, token } = await authService.auth(username, password);
    customer.password = ""
    res.json({ customer, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
