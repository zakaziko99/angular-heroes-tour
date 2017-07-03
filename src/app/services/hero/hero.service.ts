import { Injectable } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HEROES } from '../../data/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
