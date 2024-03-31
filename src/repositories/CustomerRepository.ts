import Customer from '../entities/Customer';

export const createCustomer = async (username: string, password: string) => {
  return Customer.create({ username, password });
};

export const getCustomerById = async (id: number) => {
  return Customer.findByPk(id);
};

export const getCustomerByUsername = async (username: string) => {
  return Customer.findOne({ where: { username } });
};
