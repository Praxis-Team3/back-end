import { Module, Global } from '@nestjs/common';

import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';

@Global()
@Module({
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule { }
