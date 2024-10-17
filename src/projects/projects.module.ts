import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './domain/entities/project.entity';
import { ProjectRepositoryImpl } from './infrastructure/persistence/project.repository';
import { ProjectService } from './application/services/project.service';
import { ProjectController } from './application/controllers/project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Project, ProjectRepositoryImpl])],
    providers: [ProjectService],
    controllers: [ProjectController],
})
export class ProjectsModule { }
