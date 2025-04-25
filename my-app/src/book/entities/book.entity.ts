import { BorrowRecord } from '../../borrow/entities/borrow.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  ISBN: string;

  @Column()
  quantity: number;

  @OneToMany(() => BorrowRecord, (borrowRecord) => borrowRecord.book)
  borrowRecords: BorrowRecord[];
}
