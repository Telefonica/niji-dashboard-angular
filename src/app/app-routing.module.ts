import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProtectionComponent } from './pages/protection/protection.component';
import { DeviceProtectionMcafeeComponent } from './pages/device-protection-mcafee/device-protection-mcafee.component';
import { UserResolver } from './services/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'wifi-protection',
    component: ProtectionComponent,
    data: {
      title: 'Protección Wifi Hogar'
    }
  },
  {
    path: 'device-protection-mcafee',
    component: DeviceProtectionMcafeeComponent,
    data: {
      title: 'Seguridad Dispositivo Mcafee'
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
