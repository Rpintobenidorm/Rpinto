import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { SliderComponent } from './componentes/slider/slider.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OpinionesComponent } from "./componentes/opiniones/opiniones.component"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faMobileAlt  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SliderComponent, NosotrosComponent, OpinionesComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rpinto';

  activeSection: string = 'slider';
  isMenuOpen = false;
  // iconos
  iconoTelefono = faPhone;
  iconoWhatsapp = faWhatsapp;
  iconoCorreo = faEnvelope;
  iconoMovil = faMobileAlt;

  isContactoInfoVisible = false;



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

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000, // duración de las animaciones en ms
      once: true, // si quieres que solo se animen una vez
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

  toggleContactoInfo() {
    this.isContactoInfoVisible = !this.isContactoInfoVisible;
  }
  
}
