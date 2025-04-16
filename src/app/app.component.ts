import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { SliderComponent } from './componentes/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rpinto';

  activeSection: string = 'slider';
  isMenuOpen = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(tree.fragment!);
        }, 50);
      }
    });
  }

  // Scrollspy
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = ['slider', 'sobrenosotros', 'proyectos', 'contacto'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;  // Cierra el menú al hacer click en cualquier opción
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  
}
