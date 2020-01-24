import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'niji-sec-status',
  templateUrl: './sec-status.component.html',
  styleUrls: ['./sec-status.component.scss']
})
export class SecStatusComponent implements OnInit {
  @Input() state;
  currentState: any = {
    title: '',
    icon: '',
    label: '',
    total: ''
  };
  states = [{

    title: '¡Estás desprotegido!',
    icon: './../../assets/global/img/icons/no-shield-tick-icon.svg',
    label: 'Protección desactivada',
    total: ''

  }, {

    title: '¡Sin amenazas detectadas!',
    icon: './../../assets/global/img/icons/no-threats-detected-icon.svg',
    label: 'Tu navegación ha sido excelente'

  }, {

    title: '30/04/2019 - 25/05/2019',
    total: '114',
    label: 'Amenazas bloqueadas'
  }

  ]


  constructor() { }

  ngOnInit() {
    switch (this.state) {
      case 'unprotected':
        this.currentState = this.states[0];
        break;
      case 'undetected':
        this.currentState = this.states[1];

        break;
      case 'detected':
        this.currentState = this.states[2];

        break;
      default:
        break;
    }
  }

}
