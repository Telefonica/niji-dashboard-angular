import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from 'src/app/services/welcome.service';
@Component({
  selector: 'app-protection',
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

      states: [

        // samples of states
        {
          // unprotected: {
          //   title: '¡Estás desprotegido!',
          //   icon: './../../assets/global/img/icons/no-shield-tick-icon.svg',
          //   label: 'Protección desactivada'
          // },
          undetected: {
            title: '¡Sin amenazas detectadas!',
            icon: './../../assets/global/img/icons/no-threats-detected-icon.svg',
            label: 'Tu navegación ha sido excelente'
          },
          // detected: {
          //   title: '30/04/2019 - 25/05/2019',
          //   total: '114',
          //   label: 'Amenazas bloqueadas'
          // }
        }
      ],
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
      icon: './../../assets/global/img/icons/lens-glass-icon.svg',
      checked: true,
      disabled: false
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

  public carousel = [{
    title: 'Consejos navegación segura',
    icon: './../../assets/global/img/icons/heart-icon.svg',
  }]

  constructor(private dataService: WelcomeService) {
  }

  ngOnInit() {
  }
  showWelcome(open) {
    localStorage.removeItem('welcome');
    this.dataService.welcomeState$.emit(open);
  }
}
