import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ChatRoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ConversationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
