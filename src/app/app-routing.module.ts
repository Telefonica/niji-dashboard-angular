import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProtectionComponent } from './pages/protection/protection.component';
import { DeviceProtectionMcafeeComponent } from './pages/device-protection-mcafee/device-protection-mcafee.component';
import { UserResolver } from './services/user.resolver';
import { ThreatsComponent } from './pages/threats/threats.component';
import { WhitelistComponent } from './pages/whitelist/whitelist.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {
            user: UserResolver
        }
    },
    {
        path: 'protection',
        component: ProtectionComponent,
        data: {
            title: 'Protección'
        }
    },
    {
        path: 'device-protection-mcafee',
        component: DeviceProtectionMcafeeComponent,
        data: {
            title: 'Seguridad Dispositivo Mcafee'
        }
    },
    {
        path: 'threats',
        component: ThreatsComponent,
        resolve: {
            user: UserResolver
        },
        data: {
            title: 'Listado de amenazas',
            hideStateHeader: true
        }
    },
    {
        path: 'whitelist',
        component: WhitelistComponent,
        data: {
            title: 'Páginas de confianza',
            hideStateHeader: true
        }
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
