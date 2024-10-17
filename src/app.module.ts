import { Module } from '@nestjs/common';
import { POSTGRE_SQL_CONFIG } from '../config/postresql.config'
import { TypeOrmModule } from '@nestjs/typeorm';
// Modules
import { ProjectsModule } from './projects/projects.module'
import { TasksModule } from './tasks/tasks.module'
import { UsersModule } from './users/users.module'


POSTGRE_SQL_CONFIG
@Module({
  imports: [
    TypeOrmModule.forRoot(POSTGRE_SQL_CONFIG),
    UsersModule,
    ProjectsModule,
    TasksModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
