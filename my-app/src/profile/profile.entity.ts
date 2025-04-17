import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @Column()
  location: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
