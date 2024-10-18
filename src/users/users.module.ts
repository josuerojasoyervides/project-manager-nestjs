import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

// Entities
import { UserEntity } from './infrastructure/entities/user.entity';

// Services
import { UserService } from './application/services/user.service';

// Controllers
import { UserController } from './application/controllers/user.controller';

// CQRS Commands
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { UpdateUserHandler } from './application/commands/handlers/update-user.handler';
import { DeleteUserHandler } from './application/commands/handlers/delete-user.handler';

// CQRS Queries
import { GetUserHandler } from './application/queries/handlers/get-user.handler';

// Repositories
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
        // Query Handlers
        GetUserHandler,
    ],
    controllers: [UserController],  // Controlador de usuarios
})
export class UsersModule {}
