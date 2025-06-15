import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { SliderComponent } from '../slider/slider.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { SliderTrabajosComponent } from '../sliderTrabajos/slider-trabajos.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPhone,
  faDirections,
  faEnvelope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { MarcasComponent } from '../marcas/marcas.component';

@Component({
  selector: 'app-hero',
  imports: [
    NgClickOutsideDirective,
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    SliderComponent,
    NosotrosComponent,
    SliderTrabajosComponent,
    MarcasComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  title = 'rpinto';

  activeSection: string = 'slider';
  isMenuOpen = false;
  // iconos
  iconoTelefono = faPhone;
  iconoWhatsapp = faWhatsapp;
  iconoCorreo = faEnvelope;
  iconoMovil = faMobileAlt;
  faDirections = faDirections;
  iconoInstragram = faInstagram;
  iconoFacebook = faFacebook
  iconotuiter = faXTwitter

  isContactoInfoVisible = false;

  @ViewChild('drawer', { static: false }) drawerRef!: ElementRef;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  private scrollListener = this.onDivScroll.bind(this);

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
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
      duration: 1000,
      once: false,
    });

    if (this.scrollContainer?.nativeElement) {
      this.scrollContainer.nativeElement.addEventListener(
        'scroll',
        this.scrollListener
      );
    }
  }

  ngOnDestroy(): void {
    if (this.scrollContainer?.nativeElement) {
      this.scrollContainer.nativeElement.removeEventListener(
        'scroll',
        this.scrollListener
      );
    }
  }

  onDivScroll(): void {
    this.isContactoInfoVisible = false;
    this.closeMenu();
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    console.log(el);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
    this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleContactoInfo() {
    this.isContactoInfoVisible = !this.isContactoInfoVisible;
  }

  onClickedOutsideContacto(e: Event) {
    this.isContactoInfoVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideDrawer = this.drawerRef?.nativeElement.contains(
      event.target
    );
    const isBurgerBtn = (event.target as HTMLElement).closest(
      '.burger-btn, .c-hamburger'
    );

    if (!clickedInsideDrawer && !isBurgerBtn && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
