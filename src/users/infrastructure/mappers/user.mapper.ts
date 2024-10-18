import { User } from '../../domain/models/user.model';
import { UserId } from '../../domain/value-objects/user-id.vo';
import { UserFactory } from '../../domain/factories/user.factory';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
    public static toEntity(user: User): UserEntity {
        const userEntity = new UserEntity();
        userEntity.id = user.getId();
        userEntity.name = user.getName();
        userEntity.email = user.getEmail();
        userEntity.password = user.getPassword();
        userEntity.createdAt = user.getCreatedAt();
        return userEntity;
    }

    public static toDomain(userEntity: UserEntity): User {
        const userId = UserId.create(userEntity.id);
        return UserFactory.reconstitute(
            userId,
            userEntity.name,
            userEntity.email,
            userEntity.password,
            userEntity.createdAt,
        );
    }
}
