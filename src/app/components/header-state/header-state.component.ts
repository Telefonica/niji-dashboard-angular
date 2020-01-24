import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'niji-header-state',
  templateUrl: './header-state.component.html',
  styleUrls: ['./header-state.component.scss']
})

export class HeaderStateComponent implements OnInit {
  public warning = true;
  public threathBlocked = false;
  public HEADER_TEXT: string;

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.warning) {
      this.HEADER_TEXT = 'Activa la Protección Web en todas tus líneas';
    } else if (this.threathBlocked) {
      this.HEADER_TEXT = 'Se han bloqueado nuevas amenazas, sigues protegido';
    } else {
      this.HEADER_TEXT = 'Todo en calma, estás protegido';
    }
  }

}
