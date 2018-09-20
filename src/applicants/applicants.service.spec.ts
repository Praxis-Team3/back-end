import { Test, TestingModule } from '@nestjs/testing';
import { ApplicantsService } from './applicants.service';

describe('ApplicantsService', () => {
  let service: ApplicantsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicantsService],
    }).compile();
    service = module.get<ApplicantsService>(ApplicantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
