import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'niji-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() media;
  @Input() menuClosed;

  constructor(public router: Router) {
  }

  @Output() toggleNav = new EventEmitter<string>();

  ngOnInit() {
  }

  toggleMenu() {
    this.toggleNav.emit();
  }

}
