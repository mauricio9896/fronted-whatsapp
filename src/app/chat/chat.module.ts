import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './components/chat/conversations.component';
import { SharedModule } from '../shared/shared.module';
import { UserchatComponent } from './components/user-chat/userchat.component';
import { BodyChatsComponent } from './components/body-chats/body-chats.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './services/chat.service';



@NgModule({
  declarations: [
    ConversationsComponent,
    UserchatComponent,
    BodyChatsComponent,
    InfoUserComponent,
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ],
  exports:[
    ConversationsComponent,
  ],
  providers:[
    ChatService
  ]
})
export class ChatModule { }
