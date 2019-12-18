import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
    providedIn: 'root',
})

export class UserResolver implements Resolve<any> {
  constructor(private UserService: UserService) {}

  resolve() {
    return this.UserService.getUserProfile();
  }
}