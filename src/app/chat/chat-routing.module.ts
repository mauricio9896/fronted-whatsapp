import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyChatsComponent } from './components/body-chats/body-chats.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ConversationsComponent } from './components/conversations/conversations.component';

const routes: Routes = [
  {
    path:'',
    component: ConversationsComponent,
    children:[
      {
        path: 'body',
        component: BodyChatsComponent,
      },
      {
        path:'infoUser',
        component: InfoUserComponent
      },
      {
        path:'templatesChat',
        component: TemplatesComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
