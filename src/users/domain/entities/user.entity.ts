import { Project } from 'src/projects/domain/entities/project.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserId } from '../value-objects/user-id.vo';

@Entity('users')
export class UserEntity {
    @PrimaryColumn()
    id: string; // Almacenamos el valor de UserId (como string) directamente en la columna

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => Project, project => project.owner)
    projects: Project[];

    // Constructor que toma un UserId opcional
    constructor(name: string, email: string, password: string, id?: UserId) {
        this.id = id ? id.getValue() : UserId.create().getValue(); // Convertimos el UserId a string para almacenarlo
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
