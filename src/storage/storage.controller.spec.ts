import { Test, TestingModule } from '@nestjs/testing';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';

describe('Storage Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StorageController],
      providers: [StorageService],
    }).compile();
  });

  it('should be defined', () => {
    const controller: StorageController = module.get<StorageController>(StorageController);
    expect(controller).toBeDefined();
  });
});
