import { Request, Response } from 'express';
import * as bookService from '../services/bookService';
import {createBookService} from "../services/bookService";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooksService();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bookId = parseInt(id);
    const book = await bookService.getBookByIdService(bookId);
    res.json(book);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export const createNewBook = async (req: Request, res: Response) => {
  try {
    const { title, writer, coverImage, point, tags } = req.body;
    const bookData = { title, writer, coverImage, point, tags };
    const newBook = await createBookService(bookData);
    res.status(201).json({ message: 'Book created successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ error: 'Error creating book' });
  }
};
