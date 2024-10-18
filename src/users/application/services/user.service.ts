import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { GetUserQuery } from '../queries/get-user.query';
import { UpdateUserCommand } from '../commands/update-user.command';
import { DeleteUserCommand } from '../commands/delete-user.command';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../../domain/models/user.model';

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

    async findUserById(id: string): Promise<User | undefined> {
        const query = new GetUserQuery(id);
        return this.queryBus.execute(query);
    }

    async findAllUsers(): Promise<User[]> {
        const query = new GetUserQuery(null);
        return this.queryBus.execute(query);
    }

    async updateUser(id, updateData: UpdateUserDto): Promise<void> {

        const { name, email, password } = updateData

        const command = new UpdateUserCommand(id, name, email, password);
        return this.commandBus.execute(command);
    }

    async deleteUser(id: string): Promise<void> {
        const command = new DeleteUserCommand(id);
        return this.commandBus.execute(command);
    }
}
