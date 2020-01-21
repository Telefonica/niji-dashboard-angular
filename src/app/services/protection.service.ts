import { Injectable, NgModule, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { ConfigService } from './config.service';
import { UserService } from './user.service';
import { Observable } from "rxjs/index";
import { first } from "rxjs/operators";
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

@NgModule({
    providers: [
        LoggerService,
        ConfigService,
        UserService
    ]
})

export class ProtectionService {

    constructor (
        private http: HttpClient,
        private logger: LoggerService,
        private config: ConfigService,
        private userService: UserService
    ) {

    }

    public getWhitelist(msisdn: string): Observable<any> { 
        return this.http.get(`${this.config.getApiUrl()}/users/${msisdn || this.userService.msisdn}/protection/whitelist`);
    }

    public addToWhitelist(domain: string): Observable<any> {
        return this.http.post(`${this.config.getApiUrl()}/users/${this.userService.msisdn}/protection/whitelist`, domain);    
    }

    public deleteFromWhitelist(domain: string): Observable<any> {
        return this.http.delete(`${this.config.getApiUrl()}/users/${this.userService.msisdn}/protection/whitelist/${domain}`);
    }

    public getThreats(msisdn: string = null): Observable<any> {
        console.log(this.userService.msisdn);
        return this.http.get(`${this.config.getApiUrl()}/statistics/${msisdn || this.userService.msisdn}/threats`, {
            // from: getDateRange().start.utc().format('YYYYMMDD'),
            // now: moment().utc().format('YYYYMMDDHHmmss'),
            // protection_type,
        });
    }
}