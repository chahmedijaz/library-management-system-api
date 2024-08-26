import { IBook, IBookRequest, IUser, RequestStatusEnum } from "../types/entities";

export class BookRequest implements IBookRequest {
    constructor(
        public book: IBook,
        public member: IUser,
        public requestDate: Date,
        public requestDueDate: Date,
        public status: RequestStatusEnum = RequestStatusEnum.submitted
    ) {}

    completeRequest(): void {
        this.status = RequestStatusEnum.completed;
    }

    rejectRequest(): void {
        this.status = RequestStatusEnum.rejected;
    }
}
