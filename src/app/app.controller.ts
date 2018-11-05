import { Get, Controller } from '@nestjs/common';
import AppService from './app.service';

@Controller()
class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  root(): string {
    return this.appService.root();
  }
}

export default AppController;