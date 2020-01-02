import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public show = true;

  public slides = [
    {
      name: 'uno',
      img: 'https://picsum.photos/id/1/1000/300',
      text: 'Evita entrar a webs bancarias desde el email.'
    },
    {
      name: 'dos',
      img: 'https://picsum.photos/id/2/1000/300',
      text: '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'
    },
    {
      name: 'tres',
      img: 'https://picsum.photos/id/3/1000/300',
      text: '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

    },
    {
      name: 'cuatro',
      img: 'https://picsum.photos/id/43/1000/300',
      text: '4-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

    }
  ];

  public type = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      hideOnClick: false,
    },
    autoplay: {
      delay: 5000,
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
