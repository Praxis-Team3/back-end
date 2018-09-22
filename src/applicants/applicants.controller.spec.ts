import { Test, TestingModule } from '@nestjs/testing';
import { ApplicantsController } from './applicants.controller';

describe('Applicants Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ApplicantsController],
    }).compile();
  });

  it('should be defined', () => {
    const controller: ApplicantsController = module.get<ApplicantsController>(
      ApplicantsController,
    );

    expect(controller).toBeDefined();
  });
});
