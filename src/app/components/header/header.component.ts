import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() media;

  constructor(public router: Router) {
  }

  @Output() toggleNav = new EventEmitter<string>();

  ngOnInit() {
  }

  toggleMenu() {
    this.toggleNav.emit();
  }

}
