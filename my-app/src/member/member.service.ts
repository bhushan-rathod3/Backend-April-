import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepo: Repository<Member>,
  ) {}

  register(createMemberDto: CreateMemberDto) {
    const member = this.memberRepo.create(createMemberDto);
    return this.memberRepo.save(member);
  }

  findAll() {
    return `This action returns all member`;
  }

  async findById(id: number) {
    return this.memberRepo.findOne({ where: { id } });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
