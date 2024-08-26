import { IBookRequest } from "./book-request.type";

export enum UserRoleEnum {
    superAdmin,
    librarian,
    member
};

export interface IUser {
    name: String;
    email: String;
    password: String;
    role: UserRoleEnum;
    bookRequests: IBookRequest[]
};
