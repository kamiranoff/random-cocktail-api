import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  root(): string {
    return 'Hello World!';
  }
}

export default AppService;
