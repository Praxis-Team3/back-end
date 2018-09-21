import { Test, TestingModule } from '@nestjs/testing';

import { StatusController } from './status.controller';

describe('Status Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StatusController],
    }).compile();
  });

  it('should be defined', () => {
    const controller: StatusController = module.get<StatusController>(StatusController);
    expect(controller).toBeDefined();
  });
});
