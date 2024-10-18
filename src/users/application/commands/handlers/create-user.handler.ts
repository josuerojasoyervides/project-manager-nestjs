import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/models/user.model';
import { UserId } from '../../../domain/value-objects/user-id.vo';
import { UserFactory } from '../../../domain/factories/user.factory';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(command: CreateUserCommand): Promise<void> {
        const { name, email, password } = command;

        const user = UserFactory.create(name, email, password);

        await this.userRepository.saveUser(user);
    }
}