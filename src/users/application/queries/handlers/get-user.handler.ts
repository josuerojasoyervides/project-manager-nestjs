import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../get-user.query';
import { User } from '../../../domain/models/user.model';
import { IUserRepository } from 'src/users/domain/repositories/user.repository';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(query: GetUserQuery): Promise<User | null> {
        const { userId } = query;

        const user = await this.userRepository.findUserById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}