import { Module } from '@nestjs/common';
import { AppController, SuperheroController } from './controllers';
import { AppService, SuperheroService } from './services';

@Module({
  imports: [],
  controllers: [AppController, SuperheroController],
  providers: [AppService, SuperheroService],
})
export class AppModule {
}
