import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs/operators';
import CocktailService from './cocktail.service';

@Controller('cocktails')
class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {
  }

  @Get('random')
  findRandom(): any {
    return this.cocktailService.findRandom()
      .pipe(
        map((response: any) => response.data),
      );
  }
}

export default CocktailController;
