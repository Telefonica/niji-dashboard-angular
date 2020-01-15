import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  welcomeState$ = new EventEmitter<string>();

  constructor() { }
}
