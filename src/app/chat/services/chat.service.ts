import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { allConversations } from '../models/bodyModel.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private state_chat = new Subject<boolean>();
  state_chat$ = this.state_chat.asObservable();


  // DATA DE PRUEBA
  private chats: allConversations[] = [
    {
      id:'1',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'2',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
      name: 'Brayan Cadavid',
      date: '13 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'3',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Luis Vera ',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      id:'4',
      photo: 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
  ];

  constructor(private http: HttpClient) {}

  getAllConversations():allConversations[]{
    return this.chats;
  }

  changeStateChat(template : boolean){
    this.state_chat.next(template)
  }
}
