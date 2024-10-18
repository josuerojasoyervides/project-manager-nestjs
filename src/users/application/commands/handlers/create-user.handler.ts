import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { UserEntity } from '../../../domain/entities/user.entity';
import { UserId } from '../../../domain/value-objects/user-id.vo';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(command: CreateUserCommand): Promise<void> {
        const { name, email, password } = command;

        const userId = UserId.create();

        const user = new UserEntity(name, email, password, userId);

        await this.userRepository.saveUser(user);
    }
}