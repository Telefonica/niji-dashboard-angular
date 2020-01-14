import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitelist-form',
  templateUrl: './whitelist-form.component.html',
  styleUrls: ['./whitelist-form.component.scss']
})
export class WhitelistFormComponent implements OnInit {
  WHITELIST_HEADER = 'Añade a la lista tus sitos web de confianza y gestiona las páginas añadidas.';
  WHITELIST_LABEL = 'Añadir página de confianza';
  WHITELIST_PLACEHOLDER = 'Añadir página de confianza';
  WHITELIST_LIST_TITLE = 'Páginas añadidas';
  ERROR_MSG = '';
  WHITELIST_MAX_DOMAINS = 250;
  ERROR_MSG_DEFAULT = 'Se ha producido un error, inténtalo de nuevo más tarde';

  error = false;
  whithelistElements = [
    'http://www.booking.com', 'http://www.malware.com', 'http://www.virus.com'
  ];
  domain = '';
  validated = false;

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.domain = event.target.value;
    this.validate(this.domain);
  }

  addToWhitelist() {
    if (this.whithelistElements.length >= this.WHITELIST_MAX_DOMAINS) {
      this.ERROR_MSG = 'Se ha alcanzado el número máximo de dominios, libera alguno de tu lista y vuelve a intentarlo';
    }
    if (this.error) {
      //use when response fail
      this.ERROR_MSG = this.ERROR_MSG_DEFAULT;
    }
    this.whithelistElements.push(this.domain);
    this.domain = '';
  }

  delete(e) {
    const element = e.target.parentNode.firstChild.innerHTML;
    const index = this.whithelistElements.indexOf(element);
    if (index !== -1) {
      this.whithelistElements.splice(index, 1);
      this.ERROR_MSG = '';
    }
  }
  validate(domain) {
    if (domain !== '*.*') {
      const regexp = domain.match(/^[^\/]*?\.?([^\/.]+)\.[^\/.]+/g);
      if (regexp !== null && this.whithelistElements.indexOf(domain) === -1) {
        this.validated = true;
        return true;
      }
    }
    this.validated = false;
    return false;
  }

}
