import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public cards = [
    {
      title: 'Protección Red WiFi',
      showCheck: true,
      icon: './../../assets/global/img/icons/wifi-icon.svg',
      contents: [{
        alias: 'Casa',
        num: '91 681 74 17',
        services: [{
          name: 'service1',
          status: 'active'
        },
        {
          name: 'service2',
          status: 'active'
        },
        {
          name: 'service3',
          status: 'active'
        }],
      }],
      link: '/num',
      checked: true,
      disabled: false
    },
    {
      title: 'Protección Red Móvil',
      showCheck: true,
      icon: './../../assets/global/img/icons/smartphone-icon.svg',
      contents: [
        {
          alias: 'Julia',
          num: '634 567 879',
          services: [{
            name: 'service1',
            status: 'inactive'
          },
          {
            name: 'service2',
            status: 'active'
          },
          {
            name: 'service3',
            status: 'active'
          }],
        },
        {
          alias: 'Daniel',
          num: '678 123 456',
          services: [{
            name: 'service1',
            status: 'active'
          },
          {
            name: 'service2',
            status: 'inactive'
          },
          {
            name: 'service3',
            status: 'active'
          }],
        },
        {
          alias: 'Iratxe',
          num: '654 321 543',
          services: [{
            name: 'service1',
            status: 'active'
          },
          {
            name: 'service2',
            status: 'active'
          },
          {
            name: 'service3',
            status: 'inactive'
          }],
        }
      ],
      link: '/num',
      checked: false,
      disabled: false
    },
    {
      title: 'Servicios Premium',
      showCheck: true,
      // subtitle: 'Descubre más',
      icon: './../../assets/global/img/icons/star-icon.svg',
      contents: [{ num: '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }],
      checked: false,
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
