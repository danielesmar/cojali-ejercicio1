import { User } from "../domain/User";
import { UserService } from "../infrastructure/api/UserService";

export const fetchUsers = async (): Promise<User[]> => {
    return await UserService.getUsers();
};