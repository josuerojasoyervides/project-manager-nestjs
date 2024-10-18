import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../get-user.query';
import { UserEntity } from '../../../domain/entities/user.entity';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(query: GetUserQuery): Promise<UserEntity | null> {
        const { userId } = query;

        const user = await this.userRepository.findUserById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}
