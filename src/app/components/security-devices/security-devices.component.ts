import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-devices',
  templateUrl: './security-devices.component.html',
  styleUrls: ['./security-devices.component.scss']
})
export class SecurityDevicesComponent implements OnInit {
  public card = [
    {
      cardTitle: 'Mis dispositivos protegidos',
      cardDescription: 'Protege 5 dispositivos a tu elección, tanto dentro como fuera de casa.',
      btn: 'Descargar licencias',
      licensesCaption: 'Licencias Disponibles',
      dimiss: 'Dar de baja Seguridad Dispositivo',
      level: 2,
      protectedDevices: [
        {
          name: 'iPhone 8',
          link: 'sampleLink'
        },
        {
          name: 'Samsung S10'
        },
        {
          name: 'Xiaomi Redmi Note 7'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
