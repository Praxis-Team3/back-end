import { Test, TestingModule } from '@nestjs/testing';
import { StorageController } from './storage.controller';

describe('Storage Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StorageController],
    }).compile();
  });

  it('should be defined', () => {
    const controller: StorageController = module.get<StorageController>(StorageController);
    expect(controller).toBeDefined();
  });
});
