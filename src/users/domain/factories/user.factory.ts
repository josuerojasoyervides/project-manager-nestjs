import { User } from '../models/user.model';
import { UserId } from '../value-objects/user-id.vo';

export class UserFactory {
    public static create(name: string, email: string, password: string): User {
        const id = UserId.create();
        const createdAt = new Date();
        return new User(id.getValue(), name, email, password, createdAt);
    }

    public static reconstitute(
        id: UserId,
        name: string,
        email: string,
        password: string,
        createdAt: Date,
    ): User {
        return new User(id.getValue(), name, email, password, createdAt);
    }
}
