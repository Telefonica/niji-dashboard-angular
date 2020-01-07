import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-level',
  templateUrl: './security-level.component.html',
  styleUrls: ['./security-level.component.scss']
})
export class SecurityLevelComponent implements OnInit {
  public SECURITY_LEVEL_LOW = 2;
  public SECURITY_LEVEL_MEDIUM = 5;
  public SECURITY_LEVEL_HIGH = 8;
  public open = true;
  public warningStatusMsg = 'Te recomendamos revisar este perfil, no tiene la protección básica de tu red móvil activada. Y puede sufrir amenazas';
  public securityLevel = [
    {
      levelCaption: 'NIVEL DE PROTECCIÓN:',
      protectionCaption: 'BAJA',
      link: 'Aumenta el nivel de protección',
      protection: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  close() {
    this.open = false;
  }
}
