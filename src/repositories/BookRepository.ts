import Book from '../entities/Book';
import {Op} from "sequelize";

export const getAllBooks = async (page: number, limit: number, name?: string) => {
  try {
    let whereClause = {};
    if (name) {
      whereClause = { title: { [Op.iLike]: `%${name}%` } };
    }

    return await Book.findAndCountAll({
      where: whereClause,
      limit,
      offset: (page - 1) * limit,
    });
  } catch (error) {
    throw new Error('Error fetching books');
  }
};

export const getBookById = async (id: number) => {
  return Book.findByPk(id);
};

export const createBook = async (bookData: any) => {
  try {
    const newBook = await Book.create(bookData);
    return newBook;
  } catch (error) {
    throw new Error('Error creating book');
  }
};
