import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
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
    public msisdn:string = '';
    private ADMIN:string = 'ADMIN';
    private USER:string = 'USER';

    constructor (
        private http: HttpClient,
        private logger: LoggerService,
        private config: ConfigService,
        private phoneService: PhoneNumberService
    ) {
        // this.getUserProfile()
        // .subscribe((response) => {
        //     this.processUserProfile(response);
        // })
    }

    public isAdmin() {
        return this.user.role === this.ADMIN;
    }

    public isSettingActive(setting: string) {
        return this.config.isSettingActive(setting, this.user);
    }

    public getUserProfile() : Observable<any> {
        return new Observable((observer) => {
            this.http.get(`${this.config.getApiUrl()}/users/me`)
            .subscribe((response: any) => {
                const numbers = response.siblings;
                this.msisdn = numbers[0];
                numbers.forEach((number: any) => {
                    this.user[number] = {}
                    this.user[number]['main'] = this.phoneService.setNumber(number, ENV.countryCode);
                    this.user[number]['services'] = {};
                    this.getUserMsisdn(number)
                    .subscribe((response: any) => {
                        Object.keys(this.config.settings).forEach((settingKey) => {
                            this.user[number]['services'][settingKey] = this.config.isSettingActive(settingKey, response);
                        });
                    });
                });
                observer.complete()
            })
        });        
    }

    public getUserMsisdn(msisdn: string): Observable<any> {
        return this.http.get(`${this.config.getApiUrl()}/users/${msisdn}`)
    }

    public processUserProfile(response: any) {
        
    }
}