import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
class CocktailService {
  constructor(private readonly httpService: HttpService) {
  }

  // TODO make sure filter works
  randomCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Alcoholic';

  findRandom(): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.randomCocktailUrl);
  }
}

export default CocktailService;