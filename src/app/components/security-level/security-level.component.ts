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
    constructor() { }

    ngOnInit() {
    }

}
