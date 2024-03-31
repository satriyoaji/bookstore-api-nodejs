// const { sequelize } = require('../src/config');
import { sequelize } from '../src/config';
// const Book = require('../src/entity/Book');
import Book from "../src/entity/Book";

// Define the book data
const booksData = [
  {
    title: 'To Kill a Mockingbird',
    writer: 'Harper Lee',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
    point: 10,
    tags: ['fiction']
  },
  {
    title: '1984',
    writer: 'George Orwell',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
    point: 12,
    tags: ['fiction', 'dystopian']
  },
  {
    title: 'The Great Gatsby',
    writer: 'F. Scott Fitzgerald',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51hXWtjTJkL._AC_SX184_.jpg',
    point: 15,
    tags: ['fiction', 'classics']
  },
  {
    title: 'Pride and Prejudice',
    writer: 'Jane Austen',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71fV90uvudL.jpg',
    point: 14,
    tags: ['fiction', 'classics']
  },
  {
    title: 'The Catcher in the Rye',
    writer: 'J.D. Salinger',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91B4u3H0ZlL.jpg',
    point: 11,
    tags: ['fiction', 'classics']
  }
];

// Function to seed books
const seedBooks = async () => {
  try {
    // Sync the Book model with the database
    await sequelize.sync();

    // Create books in the database
    for (const bookData of booksData) {
      await Book.create(bookData);
    }

    console.log('Books seeded successfully.');
  } catch (error) {
    console.error('Error seeding books:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Seed the books
seedBooks();
