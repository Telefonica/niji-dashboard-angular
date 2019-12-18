import { Injectable, NgModule } from '@angular/core';
import { PhoneNumberUtil, PhoneNumberFormat, PhoneNumberType, PhoneNumber } from 'google-libphonenumber';

@Injectable({
    providedIn: 'root',
})

export class PhoneNumberService {
    private phoneNumberUtil = PhoneNumberUtil.getInstance();

    public setNumber (phoneNumber: string, country: string) {
        const number = this.phoneNumberUtil.parse(phoneNumber, country);
        if (this.phoneNumberUtil.isValidNumber(number)) {
            const msisdn = this.phoneNumberUtil.parse(
                this.phoneNumberUtil.format(number, PhoneNumberFormat.NATIONAL),
                country
            );
            return {
                msisdn: this.phoneNumberUtil.format(number, PhoneNumberFormat.NATIONAL),
                type: this.phoneNumberUtil.getNumberType(msisdn) === PhoneNumberType.FIXED_LINE ? 'fixed' : 'mobile'
            };
         }
    }
}
