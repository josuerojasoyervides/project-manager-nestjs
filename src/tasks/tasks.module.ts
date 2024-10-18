import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './domain/entities/task.entity';
import { TaskRepositoryImpl } from './infrastructure/persistence/task.repository';
import { TaskService } from './application/services/task.service';
import { TaskController } from './application/controllers/task.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [],
    controllers: [],
})
export class TasksModule { }
