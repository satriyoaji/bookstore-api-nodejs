import Book from '../entities/Book';

export const getAllBooks = async () => {
  return Book.findAll();
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
