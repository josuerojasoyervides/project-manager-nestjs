import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../update-user.command';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { UserEntity } from '../../../domain/entities/user.entity';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(command: UpdateUserCommand): Promise<void> {
        const { id, updateData } = command;

        const user = await this.userRepository.findUserById(id);

        if (!user) {
            throw new Error('User not found');
        }

        const updatedUser: UserEntity = {
            ...user,
            ...updateData,
        };

        await this.userRepository.saveUser(updatedUser);
    }
}
