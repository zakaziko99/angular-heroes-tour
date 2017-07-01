import { Component, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.html',
    styleUrls: ['./hero-detail.css']
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
