import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-opiniones',
  imports: [],
  templateUrl: './opiniones.component.html',
  styleUrl: './opiniones.component.scss'
})
export class OpinionesComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper(this.swiperContainer.nativeElement, {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: "slide",  // Usamos slide en lugar de fade para evitar superposiciones extrañas
      speed: 1000,
      slidesPerView: 1,  // Por defecto 1 card por vez
      spaceBetween: 30,   // Ajustamos el espacio entre las cards
      centeredSlides: true,  // Para centrar las cards en la vista
      breakpoints: {
        640: {
          slidesPerView: 1,  // 1 card por vez en pantallas pequeñas
        },
        1024: {
          slidesPerView: 2,  // 2 cards por vez en pantallas más grandes
        },
      },
    });
  }
}
