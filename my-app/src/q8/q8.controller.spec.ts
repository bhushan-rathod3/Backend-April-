import { Test, TestingModule } from '@nestjs/testing';
import { Q8Controller } from './q8.controller';

describe('Q8Controller', () => {
  let controller: Q8Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Q8Controller],
    }).compile();

    controller = module.get<Q8Controller>(Q8Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
