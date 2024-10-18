import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from '../../../users/domain/entities/user.entity';
import { Task } from 'src/tasks/domain/entities/task.entity';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.projects)
    owner: UserEntity;

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];
}
