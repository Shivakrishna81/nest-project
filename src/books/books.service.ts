import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { where } from 'sequelize';

// let books=[
//     {
//       "id": "1",
//       "title": "The Catcher in the Rye",
//       "author": "J.D. Salinger",
//       "publishedDate": "1951-07-16",
//       "isbn": "978-0316769488"
//     },
//     {
//       "id": "2",
//       "title": "To Kill a Mockingbird",
//       "author": "Harper Lee",
//       "publishedDate": "1960-07-11",
//       "isbn": "978-0061120084"
//     },
//     {
//       "id":"3",
//       "title": "1984",
//       "author": "George Orwell",
//       "publishedDate": "1949-06-08",
//       "isbn": "978-0451524935"
//     },
//     {
//       "id": 4,
//       "title": "Moby-Dick",
//       "author": "Herman Melville",
//       "publishedDate": "1851-10-18",
//       "isbn": "978-1503280786"
//     },
//     {
//       "id": 5,
//       "title": "Pride and Prejudice",
//       "author": "Jane Austen",
//       "publishedDate": "1813-01-28",
//       "isbn": "978-1503290563"
//     }
//   ]


@Injectable()
export class BooksService {

  async getAllBooks() {
    try {
      return await Book.findAll()
    }
    catch (err) {
      return err
    }
  }

  async getBookById(id: string) {
    try {
      return await Book.findOne({ where: { id } })
    } catch (err) {
      return err
    }
  }

  async addBook(book: any) {
    try {
      const result = await Book.create(book)
      return result
    }
    catch (err) {
      return err
    }
  }

  async updateBook(update: any, id: string) {

    try {
      return await Book.update(update, { where: { id }, returning: true })
    } catch (err) {
      return err
    }
  }

  async deleteById(id: string) {

    try {
      return await Book.destroy({ where: { id } })
    } catch (err) {
      return err
    }
  }

}
