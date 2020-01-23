import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FullLoaderService {
    fullLoaderState$ = new EventEmitter<boolean>();
    constructor() { }
}
