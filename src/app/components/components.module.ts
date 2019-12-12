import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import {
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatExpansionModule
} from '@angular/material';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { HeaderStateComponent } from './header-state/header-state.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainMenuDropdownComponent } from './main-menu-dropdown/main-menu-dropdown.component';
import { StatusIconsComponent } from './status-icons/status-icons.component';
import { SecStatusComponent } from './sec-status/sec-status.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainMenuDropdownComponent,
    CarouselComponent,
    HeaderComponent,
    HeaderStateComponent,
    StatusIconsComponent,
    SecStatusComponent
  ],
  exports: [
    MainLayoutComponent,
    MainMenuDropdownComponent,
    CarouselComponent,
    HeaderComponent,
    HeaderStateComponent,
    StatusIconsComponent,
    SecStatusComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SwiperModule,
    MatListModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
})
export class ComponentsModule { }
