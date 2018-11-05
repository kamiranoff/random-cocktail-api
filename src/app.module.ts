import { HttpModule, Module } from '@nestjs/common';
import AppController from './app/app.controller';
import AppService from './app/app.service';
import CocktailController from './cocktails/cocktail.controller';
import CocktailService from './cocktails/cocktail.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CocktailController],
  providers: [AppService, CocktailService],
})
export class AppModule {
}
