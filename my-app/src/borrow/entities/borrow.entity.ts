import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Book } from 'src/book/entities/book.entity';

@Entity()
export class BorrowRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.borrowRecords)
  book: Book;

  @ManyToOne(() => Member, (member) => member.borrowRecords)
  member: Member;

  @Column()
  borrowDate: Date;

  @Column()
  dueDate: Date;

  @Column({ nullable: true })
  returnDate: Date;
}
