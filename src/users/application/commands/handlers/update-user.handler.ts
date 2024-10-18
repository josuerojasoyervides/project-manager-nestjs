import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../update-user.command';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { UserPartialUpdateBuilder } from '../../../domain/builders/user-partial-update.builder';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(command: UpdateUserCommand): Promise<void> {
        const {id, name, email, password } = command;

        const builtUser = new UserPartialUpdateBuilder(id)
            .setName(name)
            .setEmail(email)
            .setPassword(password)
            .build()

        await this.userRepository.updateUser(builtUser);
    }
}