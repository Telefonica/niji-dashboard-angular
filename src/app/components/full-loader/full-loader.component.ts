import { Component, OnInit } from '@angular/core';
import { FullLoaderService } from 'src/app/services/full-loader.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'niji-full-loader',
    templateUrl: './full-loader.component.html',
    styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent implements OnInit {
    public loaderOpen = false;
    private subscription: Subscription;
    constructor(private dataService: FullLoaderService) { }

    ngOnInit() {
        this.subscription = this.dataService.fullLoaderState$.subscribe(state => {
            this.loaderOpen = state;
        });
    }

}
