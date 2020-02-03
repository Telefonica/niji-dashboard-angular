import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
@Component({
    selector: 'niji-main-menu-dropdown',
    templateUrl: './main-menu-dropdown.component.html',
    styleUrls: ['./main-menu-dropdown.component.scss']
})
export class MainMenuDropdownComponent implements OnInit {
    // "Selected" element Sample, only one element must be "selected"
    public optionHeight = '50px';
    public menus = [
        {
            title: 'Inicio',
            icon: './../../assets/global/img/icons/home-icon.svg',
            link: '/',
            selected: true,
        },
        {
            title: 'Protección Red WiFi',
            icon: './../../assets/global/img/icons/wifi-icon.svg',
            expanded: true,
            contents: [{
                alias: 'Casa',
                num: '91 681 74 17',
                link: 'protection',
            }],
        },
        {
            title: 'Protección Red Móvil',
            icon: './../../assets/global/img/icons/smartphone-icon.svg',
            expanded: false,
            contents: [
                {
                    alias: 'Julia',
                    num: '634 567 879',
                    link: 'otherlink',
                    selected: true,
                },
                {
                    alias: 'Daniel',
                    num: '678 123 456',
                    link: 'otherlink'
                },
                {
                    alias: 'Iratxe',
                    num: '654 321 543',
                    link: 'otherlink'
                },
            ],
        },
        {
            title: 'Consejos navegación segura',
            icon: './../../assets/global/img/icons/heart-icon.svg',
            expanded: false,
            // link: 'otherlink'
            selected: true,
            welcome: true
        },
        {
            title: 'Darse de baja',
            icon: './../../assets/global/img/icons/alert-icon.svg',
            link: 'otherlink'
        },
        {
            title: 'Cerrar sesión',
            icon: './../../assets/global/img/icons/log-out-icon.svg',
            link: 'otherlink'
        }
    ];
    constructor(private dataService: WelcomeService) { }

    ngOnInit() { }
    showWelcome(open) {
        localStorage.removeItem('welcome');
        this.dataService.welcomeState$.emit(open);
    }
}
