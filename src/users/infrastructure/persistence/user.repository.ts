import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// Domain
import { IUserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/models/user.model';
import { UserPartialUpdate } from '../../domain/models/user-partial-update.model';
// Infrastructure
import { UserEntity } from '../../infrastructure/entities/user.entity';
import { UserMapper } from '../../infrastructure/mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) {}

    async findUserById(id: string): Promise<User | undefined> {
        const userEntity = await this.repository.findOne({ where: { id } });
        if (!userEntity) {
            return undefined;
        }
        return UserMapper.toDomain(userEntity);
    }

    // Save or Update
    async saveUser(user: User): Promise<User> {
        const userEntity = UserMapper.toEntity(user);
        const savedUserEntity = await this.repository.save(userEntity);
        return UserMapper.toDomain(savedUserEntity);
    }

    async updateUser(userPartialUpdate: UserPartialUpdate): Promise<void> {
        const { id, name, email, password } = userPartialUpdate;

        // Find the existing user entity
        let userEntity = await this.repository.findOne({ where: { id } });

        if (!userEntity) {
            throw new Error(`User with ID ${id} not found`);
        }

        // Update only the fields that are provided
        if (name !== undefined) {
            userEntity = {...userEntity, name}
        }
        if (email !== undefined) {
            userEntity = {...userEntity, email}
        }
        if (password !== undefined) {
            userEntity = {...userEntity, password}
        }

        // Save the updated entity
        await this.repository.save(userEntity);
    }

    async deleteUser(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
