import { BorrowRecord } from '../../borrow/entities/borrow.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => BorrowRecord, (borrowRecord) => borrowRecord.member)
  borrowRecords: BorrowRecord[];
}
