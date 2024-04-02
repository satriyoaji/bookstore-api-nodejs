import {createBook, getAllBooks, getBookById} from '../repositories/bookRepository';

export const getAllBooksService = async (page: number, limit: number, name?: string) => {
  return getAllBooks(page, limit, name);
};

export const getBookByIdService = async (id: number) => {
  return getBookById(id);
};

export const createBookService = async (bookData: any) => {
  try {
    return await createBook(bookData);
  } catch (error) {
    throw new Error('Error creating book');
  }
};
