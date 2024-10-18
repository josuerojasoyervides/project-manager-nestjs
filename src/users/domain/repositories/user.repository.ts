import { UserEntity } from '../entities/user.entity';

export abstract class IUserRepository {
    abstract findUserById(id: string): Promise<UserEntity | undefined>;
    abstract saveUser(user: UserEntity): Promise<UserEntity>;
    abstract updateUser(id: string, user: Partial<UserEntity>): Promise<UserEntity>;
    abstract deleteUser(id: string): Promise<void>;
}
