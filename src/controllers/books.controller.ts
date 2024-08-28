import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { SessionStorage } from "../entities";
import { BookModel, LibraryModel } from "../lib/mongoose/models";

export class BooksController extends BaseController {
    /**
     * index
     */
    public async index(req: Request, res: Response) {
        const currentLibrary: any = SessionStorage.sessionLibrary(req);
        const { page, pageSize } = req.query;
        try {
            const library = (await LibraryModel.findOne(currentLibrary._id).populate('books').exec());
            if (!library) {
                return res.status(404).json({ message: 'Books not found' });
            }

            const total = library.books.length;
            const startIndex = (Number(page) - 1) * Number(pageSize);
            const endIndex = startIndex + Number(pageSize);
            const paginatedBooks = library.books.slice(
                startIndex, 
                endIndex
            );

            res.status(200).json({total, books: paginatedBooks});
        } catch (error) {
            res.status(500).json({error});
        }
    }

    /**
     * async create
     */
    public async create(req: Request, res: Response) {
        const currentLibrary: any = SessionStorage.sessionLibrary(req);
        const { title, authorName, quantity } = req.body;

        try {
            // Find the library by ID
            const library = await LibraryModel.findById(currentLibrary._id);
            if (!library) {
            return res.status(404).json({ message: 'Library not found' });
            }

            // Create a new book
            const newBook = new BookModel({
                title,
                authorName,
                quantity,
            });

            // Save the book to the database
            const savedBook = await newBook.save();

            // Add the book to the library's books array
            library.books.push(savedBook._id);
            await library.save();

            // Respond with the created book
            res.status(201).json(savedBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * update
     */
    public async update(req: Request, res: Response) {
        const currentLibrary: any = SessionStorage.sessionLibrary(req);
        const { id } = req.params;
        const { title, authorName, quantity } = req.body;
        try {
            // Check if the library exists
            const library = await LibraryModel.findOne(currentLibrary._id);
            if (!library) {
              return res.status(404).json({ message: 'Library not found' });
            }
        
            // Check if the book exists within the library
            const bookIndex = library.books.findIndex(book => book.equals(id));
            if (bookIndex === -1) {
              return res.status(404).json({ message: 'Book not found in this library' });
            }
        
            // Update the book
            const updatedBook = await BookModel.findByIdAndUpdate(id, {
              title,
              authorName,
              quantity,
            }, { new: true }); // Returns the updated book
        
            if (!updatedBook) {
              return res.status(404).json({ message: 'Book not found' });
            }
        
            // Respond with the updated book
            res.status(200).json(updatedBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * delete
     */
    public async delete(req: Request, res: Response) {
        const currentLibrary: any = SessionStorage.sessionLibrary(req);
        const { id } = req.params;
        try {
            // Check if the library exists
            const library = await LibraryModel.findById(currentLibrary._id);
            if (!library) {
              return res.status(404).json({ message: 'Library not found' });
            }
        
            // Check if the book exists within the library
            const bookIndex = library.books.findIndex(book => book.equals(id));
            if (bookIndex === -1) {
              return res.status(404).json({ message: 'Book not found in this library' });
            }
        
            // Remove the book from the library's books array
            library.books.splice(bookIndex, 1);
            await library.save();
        
            // Delete the book from the database
            await BookModel.findByIdAndDelete(id);
        
            // Respond with a success message
            res.status(200).json({ message: 'Book successfully deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}