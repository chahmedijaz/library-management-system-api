import { Request, Response } from "express";
import { BookModel, BookRequestModel, LibraryModel, UserModel } from "../lib/mongoose/models";
import { bookRequestSeedData, bookSeedData, librarySeedData, userSeedData } from "../lib/mongoose/seed";

// Mongoose specific
export class SeedsController {
    async create(_req: Request, res: Response) {
        await Promise.all([
            BookModel.deleteMany({}),
            UserModel.deleteMany({}),
            BookRequestModel.deleteMany({}),
            LibraryModel.deleteMany({})
        ]);
        await BookModel.insertMany(bookSeedData);
        await UserModel.insertMany(userSeedData);
        await BookRequestModel.insertMany(bookRequestSeedData);
        await LibraryModel.insertMany(librarySeedData);

        res.send('Database has been seeded successfully');
    }
};
