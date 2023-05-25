import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/home/dashboard.component';
import { PruebaComponent } from './components/home/prueba/prueba.component';

// const routes: Routes = [
//   { path: '',
//     component: DashboardComponent,
//     children:[
//       {
//         path: 'productos',
//         loadChildren: ()=> import('../productos/productos.module').then((m)=>m.ProductosModule)
//       },
//       {
//         path: 'servicios',
//         loadChildren: ()=> import('../servicios/servicios.module').then((m)=>m.ServiciosModule)
//       },
//       {
//         path: 'pruebas',
//         component: PruebaComponent,
//       }
//     ]
//   },
//   {
//     path: 'chat',
//     outlet: 'secondRouter',
//     component: PruebaComponent
//   },

//   { path: '**', redirectTo: '/home/productos' }
// ];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then((m) => m.ProductosModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../servicios/servicios.module').then((m) => m.ServiciosModule)
      },
    ]
  },
  {
    path: 'chat',
    outlet: 'secondRouter',
    component: PruebaComponent
  },
  { path: '**', redirectTo: '/home/productos' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
