import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { BookModel, BookRequestModel, LibraryModel, UserModel } from "../lib/mongoose/models";

export class UsersController extends BaseController {
    /**
     * index
     */
    public async index(req: Request, res: Response) {
        const { page = 1, pageSize = 10, libraryId } = req.query;
        let users: any = [];
        try {
            if (libraryId) {
                const library = await LibraryModel.findById(libraryId).populate('users').exec();
                users = library?.users || [];
            }
            else {
                users = await UserModel.where()
                .skip((Number(page) - 1) * Number(pageSize))
                .limit(Number(pageSize)).exec();
            }

            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * async create
     */
    public async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            // Check if the email is already in use
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email is already in use' });
            }

            const newUser = new UserModel({ name, email, password, role: 'member' });
            await newUser.save();

            res.status(201).json(newUser);
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
        const { name, email, password } = req.body;

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                id,
                { name, email, password },
                { new: true } // Returns the updated user
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
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
            // Remove all book requests associated with the user
            await BookRequestModel.deleteMany({ member: id });

            // Delete the user
            const deletedUser = await UserModel.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }

    }
}
