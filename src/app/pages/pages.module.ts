import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { MainComponent } from './main/main.component';
import { ProtectionComponent } from './protection/protection.component';

import { ComponentsModule } from '../components/components.module';

import {
  MatSliderModule,
  MatCardModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [
    MainComponent,
    ProtectionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ]
})
export class PagesModule { }
