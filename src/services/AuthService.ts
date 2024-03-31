import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { getCustomerByUsername, createCustomer } from '../repositories/customerRepository';
import { dbConfig } from '../config';

export const auth = async (username: string, password: string) => {
  const customer = await getCustomerByUsername(username);
  if (!customer) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await createCustomer(username, hashedPassword);
    const token = jwt.sign({ customerId: customer.id }, dbConfig["development"].secret, { expiresIn: '1d' });
    return { customer, token };
  } else {
    const validPassword = await bcrypt.compare(password, customer.password);
    if (!validPassword) throw new Error('Invalid username or password');

    const token = jwt.sign({ customerId: customer.id }, dbConfig["development"].secret, { expiresIn: '1d' });
    return { customer, token };
  }
};



