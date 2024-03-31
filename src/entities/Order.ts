import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';

class Order extends Model {
  public id!: number;
  public customerId!: number;
  public bookId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
