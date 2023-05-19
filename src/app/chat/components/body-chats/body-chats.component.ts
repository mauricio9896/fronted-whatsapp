import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { messagesModel } from '../../models/bodyModel.model';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-chats',
  templateUrl: './body-chats.component.html',
  styleUrls: ['./body-chats.component.scss'],
})
export class BodyChatsComponent implements OnInit, OnDestroy {

  messages: messagesModel[] = [];

  constructor(private service: ChatService, private elementRef: ElementRef, private route : ActivatedRoute) {}

  ngOnInit(): void {

    this.messages = this.service.getConversation();
    this.scrollToBottom();

    this.service.message$.subscribe((mensajes) => {
      this.messages.push(mensajes);
      this.scrollToBottom();
    });
  }

  ngOnDestroy(): void {
    this.messages = [];
  }

  scrollToBottom(): void {
    const chatContainer = this.elementRef.nativeElement.querySelector('#chatContainer');
    setTimeout(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 5);
  }
}
