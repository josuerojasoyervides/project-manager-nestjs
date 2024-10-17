import { Module } from '@nestjs/common';
import { POSTGRE_SQL_CONFIG } from '../config/postresql.config'
import { TypeOrmModule } from '@nestjs/typeorm';


POSTGRE_SQL_CONFIG
@Module({
  imports: [
    TypeOrmModule.forRoot(POSTGRE_SQL_CONFIG)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
