import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatListModule } from '@angular/material/list';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainMenuDropdownComponent } from './components/main-menu-dropdown/main-menu-dropdown.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProtectionComponent } from './protection/protection.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderStateComponent } from './components/header-state/header-state.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainMenuDropdownComponent,
    MainComponent,
    CarouselComponent,
    ProtectionComponent,
    HeaderComponent,
    HeaderStateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
