import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-whitelist-form',
  templateUrl: './whitelist-form.component.html',
  styleUrls: ['./whitelist-form.component.scss']
})
export class WhitelistFormComponent implements OnInit {

  WHITELIST_MAX_DOMAINS = 250;
  WHITELIST_HEADER = 'Añade a la lista tus sitos web de confianza y gestiona las páginas añadidas.';
  WHITELIST_LABEL = 'Añadir página de confianza';
  WHITELIST_PLACEHOLDER = 'Añadir página de confianza';
  WHITELIST_LIST_TITLE = 'Páginas añadidas';
  WHITELIST_MAX_DOMAINS_ERROR = 'Se ha alcanzado el número máximo de dominios, libera alguno de tu lista y vuelve a intentarlo';
  ERROR_MSG = '';
  ERROR_MSG_DEFAULT = 'Se ha producido un error, inténtalo de nuevo más tarde'; // conection error
  ERROR_DOMAIN = 'Error, dominio o sitio web válido';

  error = false; // conection or limit error
  domain = '';
  regexp = /^[^\/]*?\.?([^\/.]+)\.[^\/.]+/;
  domainIn = new FormControl('', [Validators.pattern(this.regexp)]);
  whithelistElements = [
    'http://www.booking.com', 'http://www.malware.com', 'http://www.virus.com'
  ];

  getErrorMessage() {
    return this.domainIn.hasError('required') ? 'You must enter a value' :
      this.domainIn.hasError('pattern') ? this.ERROR_DOMAIN : '';
  }

  constructor() { }

  ngOnInit() {

  }

  addToWhitelist() {
    this.domain = this.domainIn.value;
    if (this.whithelistElements.length >= this.WHITELIST_MAX_DOMAINS) {
      this.error = true;
      this.ERROR_MSG = this.WHITELIST_MAX_DOMAINS_ERROR;
    } else if (this.error) {
      // use when the  response fails
      this.ERROR_MSG = this.ERROR_MSG_DEFAULT;
    } else {
      this.whithelistElements.push(this.domain);
      this.domainIn.reset();
    }
  }

  delete(e) {
    const element = e.target.parentNode.firstChild.innerHTML;
    const index = this.whithelistElements.indexOf(element);
    if (index !== -1) {
      this.whithelistElements.splice(index, 1);
      this.ERROR_MSG = '';
      this.error = false;
    }
  }

}
