import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationsComponent } from '../components/conversations/conversations.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'home',
    component: DashboardComponent,
    children:[
      {
        path:'chat',
        component: ConversationsComponent,
      },
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
