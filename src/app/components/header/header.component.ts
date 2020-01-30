import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'niji-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() media;
  @Input() menuClosed;

  constructor(public router: Router, private location: Location) {
  }

  @Output() toggleNav = new EventEmitter<string>();

  ngOnInit() {
  }

  toggleMenu() {
    this.toggleNav.emit();
  }
  goBack() {
    this.location.back();
  } 
}
