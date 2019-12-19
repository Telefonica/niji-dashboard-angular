import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium-services',
  templateUrl: './premium-services.component.html',
  styleUrls: ['./premium-services.component.scss']
})
export class PremiumServicesComponent implements OnInit {
  public premium = [
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
