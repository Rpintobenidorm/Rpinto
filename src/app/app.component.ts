import { Component } from '@angular/core';

import { HeroComponent } from './componentes/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
