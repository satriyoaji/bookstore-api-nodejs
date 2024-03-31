import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';

class Book extends Model {
  public id!: number;
  public title!: string;
  public writer!: string;
  public coverImage!: string;
  public point!: number;
  public tags!: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'books',
  }
);

export default Book;
