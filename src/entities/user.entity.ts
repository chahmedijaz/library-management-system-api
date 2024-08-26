import { IBookRequest, IUser, UserRoleEnum } from "../types/entities";

export class User implements IUser {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public role: UserRoleEnum,
        public bookRequests: IBookRequest[] = []
    ) {}

    addBookRequest(bookRequest: IBookRequest): void {
        this.bookRequests.push(bookRequest);
    }
}
