import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';

Swiper.use([Autoplay, FreeMode]);

@Component({
  selector: 'app-slider-trabajos',
  imports: [CommonModule],
  templateUrl: './slider-trabajos.component.html',
  styleUrl: './slider-trabajos.component.scss'
})
export class SliderTrabajosComponent {

  @ViewChild('sliderTrabajos') sliderTrabajos!: ElementRef;

    
  imageNames: string[] = [
    '1.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpeg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    'aire.jpeg',
    'placas.jpg',
    'radiador.jpeg',
    'sala.jpg',
    'suelo.png',
  ];

  
  ngAfterViewInit(): void {
    new Swiper(this.sliderTrabajos.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: "cards",
      speed: 1000,
    });
  }
}
