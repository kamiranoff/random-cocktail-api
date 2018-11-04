import { Injectable } from '@nestjs/common';

@Injectable()
class SuperheroService {
  findRandom(): string {
    return 'Random Superhero!';
  }
}

export default SuperheroService;