import { BookRequest } from "..";
import { IBook, IUser, RequestStatusEnum } from "../../types/entities";

export class BookRequestFactory {
    static create(
        book: IBook,
        member: IUser,
        requestDate: Date = new Date(),
        requestDueDate: Date,
        status: RequestStatusEnum = RequestStatusEnum.submitted
    ): BookRequest {
        return new BookRequest(book, member, requestDate, requestDueDate, status);
    }
};
