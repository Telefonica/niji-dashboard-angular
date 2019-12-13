import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  public header = [
    {
      title: 'Casa',
      num: '916 817 417',
      levelCaption: 'NIVEL DE PROTECCIÓN:',
      protectionCaption: 'ALTA',
      link: 'Aumenta el nivel de protección',
      protection: 9
    }
  ];
  public cards = [
    {
      title: 'Protección WiFi Hogar',
      subtitle: 'Descubre más',
      showCheck: true,
      icon: './../../assets/global/img/icons/shield-icon.svg',
      checked: true,
      disabled: false,
      states:[
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
          link: '/threats-history'
        },
        {
          linkTitle: 'Páginas de confianza',
          description: 'Añade a tu lista tus páginas de confianza y gestiónalas',
          link: '/trusted-pages'
        },
      ]
    },
    {
      title: 'Bloqueo de contenido',
      subtitle: 'Filtrado de sitios web apropiados para la edad',
      subtitleLlink: 'Activar en Smart Wifi',
      showCheck: false,
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
      showCheck: true,
      icon: './../../assets/global/img/icons/lock-icon.svg',
      checked: true,
      disabled: false,
      cardDescription:  'Protege 5 dispositivos a tu elección, tanto dentro como fuera de casa.',
    },
  ];
  public title: any;

  constructor() {
  }

  ngOnInit() {
  }

}


