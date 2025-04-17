import { Profile } from 'src/profile/profile.entity';
import { Tweet } from 'src/tweet/tweet.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
    cascade: true,
  })
  profile: Profile;

  @OneToMany(() => Tweet, (tweet) => tweet.user, { eager: true, cascade: true })
  tweets: Tweet[];
}
