import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { UserEntity } from './domain/entities/user.entity';

// Servicios
import { UserService } from './application/services/user.service';

// Controladores
import { UserController } from './application/controllers/user.controller';

// Comandos y Handlers
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { UpdateUserHandler } from './application/commands/handlers/update-user.handler';
import { DeleteUserHandler } from './application/commands/handlers/delete-user.handler';

// Queries y Handlers
import { GetUserHandler } from './application/queries/handlers/get-user.handler';

// Repositorios
import { UserRepositoryImpl } from './infrastructure/persistence/user.repository';
import { IUserRepository } from './domain/repositories/user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        CqrsModule,
    ],
    providers: [
        UserService,
        { provide: IUserRepository, useClass: UserRepositoryImpl },
        // Command Handlers
        CreateUserHandler,
        UpdateUserHandler,
        DeleteUserHandler,
        // Queries Handlers
        GetUserHandler,
    ],
    controllers: [UserController],
})
export class UsersModule { }
