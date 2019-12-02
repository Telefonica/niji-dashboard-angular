import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-dropdown',
  templateUrl: './main-menu-dropdown.component.html',
  styleUrls: ['./main-menu-dropdown.component.scss']
})
export class MainMenuDropdownComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
