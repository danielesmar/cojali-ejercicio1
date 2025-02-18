import { User } from "../../core/domain/User";

export class UserService {
    static async getUsers(): Promise<User[]> {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const data = await response.json();
        return data.results.map((user: any) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            country: user.location.country,
            picture: user.picture.thumbnail,
        }));
    }
}