import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Lazy loading
const routes: Routes = [
  {
    path:"",
    loadChildren: ()=> import('./chat/chat.module').then(m => m.ChatModule),
  },
  {
    path:'**',
    redirectTo:''
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
