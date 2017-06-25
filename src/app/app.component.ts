import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Lord Buckethead' },
    { id: 12, name: 'Kaiser Sosee' },
    { id: 13, name: 'Donnie Darko' },
    { id: 14, name: 'Mr. Bombastic' },
    { id: 15, name: 'Lady Vengeance' },
    { id: 16, name: 'Dr Dre' },
    { id: 17, name: 'Machete' },
    { id: 18, name: 'Alfred' },
    { id: 19, name: 'Looooool' },
    { id: 20, name: 'WTF' }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes (Zakaria version)';
    selectedHero: Hero;
    heroes = HEROES;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
