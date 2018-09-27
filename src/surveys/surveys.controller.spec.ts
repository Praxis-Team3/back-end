import { Test, TestingModule } from '@nestjs/testing';
import { SurveysController } from './surveys.controller';

describe('Surveys Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SurveysController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SurveysController = module.get<SurveysController>(SurveysController);
    expect(controller).toBeDefined();
  });
});
