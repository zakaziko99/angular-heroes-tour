import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './my-heroes.component.html',
    styleUrls: ['./my-heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes (Zakaria version)';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
