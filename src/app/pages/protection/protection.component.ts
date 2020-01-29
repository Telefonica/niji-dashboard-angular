import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeService } from 'src/app/services/welcome.service';
@Component({
    selector: 'niji-protection',
    templateUrl: './protection.component.html',
    styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
    public header = [
        {
            title: 'Casa',
            num: '916 817 417'
        }
    ];
    public cards = [
        {
            title: 'Protección WiFi Hogar',
            subtitle: false,
            subtitleModalLink: 'Descubre más',
            helpModal: 'openBrowseProtection',
            showCheck: true,
            icon: './../../assets/global/img/icons/shield-icon.svg',
            checked: true,
            disabled: false,
            state: 'unprotected', // options: unprotected, undetected, detected

            contents: [
                {
                    linkTitle: 'Historial de amenazas',
                    link: '/threats'
                },
                {
                    linkTitle: 'Páginas de confianza',
                    description: 'Añade a tu lista tus páginas de confianza y gestiónalas',
                    link: '/whitelist'
                },
            ]
        },
        // not apply to Spain
        // {
        //     title: 'Bloqueo de contenido',
        //     subtitle: 'Filtrado de sitios web apropiados para la edad',
        //     subtitleLink: 'Activar en Smart Wifi',
        //     showCheck: true,
        //     disabled: false,
        //     checked: true,
        //     icon: './../../assets/global/img/icons/block-icon.svg',
        // },
        // {
        //     title: 'Protección contra rastreo',
        //     subtitle: 'Bloquea los rastreadores de tu publicidad en tu navegador',
        //     subtitleLink: 'Descubre más',
        //     showCheck: true,
        //     checked: true,
        //     disabled: false,
        //     icon: './../../assets/global/img/icons/lens-glass-icon.svg',
        // },
        {
            title: 'Seguridad Dispositivo',
            subtitle: false,
            subtitleLink: 'Descubre más',
            helpModal: 'openDeviceProtection',
            icon: './../../assets/global/img/icons/lock-icon.svg',
            secondIcon: './../../assets/global/img/icons/arrow-right-icon.svg',

        },
    ];

    public title: any;

    public slides = [{
        name: 'uno',
        img: 'https://picsum.photos/id/1/1000/300',
        text: 'Evita entrar a webs bancarias desde el email.'
    },
    {
        name: 'dos',
        img: 'https://picsum.photos/id/2/1000/300',
        text: '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'
    },
    {
        name: 'tres',
        img: 'https://picsum.photos/id/3/1000/300',
        text: '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

    },
    {
        name: 'cuatro',
        img: 'https://picsum.photos/id/43/1000/300',
        text: '4-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

    }];

    public carousel = [{
        title: 'Consejos navegación segura',
        icon: './../../assets/global/img/icons/heart-icon.svg',
    }];
    public modalContent = {
        icon: './../../../assets/global/img/icons/tick-shield-modal-icon.svg',
        title: 'Protección Red Wifi ',
        subtitle: 'Aciva la protección Red Wifi y disfruta de:',
        listIcon: './../../../assets/global/img/icons/list-check-icon.svg',
        listTitle1: 'Protección contra amenazas en tu navegación',
        listSubtile1: ' Consulta el historial de amenazas y descubre el día, la hora y el tipo de amenaza de las que estás protegido',
        listTitle2: 'Sitios Web Autorizados',
        listSubtile2: 'Personaliza una lista con tus  sitios web de confianza',
    }
    constructor(private dataService: WelcomeService) {
    }

    ngOnInit() {
    }
    showWelcome(open) {
        localStorage.removeItem('welcome');
        this.dataService.welcomeState$.emit(open);
    }
}
