import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.userService.createUser(createUserDto);
    }

    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<UserEntity | undefined> {
        return this.userService.findUserById(id);
    }

    @Get()
    async findAllUsers(): Promise<UserEntity[]> {
        return this.userService.findAllUsers();
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateData: UpdateUserDto,
    ): Promise<void> {
        return this.userService.updateUser(id, updateData);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        return this.userService.deleteUser(id);
    }
}
