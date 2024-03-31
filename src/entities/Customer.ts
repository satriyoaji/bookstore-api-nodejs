import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';

class Customer extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public points!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    },
  },
  {
    sequelize,
    tableName: 'customers',
  }
);

export default Customer;
