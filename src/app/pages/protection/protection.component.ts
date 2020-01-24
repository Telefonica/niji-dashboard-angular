import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from 'src/app/services/welcome.service';
@Component({
  selector: 'niji-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  public header = [
    {
      title: 'Casa',
      num: '916 817 417'
    }
  ];
  public cards = [
    {
      title: 'Protección WiFi Hogar',
      subtitleLlink: 'Descubre más',
      helpModal: 'openBrowseProtection',
      showCheck: true,
      icon: './../../assets/global/img/icons/shield-icon.svg',
      checked: true,
      disabled: false,
      state: 'unprotected', // options: unprotected, undetected, detected

      contents: [
        {
          linkTitle: 'Historial de amenazas',
          link: '/threats'
        },
        {
          linkTitle: 'Páginas de confianza',
          description: 'Añade a tu lista tus páginas de confianza y gestiónalas',
          link: '/whitelist'
        },
      ]
    },
    {
      title: 'Bloqueo de contenido',
      subtitle: 'Filtrado de sitios web apropiados para la edad',
      subtitleLlink: 'Activar en Smart Wifi',
      showCheck: true,
      disabled: false,
      checked: true,
      icon: './../../assets/global/img/icons/block-icon.svg',
    },
    {
      title: 'Protección contra rastreo',
      subtitle: 'Bloquea los rastreadores de tu publicidad en tu navegador',
      subtitleLlink: 'Descubre más',
      showCheck: true,
      checked: true,
      disabled: false,
      icon: './../../assets/global/img/icons/lens-glass-icon.svg',
    },
    {
      title: 'Seguridad Dispositivo',
      subtitleLlink: 'Descubre más',
      helpModal: 'openDeviceProtection',
      icon: './../../assets/global/img/icons/lock-icon.svg',
      secondIcon: './../../assets/global/img/icons/arrow-right-icon.svg',

    },
  ];

  public title: any;

  public slides = [{
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

  }];

  public carousel = [{
    title: 'Consejos navegación segura',
    icon: './../../assets/global/img/icons/heart-icon.svg',
  }];

  constructor(private dataService: WelcomeService) {
  }

  ngOnInit() {
  }
  showWelcome(open) {
    localStorage.removeItem('welcome');
    this.dataService.welcomeState$.emit(open);
  }
}
