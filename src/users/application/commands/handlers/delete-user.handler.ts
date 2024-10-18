import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../delete-user.command';
import { IUserRepository } from '../../../domain/repositories/user.repository';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(command: DeleteUserCommand): Promise<void> {
        const { id } = command;

        const user = await this.userRepository.findUserById(id);

        if (!user) {
            throw new Error('User not found');
        }

        await this.userRepository.deleteUser(id);
    }
}