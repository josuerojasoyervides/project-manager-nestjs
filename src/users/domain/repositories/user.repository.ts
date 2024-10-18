import { User } from '../models/user.model';
import { UserPartialUpdate } from '../models/user-partial-update.model';

export abstract class IUserRepository {
    abstract findUserById(id: string): Promise<User | undefined>;
    abstract saveUser(user: User): Promise<User>;
    abstract updateUser(optionalUser: UserPartialUpdate): Promise<void>;
    abstract deleteUser(id: string): Promise<void>;
}
