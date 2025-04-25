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

  async register(createMemberDto: CreateMemberDto) {
    const member = this.memberRepo.create(createMemberDto);
    return await this.memberRepo.save(member);
  }

  async findAll() {
    return await this.memberRepo.find();
  }

  async findById(id: number) {
    return await this.memberRepo.findOne({ where: { id } });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    await this.memberRepo.update(id, updateMemberDto);
    return await this.findById(id);
  }

  async remove(id: number) {
    await this.memberRepo.delete(id);
  }
}
