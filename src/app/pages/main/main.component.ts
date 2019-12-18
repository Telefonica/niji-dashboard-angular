import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
    public ourCards: any;
  public cards = [
    {
      title: 'Protección Red WiFi',
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
          status: 'inactive'
        }],
        link: 'wifi-protection'
      }],
    },
    {
      title: 'Protección Red Móvil',
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
          link: 'otherlink'
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
    },
    {
      title: 'Servicios Premium',
      icon: './../../assets/global/img/icons/star-icon.svg',
      type: 'imagesList',
      contents: [
        {
          img: './../../assets/global/img/device-protection.png',
          type: 'PREMIUM',
          title: 'Qustodio Kids',
          subtitle: 'Mantén protegidos a tus hijos',
          price: '65' + '€',
          tax: '/mes IVA incl.'
        },
        {
          img: './../../assets/global/img/qustodio-kids.png',
          type: 'PREMIUM',
          title: 'Seguridad Dispositivo',
          subtitle: 'Protección adicional para dispositivos',
          price: '65' + '€',
          tax: '/mes IVA incl.'
        }
      ]
    }
  ];

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {        
        console.log(this.route.snapshot.data.user);
        // this.ourCards = this.route.snapshot.user;
        // console.log(this.ourCards);
    }
}
