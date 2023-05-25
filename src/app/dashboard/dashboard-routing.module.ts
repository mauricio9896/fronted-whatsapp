import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/home/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'productos',
        loadChildren: ()=> import('../productos/productos.module').then((m)=>m.ProductosModule),
      },
      { path: 'servicios',
        loadChildren: ()=> import('../servicios/servicios.module').then((m)=>m.ServiciosModule),
      },
      {
        path: 'msg',
        loadChildren: ()=> import('../chat/chat.module').then((m)=>m.ChatModule),
        outlet:'s'
      }
    ],
  },

  { path: '**', redirectTo: '/home/productos' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
