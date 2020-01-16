import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { WelcomeService } from 'src/app/services/welcome.service';
import { Slides } from 'src/app/components/full-carousel/slideContent';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-full-carousel',
  templateUrl: './full-carousel.component.html',
  styleUrls: ['./full-carousel.component.scss']
})
export class FullCarouselComponent implements OnInit, OnDestroy {
  public welcome: string;
  public open = true;
  public show = true;
  public last = false;
  public type = 'component';
  public disabled = false;
  public index = 0;
  public pagination;
  public slides = [];
  private subscription: Subscription;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      hideOnClick: false,
    },
    autoplay: {
      delay: 8000,
    }
  };

  public onIndexChange(index: number) {
    this.index = index + 1;

  }

  public transitionIsStart() {
    this.pagination = document.querySelector('.swiper-pagination');
    if (this.index === this.slides.length) {
      this.pagination.classList.add('hide');
    } else {
      this.pagination.classList.remove('hide');
    }
    this.last = false;
  }
  constructor(private dataService: WelcomeService, public slidesContent: Slides) { }


  ngOnInit() {

    this.slides = this.slidesContent.defaultSlides;
    this.subscription = this.dataService.welcomeState$.subscribe(state => {
      this.welcome = state;
      switch (state) {
        case 'openDefault':
          this.open = true;
          break;
        case 'openBrowseProtection':
          this.slides = this.slidesContent.browseProtection;
          this.open = true;
          break;
        case 'openDeviceProtection':
          this.slides = this.slidesContent.deviceProtection;
          this.open = true;
          break;
        default:
          this.open = false;
          break;
      }
    });
    this.checkDisplay();
    this.welcome = this.readLocalStorageValue('welcome');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  readLocalStorageValue(key) {
    return localStorage.getItem(key);
  }

  closeWelcome() {
    localStorage.setItem('welcome', 'closed');
    this.checkDisplay();
  }

  checkDisplay() {
    this.welcome = this.readLocalStorageValue('welcome');
    if (this.welcome !== null) {
      this.open = false;
    }
  }

}
