import { IBook } from "./book.type";
import { IUser } from "./user.type";

export enum RequestStatusEnum {
    submitted,
    completed,
    rejected
}

export interface IBookRequest {
    book: IBook;
    member: IUser;
    requestDate: Date;
    requestDueDate: Date;
    status: RequestStatusEnum;
};
