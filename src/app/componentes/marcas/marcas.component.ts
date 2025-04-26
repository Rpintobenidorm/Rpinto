import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-marcas',
  imports: [],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss',
})
export class MarcasComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      // Slider de marcas
      // Dentro de ngAfterViewInit
      new Swiper('.marcasSwiper', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 3000, // velocidad de deslizamiento (cuanto más alto, más suave)
        autoplay: {
          delay: 0, // empieza inmediatamente
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        freeMode: {
          enabled: true,
          momentum: false,
        },
        grabCursor: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        },
      });
    }, 0);
  }
}
