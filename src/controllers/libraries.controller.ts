import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { SessionStorage } from "../entities";
import { BookModel, LibraryModel } from "../lib/mongoose/models";

export class LibrariesController extends BaseController {
    /**
     * index
     */
    public async index(req: Request, res: Response) {
        const { page = 1, pageSize = 10 } = req.query;

        try {
            const libraries = await LibraryModel.find()
            .skip((Number(page) - 1) * Number(pageSize))
            .limit(Number(pageSize));

            res.status(200).json(
                libraries.map((library) => ({_id: library._id, name: library.name}))
            );
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * async create
     */
    public async create(req: Request, res: Response) {
        const { name } = req.body;

        try {
            const newLibrary = new LibraryModel({ name, books: [], users: [] });
            await newLibrary.save();

            res.status(201).json(newLibrary);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * update
     */
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const updatedLibrary = await LibraryModel.findByIdAndUpdate(
            id,
            { name },
            { new: true } // Returns the updated library
            );

            if (!updatedLibrary) {
            return res.status(404).json({ message: 'Library not found' });
            }

            res.status(200).json(updatedLibrary);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }

    }

    /**
     * delete
     */
    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const deletedLibrary = await LibraryModel.findByIdAndDelete(id);
            if (!deletedLibrary) {
                return res.status(404).json({ message: 'Library not found' });
            }

            res.status(200).json({ message: 'Library deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}