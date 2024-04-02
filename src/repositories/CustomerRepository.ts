import Customer from '../entities/Customer';
import Order from "../entities/Order";

export const createCustomer = async (username: string, password: string) => {
  try {
    return Customer.create({ username, password });
  } catch (error) {
    throw new Error('Error creating order');
  }
};

export const getCustomerById = async (id: number) => {
  return Customer.findByPk(id);
};

export const getCustomerByUsername = async (username: string) => {
  return Customer.findOne({ where: { username } });
};

export const updateCustomerPoints = async (customerId: number, newPoints: number) => {
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }

    // Update customer points
    customer.points = newPoints;
    await customer.save();

    return customer;
  } catch (error) {
    throw new Error('Error updating customer points');
  }
};
