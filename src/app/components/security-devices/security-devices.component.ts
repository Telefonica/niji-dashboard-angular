import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'niji-security-devices',
    templateUrl: './security-devices.component.html',
    styleUrls: ['./security-devices.component.scss']
})
export class SecurityDevicesComponent implements OnInit {
    public MAX_LICENSES = 5;
    public card = [
        {
            cardTitle: 'Mis dispositivos protegidos',
            cardDescription: 'Protege 5 dispositivos a tu elección, tanto dentro como fuera de casa.',
            btn: 'Descargar licencias',
            licensesCaption: 'Licencias Disponibles',
            dimiss: 'Dar de baja Seguridad Dispositivo',
            level: 2,
            used_licences: 3,
            protectedDevices: [
                {
                    name: 'iPhone 8',
                    link: 'sampleLink'
                },
                {
                    name: 'Samsung S10'
                },
                {
                    name: 'Xiaomi Redmi Note 7'
                }
            ]
        }
    ];
    constructor() { }

    ngOnInit() {
    }
    hasUsedLicenses() {
        if (this.card[0].used_licences > 0) {
            return true;
        } else {
            return false;
        }
    }
}
