import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'niji-status-icons',
  templateUrl: './status-icons.component.html',
  styleUrls: ['./status-icons.component.scss']
})
export class StatusIconsComponent implements OnInit {
  @Input() service;
  constructor() { }

  ngOnInit() {
  }

}
