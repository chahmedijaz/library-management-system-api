import { IBook } from "./book.type";
import { IUser } from "./user.type";

export interface ILibrary {
    name: String;
    books: IBook[];
    users: IUser[];
};
