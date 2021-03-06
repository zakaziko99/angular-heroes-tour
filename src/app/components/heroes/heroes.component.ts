import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.html',
    styleUrls: ['./heroes.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
