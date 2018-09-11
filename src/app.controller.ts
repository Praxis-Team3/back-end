import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  status(): any {
    return {
      status: 'ok!',
    };
  }
}
