import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const POSTGRE_SQL_CONFIG: TypeOrmModuleOptions = {
    type: "postgres",
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [],
    autoLoadEntities: true,
    synchronize: true, // false for prod
    retryDelay: 3000,
    retryAttempts: 10,
} as const