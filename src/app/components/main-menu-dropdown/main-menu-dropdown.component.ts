import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-dropdown',
  templateUrl: './main-menu-dropdown.component.html',
  styleUrls: ['./main-menu-dropdown.component.scss']
})
export class MainMenuDropdownComponent implements OnInit {
  panelOpenState = false;
  public optionHeight = '50px';
  public cards = [
    {
      title: 'Protección Red WiFi',
      icon: './../../assets/global/img/icons/wifi-icon.svg',
      expanded: true,
      contents: [{
        alias: 'Casa',
        num: '91 681 74 17',
        link: 'wifi-protection'
      }],
    },
    {
      title: 'Protección Red Móvil',
      icon: './../../assets/global/img/icons/smartphone-icon.svg',
      expanded: false,
      contents: [
        {
          alias: 'Julia',
          num: '634 567 879',
          link: 'otherlink'
        },
        {
          alias: 'Daniel',
          num: '678 123 456',
          link: 'otherlink'
        },
        {
          alias: 'Iratxe',
          num: '654 321 543',
          link: 'otherlink'
        },
      ],
    },
    {
      title: 'Consejos navegación segura',
      icon: './../../assets/global/img/icons/heart-icon.svg',
      expanded: false,
      link: 'otherlink'
    },
    {
      title: 'Darse de baja',
      icon: './../../assets/global/img/icons/alert-icon.svg',
      link: 'otherlink'
    },
    {
      title: 'Cerrar sesión',
      icon: './../../assets/global/img/icons/log-out-icon.svg',
      link: 'otherlink'
    }
  ];
  constructor() { }

  ngOnInit() { }

}
