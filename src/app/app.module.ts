import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { PruebaComponent } from './prueba/prueba.component';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatListModule } from '@angular/material/list';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatTreeModule } from '@angular/material/tree';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuDropdownComponent } from './main-menu-dropdown/main-menu-dropdown.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardsComponent } from './cards/cards.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    SidenavAutosizeExampleComponent,
    MainLayoutComponent,
    MainMenuComponent,
    MainMenuDropdownComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    SwiperModule,
    MatListModule,
    MatTreeModule,
    MatExpansionModule
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
