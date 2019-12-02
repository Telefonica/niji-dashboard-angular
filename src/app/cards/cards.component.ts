import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public cards = [
    {
      title: 'Protección Red WiFi',
      // subtitle: 'Descubre más',
      icon: 'wifi',
      contents: [{num: 'Casa - 91 681 74 17'}],
      link: '/num',
      checked: true,
      disabled: false
    },
    {
      title: 'Protección Red Móvil',
      // subtitle: 'Descubre más',
      icon: 'language',
      contents: [
        {
          num:'Julia - 634 567 879'
        },
        {
          num:'Daniel - 678 123 456'
        },
        {
          num:'Iratxe - 654 321 543'
        }
      ],
      link: '/num',
      checked: false,
      disabled: false
    },
    {
      title: 'Servicios Premium',
      subtitle: 'Descubre más',
      icon: 'start',
      contents: [{num:'3-Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}],
      checked: false,
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
