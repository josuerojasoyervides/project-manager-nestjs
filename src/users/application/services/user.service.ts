import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { GetUserQuery } from '../queries/get-user.query';
import { UpdateUserCommand } from '../commands/update-user.command';
import { DeleteUserCommand } from '../commands/delete-user.command';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<void> {
        const { name, email, password } = createUserDto;
        const command = new CreateUserCommand(name, email, password);
        return this.commandBus.execute(command);
    }

    async findUserById(id: string): Promise<UserEntity | undefined> {
        const query = new GetUserQuery(id);
        return this.queryBus.execute(query);
    }

    async findAllUsers(): Promise<UserEntity[]> {
        const query = new GetUserQuery(null);
        return this.queryBus.execute(query);
    }

    async updateUser(id: string, updateData: UpdateUserDto): Promise<void> {
        const command = new UpdateUserCommand(id, updateData);
        return this.commandBus.execute(command);
    }

    async deleteUser(id: string): Promise<void> {
        const command = new DeleteUserCommand(id);
        return this.commandBus.execute(command);
    }
}
