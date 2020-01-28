import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'niji-security-level',
    templateUrl: './security-level.component.html',
    styleUrls: ['./security-level.component.scss']
})
export class SecurityLevelComponent implements OnInit {
    public SECURITY_LEVEL_LOW = 2;
    public SECURITY_LEVEL_MEDIUM = 5;
    public SECURITY_LEVEL_HIGH = 8;
    public config = {
        msg: 'Esta es una vista de <strong>NO TITULAR</strong>, para ver todas las opciones que tienes para proteger tus dispositivos, accede con las credenciales del <strong>TITULAR</strong>',
        linkTxt: 'Cambiar a titular',
        link: 'sampleLink',
    };

    public securityLevel = [
        {
            levelCaption: 'NIVEL DE PROTECCIÓN:',
            protectionCaption: 'BAJA',
            link: 'Aumenta el nivel de protección',
            protection: 1
        }
    ];

    public modalContent = {
        icon: './../../../assets/global/img/icons/shell-upgrade-icon.svg',
        title: 'Nivel de protección',
        subtitle: 'Para conseguir que el nivel de protección de la barra aumente, sigue los siguiente pasos: ',
        switch: true,
        listIcon: '',
        listTitle1: 'Protección Básica',
        listSubtile1: 'Activa la Protección Red Wifi y mantente protegido de amenazas',
        listTitle2: 'Seguridad Dispositivo',
        listSubtile2: 'Contrata el servicio de Seguridad Dispositivo y protege 5 dispositivos tanto dentro como fuera de casa',
        buttonAccept: 'Activar'
    }

    constructor() { }

    ngOnInit() {
    }

}
