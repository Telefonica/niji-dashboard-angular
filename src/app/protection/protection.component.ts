import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  public cards = [
    {
      title: 'Protección WiFi Hogar',
      subtitle: 'Descubre más',
      showCheck: true,
      icon: './../../assets/global/img/icons/shield-icon.svg',
      // contents: [{
      //   alias: 'Casa',
      //   num: '91 681 74 17',
      //   services: [{
      //     name: 'service1',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service2',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service3',
      //     status: 'active'
      //   }],
      // }],
      // link: '/num',
      checked: true,
      disabled: false
    },
    {
      title: 'Bloqueo de contenido',
      showCheck: false,
      icon: './../../assets/global/img/icons/block-icon.svg',
      contents: [{ num: 'Filtrado de sitios web apropiados para la edad' }],
      // contents: [{
      //   alias: 'Casa',
      //   num: '91 681 74 17',
      //   services: [{
      //     name: 'service1',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service2',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service3',
      //     status: 'active'
      //   }],
      // }],
      // link: '/num',

    },
    {
      title: 'Protección contra rastreo',
      subtitle: 'Descubre más',
      showCheck: true,
      icon: './../../assets/global/img/icons/lens-glass-icon.svg',
      contents: [{ num: 'Bloquea los rastreadores de tu publicidad en tu navegador' }],

      // contents: [{
      //   alias: 'Casa',
      //   num: '91 681 74 17',
      //   services: [{
      //     name: 'service1',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service2',
      //     status: 'active'
      //   },
      //   {
      //     name: 'service3',
      //     status: 'active'
      //   }],
      // }],
      // link: '/num',
      checked: true,
      disabled: false
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}


