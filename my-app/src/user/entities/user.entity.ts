import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity('app_user')
export class User {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Expose()
  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
