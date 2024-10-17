import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { UserRepositoryImpl } from './infrastructure/persistence/user.repository';
import { UserService } from './application/services/user.service';
import { UserController } from './application/controllers/user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserRepositoryImpl])],
    providers: [UserService],
    controllers: [UserController],
})
export class UsersModule { }
