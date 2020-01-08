import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-protection-mcafee',
  templateUrl: './device-protection-mcafee.component.html',
  styleUrls: ['./device-protection-mcafee.component.scss']
})
export class DeviceProtectionMcafeeComponent implements OnInit {
  public cards = [
    {
      title: 'Proteger este dispositivo',
      icon: './../../assets/global/img/icons/lock-icon.svg',
      description: '<p>Quiero proteger este dispositivo con el antivirus <strong>Seguridad Dispositivo Movistar</strong>.</p>',
      link: 'Instalar en este dispositivo'
    },
    {
      title: 'Enviar enlace a otro dispositivo',
      icon: './../../assets/global/img/icons/send-icon.svg',
      description: '<p>Con tu antivirus puedes proteger otro de tus dispositivos  <strong>(móviles, tablets y ordenadores)</strong> o el de quien tú quieras. </p><p>Envía un mensaje con el enlace para descargarlo en otros dispositivos.</p>',
      link: 'Enviar enlace a otro dispositivo'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
