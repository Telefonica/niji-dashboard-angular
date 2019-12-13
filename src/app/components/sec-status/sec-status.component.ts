import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sec-status',
  templateUrl: './sec-status.component.html',
  styleUrls: ['./sec-status.component.scss']
})
export class SecStatusComponent implements OnInit {
@Input() card;
  constructor() { }

  ngOnInit() {
  }

}
