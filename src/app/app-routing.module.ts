import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ProtectionComponent } from './pages/protection/protection.component';


const routes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Dashboard'} },
  { path: 'wifi-protection', component: ProtectionComponent, data: { title: 'Protección Wifi Hogar'} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
