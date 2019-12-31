import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-state',
  templateUrl: './header-state.component.html',
  styleUrls: ['./header-state.component.scss']
})

export class HeaderStateComponent implements OnInit {
  public warning = true;
  public HEADER_TEXT: string;

  constructor() { }

  ngOnInit() {
    this.warning
      ? this.HEADER_TEXT = 'Activa la Protección Web en todas tus líneas'
      : this.HEADER_TEXT = 'Todo en calma, estás protegido';
  }

}
