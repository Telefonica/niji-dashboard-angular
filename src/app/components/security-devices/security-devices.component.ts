import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-devices',
  templateUrl: './security-devices.component.html',
  styleUrls: ['./security-devices.component.scss']
})
export class SecurityDevicesComponent implements OnInit {
  public card = [
    {
      cardDescription: 'Protege 5 dispositivos a tu elección, tanto dentro como fuera de casa.',
      btn: 'Descargar licencias',
      licensesCaption: 'Licencias Disponibles',
      dimiss: 'Dar de baja Seguridad Dispositivo',
      level : 3
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
