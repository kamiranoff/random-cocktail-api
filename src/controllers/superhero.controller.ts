import { Controller, Get } from '@nestjs/common';
import { SuperheroService } from '../services';

@Controller('superheroes')
class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {
  }

  @Get()
  findRandom(): string {
    return this.superheroService.findRandom();
  }
}

export default SuperheroController;
