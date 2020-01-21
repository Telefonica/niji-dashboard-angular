import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from "rxjs/index";


@Injectable({
    providedIn: 'root',
})

export class UserResolver implements Resolve<any> {
  constructor(private UserService: UserService) {}

  resolve(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.UserService.getUserProfile().subscribe(response => this.UserService.processUserProfile(response));
  }
}