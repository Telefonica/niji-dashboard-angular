import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  prueba: 'PRUEBA';
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
      disabled: false
    },
    {
      title: 'Bloqueo de contenido',
      showCheck: false,
      icon: './../../assets/global/img/icons/block-icon.svg',
      contents: [{ num: 'Filtrado de sitios web apropiados para la edad' }],
    },
    {
      title: 'Protección contra rastreo',
      subtitle: 'Descubre más',
      showCheck: true,
      icon: './../../assets/global/img/icons/lens-glass-icon.svg',
      contents: [{ num: 'Bloquea los rastreadores de tu publicidad en tu navegador' }],
      checked: true,
      disabled: false
    },
  ];
  public title: any;

  constructor() {
  }

  ngOnInit() {
  }

}


