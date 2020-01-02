import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss'],
})
export class MainLayoutComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  routeDataTitle: string;
  private _mobileQueryListener: () => void;

  constructor(public changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 1280px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', () => { this._mobileQueryListener; });
  }
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeDataTitle = data.state.root.firstChild.data.title;
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', () => { this._mobileQueryListener });
  }

}

