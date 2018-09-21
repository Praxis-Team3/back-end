import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {

  @Get()
  async status(): Promise<any> {
    return {
      code: 200,
      running: true,
    }
  }
}
