import { Component, OnInit } from '@angular/core';

import { Hero } from './classes/hero';
import { HeroService } from './services/hero/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes (Zakaria version)';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
