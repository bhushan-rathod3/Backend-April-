import { Test, TestingModule } from '@nestjs/testing';
import { Q8Service } from './q8.service';

describe('Q8Service', () => {
  let service: Q8Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Q8Service],
    }).compile();

    service = module.get<Q8Service>(Q8Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
