import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) { }

    async findUserById(id: string): Promise<UserEntity | undefined> {
        return this.repository.findOne({ where: { id } });
    }

    async saveUser(user: UserEntity): Promise<UserEntity> {
        return this.repository.save(user); // Usa el método nativo de TypeORM
    }

    async updateUser(id: string, user: Partial<UserEntity>): Promise<UserEntity> {
        await this.repository.update(id, user); // Usa el método nativo de TypeORM
        return this.findUserById(id) as Promise<UserEntity>; // Devuelve el usuario actualizado
    }

    async deleteUser(id: string): Promise<void> {
        await this.repository.delete(id); // Usa el método delete nativo de TypeORM
    }
}
