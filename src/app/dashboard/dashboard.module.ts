import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/home/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChatModule } from '../chat/chat.module';
import { PruebaComponent } from './components/home/prueba/prueba.component';

@NgModule({
  declarations: [DashboardComponent, PruebaComponent],
  imports: [CommonModule, DashboardRoutingModule, ChatModule],
})
export class DashboardModule {}
