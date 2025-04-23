import { BorrowRecord } from 'src/borrow/entities/borrow.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => BorrowRecord, (record) => record.member)
  borrowRecords: BorrowRecord[];
}
