import { Injectable, NgModule } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

export class ConfigService {
    
    public settings = {
        adBlocking: [{
            profileParam: 'ad_removal',
            valueOn: 2,
            valueOff: 0,
        }],
        parentalControl: [{
            profileParam: 'parental_control',
            valueOn: 2,
            valueOff: 0,
        }],
        privacy: [{
            profileParam: 'anti_tracking',
            valueOn: 1,
            valueOff: 0,
        }],
        protection: [{
            profileParam: 'malware',
            valueOn: 1,
            valueOff: 0,
        }, {
            profileParam: 'phishing',
            valueOn: 1,
            valueOff: 0,
        }],
    }

    public getApiUrl() {
        return `${ENV.apiUrl}${ENV.apiPrefix}`;
    }

    public isSettingActive(type: string, user: any) {
        const setting = this.settings[type];
        let isActive = true;
        setting.forEach((set: any) => {
            if (set.valueOff === user[set.profileParam]) {
                isActive = false;
            }
        });
        return isActive;
    }
}
