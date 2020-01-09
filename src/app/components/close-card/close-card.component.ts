import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-close-card',
  templateUrl: './close-card.component.html',
  styleUrls: ['./close-card.component.scss']
})


export class CloseCardComponent implements OnInit {
  @Input() config: {
    msg: string,
    closeMsg: string,
    linkTxt: string,
    link: string
  };

  public DEFAULT_CLOSE_MSG = 'Entendido';
  public open = true;

  constructor() { }

  ngOnInit() {
    if (this.config.closeMsg === undefined) {
      this.config.closeMsg = this.DEFAULT_CLOSE_MSG;
    };
  }
  close() {
    this.open = false;
  }
}
