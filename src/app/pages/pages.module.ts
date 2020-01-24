import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { MainComponent } from './main/main.component';
import { ProtectionComponent } from './protection/protection.component';
import { DeviceProtectionMcafeeComponent } from './device-protection-mcafee/device-protection-mcafee.component';

import { ComponentsModule } from '../components/components.module';

import {
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { ThreatsComponent } from './threats/threats.component';
import { WhitelistComponent } from './whitelist/whitelist.component';

@NgModule({
    declarations: [
        MainComponent,
        ProtectionComponent,
        DeviceProtectionMcafeeComponent,
        ThreatsComponent,
        WhitelistComponent
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
