import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Injectable, NgModule } from '@angular/core';
import { ProtectionService } from 'src/app/services/protection.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'niji-whitelist-form',
    templateUrl: './whitelist-form.component.html',
    styleUrls: ['./whitelist-form.component.scss']
})

export class WhitelistFormComponent implements OnInit, OnDestroy {

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

    getErrorMessage() {
        return this.domainIn.hasError('required')
            ? 'You must enter a value'
            : this.domainIn.hasError('pattern') ? this.ERROR_DOMAIN : '';
    }

    public domains = [];

    constructor(
        private protectionService: ProtectionService,
        private userService: UserService
    ) {

    }

    ngOnInit() {
        this.protectionService.getWhitelist('34622001001')
            .subscribe((response) => {
                this.domains = response.domain_list;
            });
    }

    ngOnDestroy() {

    }

    addToWhitelist() {
        this.domain = this.domainIn.value;
        if (this.domains.length >= this.WHITELIST_MAX_DOMAINS) {
            this.error = true;
            this.ERROR_MSG = this.WHITELIST_MAX_DOMAINS_ERROR;
        } else if (this.error) {
            // use when the response fails
            this.ERROR_MSG = this.ERROR_MSG_DEFAULT;
        } else {
            if (this.domains.indexOf(this.domain) === -1) {
                this.protectionService.addToWhitelist(this.domain)
                    .subscribe((response) => {
                        this.domains.push(this.domain);
                    });
            }
        }
    }

    delete(domain: string) {
        this.protectionService.deleteFromWhitelist(domain)
            .subscribe((response: any) => {
                const index = this.domains.indexOf(domain);
                if (index !== -1) {
                    this.domains.splice(index, 1);
                    this.ERROR_MSG = '';
                    this.error = false;
                }
            });
    }
}
