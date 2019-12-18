import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { ConfigService } from './config.service';
import { PhoneNumberService } from './phonenumber.service';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

@NgModule({
    providers: [
        LoggerService,
        ConfigService,
        PhoneNumberService
    ]
})

export class UserService {
  
    public user:any = {};
    private ADMIN:string = 'ADMIN';
    private USER:string = 'USER';

    constructor (
        private http: HttpClient,
        private logger: LoggerService,
        private config: ConfigService,
        private phoneService: PhoneNumberService
    ) {

    }

    public isAdmin() {
        return this.user.role === this.ADMIN;
    }

    public isSettingActive(setting: string) {
        return this.config.isSettingActive(setting, this.user);
    }

    public getUserProfile() {
        this.http.get(`${this.config.getApiUrl()}/users/me`)
        .subscribe((response: any) => {
            const numbers = response.siblings;
            numbers.forEach((number: any) => {
                this.user[number] = {}
                this.user[number]['main'] = this.phoneService.setNumber(number, ENV.countryCode);
                this.user[number]['services'] = {};
                this.http.get(`${this.config.getApiUrl()}/users/${number}`)
                .subscribe((response: any) => {
                    Object.keys(this.config.settings).forEach((settingKey) => {
                        this.user[number]['services'][settingKey] = this.config.isSettingActive(settingKey, response);
                    });
                });
            });
        });
        return this.user;
    }
}