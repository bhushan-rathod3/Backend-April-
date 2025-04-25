import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Book } from 'src/book/entities/book.entity';

@Entity()
export class BorrowRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @Column()
  memberId: number;

  @Column()
  borrowDate: Date;

  @Column({ nullable: true })
  returnDate: Date;

  @Column()
  dueDate: Date;

  @ManyToOne(() => Book, (book) => book.borrowRecords)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @ManyToOne(() => Member, (member) => member.borrowRecords)
  @JoinColumn({ name: 'memberId' })
  member: Member;
}
