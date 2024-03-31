import * as process from "process";
import {Sequelize} from "sequelize";

export const dbConfig = {
  development: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "nodejs_api_test",
    dialect: "postgres" as "postgres",
    secret: process.env.AUTH_SECRET || "secret_key",
  },
  test: {
    username: 'your_test_username',
    password: 'your_test_password',
    database: 'bookstore_test',
    host: 'localhost',
    dialect: "postgres" as "postgres",
    secret: process.env.AUTH_SECRET || "secret_key",
  },
  production: {
    username: 'your_prod_username',
    password: 'your_prod_password',
    database: 'bookstore_production',
    host: 'localhost',
    dialect: "postgres" as "postgres",
    secret: process.env.AUTH_SECRET || "secret_key",
  }
};

const NodeENV  = process.env.NODE_ENV || "development"
// Create a new Sequelize instance
export const sequelize = new Sequelize(
  dbConfig["development"].database,
  dbConfig["development"].username,
  dbConfig["development"].password,
  {
    host: dbConfig["development"].host,
    dialect: dbConfig["development"].dialect
  }
);

// module.exports = { sequelize };
