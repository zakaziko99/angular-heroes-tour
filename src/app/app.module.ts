import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero/hero.service'

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
