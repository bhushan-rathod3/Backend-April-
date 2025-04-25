import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: 'OPEN' | 'DONE';

  @Column()
  createdById: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
