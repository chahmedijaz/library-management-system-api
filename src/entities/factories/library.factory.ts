import { Library } from "..";
import { IBook, IUser } from "../../types/entities";

export class LibraryFactory {
    static create(name: string, books: IBook[] = [], users: IUser[] = []): Library {
        return new Library(name, books, users);
    }
};
