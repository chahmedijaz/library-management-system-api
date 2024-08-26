import { IBook, ILibrary, IUser } from "../types/entities";

export class Library implements ILibrary {
    constructor(
        public name: string,
        public books: IBook[],
        public users: IUser[]
    ) {}

    addBook(book: IBook): void {
        this.books.push(book);
    }

    addUser(user: IUser): void {
        this.users.push(user);
    }
};
