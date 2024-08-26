import { User } from "..";
import { IBookRequest, UserRoleEnum } from "../../types/entities";

export class UserFactory {
    static create(
        name: string,
        email: string,
        password: string,
        role: UserRoleEnum = UserRoleEnum.member,
        bookRequests: IBookRequest[] = []
    ): User {
        return new User(name, email, password, role, bookRequests);
    }
};
