import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public welcome: string;
  public open = true;
  public show = true;
  public last = false;
  public type = 'component';
  public disabled = false;

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

  public slides = [
    {
      name: 'Bienvenido a Conexión Segura.',
      img: './assets/global/img/welcome/movistar.svg',
      text: 'Disfruta de una navegación libre de riesgos dentro y fuera de casa.'
    },
    {
      name: 'Libre de riesgos',
      img: 'https://picsum.photos/id/2/1000/300',
      text: 'Bloquea páginas webs peligrosas, consulta amenazas, evita que se hagan con tus datos personales.'
    },
    {
      name: 'Navegación infantil segura',
      img: 'https://picsum.photos/id/3/1000/300',
      text: 'Deja de preocuparte por el contenido inadecuado que puedan encontrar los más pequeños.'
    },
    {
      name: 'Servicios Premium',
      img: 'https://picsum.photos/id/43/1000/300',
      text: 'Antivirus, control parental … accede a servicios de calidad, protégete a ti y a los tuyos.'

    }
  ];

  public onIndexChange(index: number) {
    index = index + 1;
    const pagination = document.querySelector('.swiper-pagination');
    if (index === this.slides.length) {
      pagination.classList.add('hide');
      this.last = true;
    } else {
      pagination.classList.remove('hide');
      this.last = false;
    }

  }

  constructor() { }

  ngOnInit() {
    this.welcome = this.readLocalStorageValue('welcome');
    this.checkDisplay();
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key);
  }

  closeWelcome() {
    localStorage.setItem('welcome', 'closed');
    this.checkDisplay();
  }

  checkDisplay() {
    this.welcome = this.readLocalStorageValue('welcome');
    if (this.welcome !== null) {
      this.open = false;
    }
  }

}
