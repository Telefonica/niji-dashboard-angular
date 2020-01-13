import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitelist-form',
  templateUrl: './whitelist-form.component.html',
  styleUrls: ['./whitelist-form.component.scss']
})
export class WhitelistFormComponent implements OnInit {
  public WHITELIST_HEADER = 'Añade a la lista tus sitos web de confianza y gestiona las páginas añadidas.';
  public WHITELIST_LABEL = 'Añadir página de confianza';
  public WHITELIST_PLACEHOLDER = 'Añadir página de confianza';
  public WHITELIST_LIST_TITLE = 'Páginas añadidas';
  public error = false;
  value = '';
  public whithelistElements = [
    'http://www.booking.com', 'http://www.malware.com', 'http://www.virus.com'
  ];

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.value = event.target.value;
    // TODO: Check errors from native angular material
  }

  addToWhitelist() {
    this.whithelistElements.push(this.value);
  }

  delete(e) {
    const element = e.target.parentNode.firstChild.innerHTML;
    const index = this.whithelistElements.indexOf(element);
    if (index !== -1) {
      this.whithelistElements.splice(index, 1);
    }
  }

}
